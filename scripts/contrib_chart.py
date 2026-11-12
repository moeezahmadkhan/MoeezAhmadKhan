"""Build assets/contributions.svg from the public GitHub contribution calendar.

Run: python scripts/contrib_chart.py [username]
Stdlib only, so the GitHub Action needs no install step.
"""
import datetime as dt
import re
import sys
import urllib.request
from pathlib import Path

USER = sys.argv[1] if len(sys.argv) > 1 else "moeezahmadkhan"
START = dt.date(2025, 7, 1)  # account created 2025-07-15
OUT = Path(__file__).resolve().parent.parent / "assets" / "contributions.svg"

CELL = re.compile(r'data-date="(\d{4}-\d\d)-\d\d"[^>]*>.*?</td>\s*<tool-tip[^>]*>([^<]*)<', re.S)


def monthly(year):
    url = f"https://github.com/users/{USER}/contributions?from={year}-01-01&to={year}-12-31"
    html = urllib.request.urlopen(url, timeout=30).read().decode()
    counts = {}
    for month, tip in CELL.findall(html):
        n = re.match(r"\d+", tip.replace(",", ""))  # "No contributions" -> 0
        counts[month] = counts.get(month, 0) + (int(n.group()) if n else 0)
    if not counts:
        raise SystemExit(f"no calendar cells parsed for {year}; GitHub markup changed?")
    return counts


def parse_check():
    sample = '<td data-date="2026-05-02" x></td> <tool-tip id=a>1,204 contributions on May 2nd.</tool-tip>'
    assert CELL.findall(sample) == [("2026-05", "1,204 contributions on May 2nd.")]


def render(series, totals):
    w, h, left, top, base = 760, 250, 24, 64, 200
    peak = max(v for _, v in series) or 1
    step = (w - 2 * left) / len(series)
    bars = []
    for i, (month, v) in enumerate(series):
        bh = max(2, round(v / peak * (base - top - 18)))
        x = left + i * step + 3
        bw = step - 6
        d = dt.date.fromisoformat(month + "-01")
        cls = "bar hot" if v == peak else "bar"
        bars.append(
            f'<rect class="{cls}" x="{x:.1f}" y="{base - bh}" width="{bw:.1f}" height="{bh}" rx="3">'
            f"<title>{d:%b %Y}: {v:,} contributions</title></rect>"
            f'<text class="m" x="{x + bw / 2:.1f}" y="{base + 16}">{d:%b}</text>'
        )
        if v == peak or i == len(series) - 1:
            bars.append(f'<text class="v" x="{x + bw / 2:.1f}" y="{base - bh - 6}">{v:,}</text>')
    years = "  ·  ".join(f"{y}: {n:,}" for y, n in totals.items())
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="Monthly GitHub contributions. {years}">
<style>
  :root {{ --fg:#1f2328; --mute:#656d76; --bar:#9be9a8; --hot:#1a7f37; --line:#d0d7de; }}
  @media (prefers-color-scheme: dark) {{ :root {{ --fg:#e6edf3; --mute:#8d96a0; --bar:#0e4429; --hot:#39d353; --line:#30363d; }} }}
  text {{ font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; fill: var(--fg); }}
  .t {{ font-size:15px; font-weight:700; }} .s {{ font-size:12px; fill:var(--mute); }}
  .m {{ font-size:10px; fill:var(--mute); text-anchor:middle; }} .v {{ font-size:11px; text-anchor:middle; font-weight:700; }}
  .bar {{ fill: var(--bar); }} .hot {{ fill: var(--hot); }}
</style>
<text class="t" x="{left}" y="26">$ contributions --per-month --since {START:%Y-%m}</text>
<text class="s" x="{left}" y="46">{years}  ·  public + private, from my GitHub calendar</text>
<line x1="{left}" y1="{base}" x2="{w - left}" y2="{base}" stroke="var(--line)"/>
{''.join(bars)}
</svg>
"""


def main():
    parse_check()
    today = dt.date.today()
    counts, totals = {}, {}
    for year in range(START.year, today.year + 1):
        c = monthly(year)
        counts.update(c)
        totals[year] = sum(c.values())
    series = []
    d = START
    while d <= today:
        key = f"{d:%Y-%m}"
        series.append((key, counts.get(key, 0)))
        d = (d.replace(day=28) + dt.timedelta(days=4)).replace(day=1)
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(render(series, totals))
    print(f"wrote {OUT} ({sum(totals.values()):,} total)")


if __name__ == "__main__":
    main()

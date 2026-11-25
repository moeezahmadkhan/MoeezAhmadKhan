"""Make the profile silhouette and README banner from a background-removed portrait.

usage: python scripts/avatar.py in.png assets [x0,y0,x1,y1]

The optional box crops the input first (head and shoulders). Writes into the
output folder:
  silhouette.png   three-tone teal silhouette on a light background (GitHub avatar)
  banner.svg       animated README banner with the silhouette embedded
"""
import base64
import io
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

SIZE = 960                       # work size; output is half this
INK, MID, LIGHT = (13, 17, 23), (17, 94, 89), (94, 234, 212)
PAPER = (240, 253, 250)          # light teal background
STEPS = (75, 175)                # brightness cut-offs: hair/shadow | skin | shirt


def silhouette(src: Image.Image) -> Image.Image:
    src = src.convert("RGBA")
    # pad to a square with the subject centred and sitting on the bottom edge
    w, h = src.size
    side = max(w, h)
    sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    sq.paste(src, ((side - w) // 2, side - h))
    big = sq.resize((SIZE, SIZE), Image.LANCZOS)

    body = np.array(big.getchannel("A").filter(ImageFilter.GaussianBlur(4))) > 128
    lum = np.array(big.convert("L").filter(ImageFilter.GaussianBlur(7)), float)
    tones = np.array([INK, MID, LIGHT], np.uint8)[np.digitize(lum, STEPS)]

    img = np.empty((SIZE, SIZE, 3), np.uint8)
    img[:] = PAPER
    img[body] = tones[body]
    # mode filter twice: merges small specks into the surrounding tone
    out = Image.fromarray(img).filter(ImageFilter.ModeFilter(13)).filter(ImageFilter.ModeFilter(13))
    return out.resize((SIZE // 2, SIZE // 2), Image.LANCZOS)


BANNER = """<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="280" viewBox="0 0 1000 280">
  <style>
    .name {{ font: 700 40px 'Segoe UI', Helvetica, Arial, sans-serif; fill: #F0FDFA; }}
    .role {{ font: 500 18px 'Segoe UI', Helvetica, Arial, sans-serif; fill: #5EEAD4; letter-spacing: 1px; }}
    .line {{ font: 500 18px ui-monospace, 'Fira Code', Consolas, monospace; fill: #CCFBF1; opacity: 0; }}
    .line {{ animation: cycle 12s infinite; }}
    .l2 {{ animation-delay: 3s; }} .l3 {{ animation-delay: 6s; }} .l4 {{ animation-delay: 9s; }}
    @keyframes cycle {{ 0%, 25% {{ opacity: 0; }} 2%, 23% {{ opacity: 1; }} }}
    .cursor {{ fill: #2DD4BF; animation: blink 1s steps(1) infinite; }}
    @keyframes blink {{ 50% {{ opacity: 0; }} }}
    .px {{ fill: #2DD4BF; animation: float 6s ease-in-out infinite; }}
    @keyframes float {{ 0%, 100% {{ transform: translateY(0); opacity: .25; }} 50% {{ transform: translateY(-14px); opacity: .9; }} }}
    .ring {{ animation: pulse 4s ease-in-out infinite; transform-origin: 160px 140px; }}
    @keyframes pulse {{ 50% {{ transform: scale(1.04); opacity: .5; }} }}
    @media (prefers-reduced-motion: reduce) {{ .px, .ring, .cursor {{ animation: none; }} .line {{ animation: none; }} .l1 {{ opacity: 1; }} }}
  </style>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0D1117"/><stop offset="1" stop-color="#0F2E2B"/>
    </linearGradient>
    <clipPath id="circle"><circle cx="160" cy="140" r="100"/></clipPath>
  </defs>
  <rect width="1000" height="280" rx="18" fill="url(#bg)"/>
  <g>
    <rect class="px" x="880" y="40" width="10" height="10"/>
    <rect class="px" x="930" y="90" width="6" height="6" style="animation-delay:1.5s"/>
    <rect class="px" x="840" y="200" width="8" height="8" style="animation-delay:3s"/>
    <rect class="px" x="950" y="220" width="12" height="12" style="animation-delay:4.5s"/>
    <rect class="px" x="320" y="30" width="6" height="6" style="animation-delay:2s"/>
  </g>
  <circle class="ring" cx="160" cy="140" r="110" fill="none" stroke="#2DD4BF" stroke-width="3"/>
  <circle cx="160" cy="140" r="100" fill="#F0FDFA"/>
  <image href="data:image/png;base64,{img}" x="60" y="40" width="200" height="200" clip-path="url(#circle)"/>
  <text class="name" x="310" y="105">Moeez Ahmad Khan</text>
  <text class="role" x="312" y="138">AI / MLOPS ENGINEER · LAHORE</text>
  <text class="line l1" x="336" y="190">I build LLM agents that ship</text>
  <text class="line l2" x="336" y="190">safety gates that fail closed</text>
  <text class="line l3" x="336" y="190">local inference on an RTX 3090</text>
  <text class="line l4" x="336" y="190">edge vision on a Sophon BM1688</text>
  <rect class="cursor" x="312" y="175" width="12" height="20"/>
</svg>
"""


if __name__ == "__main__":
    img = Image.open(sys.argv[1])
    if len(sys.argv) > 3:
        img = img.crop(tuple(int(v) for v in sys.argv[3].split(",")))
    out_dir = Path(sys.argv[2])

    sil = silhouette(img)
    assert sil.size == (SIZE // 2,) * 2
    sil.save(out_dir / "silhouette.png", optimize=True)

    buf = io.BytesIO()
    sil.resize((240, 240), Image.LANCZOS).quantize(16).save(buf, "PNG", optimize=True)
    (out_dir / "banner.svg").write_text(BANNER.format(img=base64.b64encode(buf.getvalue()).decode()))

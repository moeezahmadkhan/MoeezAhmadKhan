### Moeez Ahmad Khan · AI / MLOps engineer · Lahore

I build AI systems that run in production: agents, RAG and edge computer vision, on hardware
I can see. That usually means a local GPU, a Sophon edge box or a Hetzner server, not a demo
notebook.

[moeezahmadkhan.com](https://moeezahmadkhan.com) ·
[LinkedIn](https://www.linkedin.com/in/moeez-ahmad-khan-68a403364) ·
[Email](mailto:kmoeez2018@gmail.com) ·
[Instagram](https://instagram.com/moozisthebest)

<p align="center">
  <img src="assets/contributions.svg" alt="My monthly GitHub contributions since July 2025" width="100%">
</p>

I made 38 contributions in 2025. In 2026 I have made more than 5,000. Most of that work is in private
repositories, so here is what it was.

#### The private work

An **AI health agent for a US telehealth platform**. Members use it to ask about their
wearables, lab results and symptoms. It has to answer from their real data and route
emergencies to a human.

- **Python / FastAPI** ML service and **NestJS** backend. The agent switches between
  **local Ollama models** and **Gemini on Vertex**, with failover when the provider returns 429.
- An intent router and a **crisis-safety gate that fails closed**. Grounding scrubbers stop
  answers from inventing data or misreading the dates the member asked about.
- Lab-range grounding with unit conversion, wearable sync, long-term memory, clinician
  review, and AI visit notes from Zoom recordings.
- A replay-based **regression suite of hundreds of real conversations**. Every fix is
  checked against it on a local GPU before it ships.

#### Public work

| Project | What it is |
|---|---|
| [**Relay**](https://github.com/moeezahmadkhan/Relay-LabLab) | Hackathon build: a self-healing PR pipeline. Four agents in four different frameworks triage, plan, code, review and security-check an issue through a Band chatroom. A human approves the merge. |
| [**Vanguard**](https://github.com/moeezahmadkhan/vanguard) | Edge computer vision on a Sophon BM1688: biometric attendance, activity auditing and perimeter alerts. Python inference with a NestJS API. |
| [**Pawlyse**](https://github.com/moeezahmadkhan/Pawlyse) | Vet triage assistant. RAG plus breed-specific vital signs. FastAPI. |
| [**Nexis**](https://github.com/moeezahmadkhan/nexis) | Modular AI platform: NestJS API, React front end and a FastAPI ML engine. |
| [**linkedin-scraper**](https://github.com/moeezahmadkhan/linkedin-scraper) | Collects public LinkedIn jobs, hiring posts and B2B prospects into one Google Sheet, without ever logging in. |
| [**Script Studio**](https://github.com/moeezahmadkhan/descript_alternative) | A Descript-style video script editor: scenes, linked footage, and a teleprompter for recording voiceover. Supabase backend. |
| [**TrackFlow**](https://github.com/moeezahmadkhan/TrackFlow) | Multi-tenant time tracking and HR platform in a single monorepo. |
| [**QuerySphere**](https://github.com/moeezahmadkhan/querysphere) | Real-time community chat. An AI service polishes drafts and recaps rooms, using OpenRouter's free models. |
| [**amazon-sheet-mcp**](https://github.com/moeezahmadkhan/DropshippingMcpAmazon) | An MCP server that scrapes Amazon UK products into a pricing sheet. |

#### What I actually use

```text
agents & LLMs   Ollama · Gemini / Vertex AI · OpenRouter · RAG · Qdrant · MCP servers · eval harnesses
ML & vision     PyTorch · TensorFlow · Sophon edge inference · pandas · NumPy
backend         Python · FastAPI · NestJS · Node · TypeScript · PostgreSQL · Supabase · Redis
frontend        React · Next.js · Vite · Flutter
infra           Docker · AWS (EC2, S3, SSM) · Hetzner · pm2 · local CUDA (RTX 3090)
```

<sub>A GitHub Action rebuilds the chart every day from my contribution calendar (`scripts/contrib_chart.py`).</sub>

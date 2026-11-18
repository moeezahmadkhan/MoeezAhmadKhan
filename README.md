### Moeez Ahmad Khan · AI / MLOps engineer · Lahore

I build LLM agents and computer-vision systems and get them running in production. I also do
the work around the model: safety gates, evaluation, inference and the infrastructure that
keeps it all up.

[moeezahmadkhan.com](https://moeezahmadkhan.com) ·
[LinkedIn](https://www.linkedin.com/in/moeez-ahmad-khan-68a403364) ·
[Email](mailto:kmoeez2018@gmail.com)

---

#### 1 · Agentic LLM systems and RAG
I design agents that route intent, call tools, remember context and hand off to people.
My main work in 2026 is a health AI agent for a US telehealth platform (private). It answers
members from their real wearable data, lab results and history.
**See:** [Relay](https://github.com/moeezahmadkhan/Relay-LabLab) is a multi-agent PR pipeline
with four agents in four frameworks, built for a hackathon.
[amazon-sheet-mcp](https://github.com/moeezahmadkhan/DropshippingMcpAmazon) is an MCP server.

#### 2 · LLM safety, grounding and evaluation
A model that sounds right isn't enough, so I check its answers:
- **Crisis gates that fail closed:** when the gate is unsure, it blocks the answer.
- **Grounding scrubbers:** they stop answers that invent data or get dates wrong.
- **Replay regression suites:** hundreds of real conversations, re-run after every fix
  before it ships.

**See:** [email-extraction-ladder](https://github.com/moeezahmadkhan/email-extraction-ladder),
where an LLM reads each email and plain Python checks its answer.

#### 3 · High-performance local inference
I run local models with Ollama on an RTX 3090. They fall back to Gemini on Vertex AI when
the GPU is busy or the cloud returns 429 rate-limit errors. I have also tracked down
latency stalls and fixed a pool deadlock that froze the event loop under concurrent chats.

#### 4 · Edge computer vision
I build real-time vision pipelines that run on the device, not in the cloud.
**See:** [Vanguard](https://github.com/moeezahmadkhan/vanguard), which does biometric
attendance, activity auditing and perimeter alerts on a Sophon BM1688.

#### 5 · Containerized AI infrastructure
I ship model services in Docker on AWS (EC2, S3, SSM), Hetzner and GPU clouds, running
under pm2. I moved a production stack from AWS to Hetzner on arm64.
**See:** [Nexis](https://github.com/moeezahmadkhan/nexis), a NestJS API with a separate
FastAPI ML engine.

---

<p align="center">
  <img src="assets/contributions.svg" alt="My monthly GitHub contributions since July 2025" width="100%">
</p>

```text
LLMs & agents   Ollama · Gemini / Vertex AI · OpenRouter · RAG · Qdrant · MCP · LLM evals
ML & vision     PyTorch · TensorFlow · Sophon edge inference · pandas · NumPy
serving         Python · FastAPI · NestJS · TypeScript · PostgreSQL · Supabase · Redis
infra           Docker · AWS · Hetzner · pm2 · CUDA (RTX 3090) · vast.ai / RunPod
```

<sub>A GitHub Action rebuilds the chart daily from my contribution calendar (`scripts/contrib_chart.py`).</sub>

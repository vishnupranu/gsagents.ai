# gsagents.ai

**Production-grade autonomous AI software engineering platform**

gsagents.ai combines the best of Devin AI, Cursor, Windsurf, Lovable, Bolt.new, Replit Agent, and OpenHands into a unified self-hosted system.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/vishnupranu/gsagents.ai.git
cd gsagents.ai

# Install dependencies
pnpm install

# Start development
pnpm dev

# Or use Docker
docker-compose -f infrastructure/docker/compose/dev.yml up -d
```

Access at **http://localhost:3000**

---

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **Multi-Agent System** - 12 specialized AI agents (CEO, Planner, Architect, Frontend, Backend, Database, DevOps, QA, Security, Docs, Marketing)
- **Browser IDE** - Full-featured VS Code in your browser
- **App Builder** - Visual drag-and-drop application builder
- **Workflow Automation** - LangGraph-powered orchestration
- **Browser Automation** - AI-driven web interaction
- **MCP Marketplace** - 10+ MCP server integrations
- **Multiple LLM Providers** - OpenAI, Anthropic, Gemini, DeepSeek, and more

---

## 🏗 Architecture

```
gsagents.ai/
├── apps/
│   └── web/              # Main web application (Next.js)
├── services/
│   ├── openhands/       # Core agent runtime
│   └── langgraph/       # Multi-agent orchestration
├── packages/
│   └── ui/              # Shared UI components
└── infrastructure/
    └── docker/          # Docker configurations
```

---

## 🚢 Deployment

### Docker Compose (Recommended for Self-Hosted)

```bash
docker-compose -f infrastructure/docker/compose/dev.yml up -d
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vishnupranu/gsagents.ai)

1. Click the button above or go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/gsagents

# Redis
REDIS_URL=redis://host:6379

# LLM Providers
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Service URLs
OPENHANDS_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ by the gsagents team

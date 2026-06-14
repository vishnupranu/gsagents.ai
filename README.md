# gsagents.ai

**Production-grade autonomous AI software engineering platform**

gsagents.ai combines the best of Devin AI, Cursor, Windsurf, Lovable, Bolt.new, Replit Agent, and OpenHands into a unified self-hosted system.

## Features

- **Multi-Agent System** - 12 specialized AI agents
- **Browser IDE** - Full-featured VS Code in your browser
- **App Builder** - Visual drag-and-drop application builder
- **Workflow Automation** - LangGraph-powered orchestration
- **Browser Automation** - AI-driven web interaction
- **MCP Marketplace** - 10+ MCP server integrations

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Or use Docker
docker-compose -f infrastructure/docker/compose/dev.yml up -d
```

Access at http://localhost:3000

## Architecture

```
gsagents.ai/
├── apps/web/          # Main web application (Next.js)
├── services/          # Backend services
│   ├── openhands/     # Core agent runtime
│   └── langgraph/     # Multi-agent orchestration
├── packages/          # Shared packages
│   └── ui/            # UI components
└── infrastructure/     # Docker, Kubernetes configs
```

## License

MIT

"use client";

import { Bot, FolderKanban, Rocket, GitBranch, BookOpen, Settings, Plus, Play } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">gsagents.ai</h1>
                <p className="text-xs text-slate-400">Autonomous AI Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-700">
                <Plus className="mr-2 inline h-4 w-4" />
                New Agent
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { icon: Bot, label: "Agents", active: true },
              { icon: FolderKanban, label: "Projects", active: false },
              { icon: GitBranch, label: "Workflows", active: false },
              { icon: Rocket, label: "Deployments", active: false },
              { icon: BookOpen, label: "Knowledge", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  item.active
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Active Agents", value: "12", change: "+2" },
            { label: "Tasks Completed", value: "847", change: "+23%" },
            { label: "Success Rate", value: "94.2%", change: "+1.2%" },
            { label: "Deployments", value: "34", change: "+5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs text-green-400">{stat.change} from last month</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "New Agent", desc: "Create a specialized AI agent", color: "indigo" },
              { title: "App Builder", desc: "Build an app with AI", color: "purple" },
              { title: "Workflow", desc: "Create automated workflow", color: "cyan" },
              { title: "Deploy", desc: "Deploy to cloud", color: "emerald" },
            ].map((action) => (
              <button
                key={action.title}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-left transition-all hover:border-slate-700 hover:bg-slate-800/50"
              >
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-${action.color}-600/20`}>
                  <Play className={`h-6 w-6 text-${action.color}-400`} />
                </div>
                <h3 className="font-semibold group-hover:text-indigo-400">{action.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{action.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Available Agents */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Available Agents</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Frontend Dev", desc: "React, Vue, Next.js", color: "blue" },
              { name: "Backend Dev", desc: "Node.js, Python, Go", color: "green" },
              { name: "DevOps", desc: "Docker, K8s, CI/CD", color: "purple" },
              { name: "QA Engineer", desc: "Testing, Debugging", color: "orange" },
              { name: "Security", desc: "Audits, Scanning", color: "red" },
              { name: "Database", desc: "SQL, NoSQL, Queries", color: "cyan" },
            ].map((agent) => (
              <div
                key={agent.name}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
              >
                <div className={`h-12 w-12 rounded-xl bg-${agent.color}-600`} />
                <div>
                  <h3 className="font-semibold">{agent.name}</h3>
                  <p className="text-sm text-slate-400">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
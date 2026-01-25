---
title: "Postgres Best Practices"
source: "supabase.com/"
originalUrl: "https://supabase.com/blog/postgres-best-practices-for-ai-agents"
publishDate: 2026-01-24
tags: ["postgresql", "ai", "database", "supabase"]
image: "/veille/postgresql.webp"
description: "Supabase released Agent Skills for Postgres Best Practices, a collection of 30 rules across 8 categories to help AI coding agents write correct, performant Postgres code."
---

Supabase is releasing **Agent Skills for Postgres Best Practices** to help **AI coding agents** generate **correct, production-ready Postgres code**. While agents are good at writing code, they often struggle with **Postgres-specific complexity**—including **performance pitfalls**, **indexing tradeoffs**, **connection limits**, and **Row Level Security (RLS)**.<br /><br />

The repository includes **30 authoritative rules** across **8 prioritized categories**, such as **Query Performance**, **Connection Management**, **Security & RLS**, **Schema Design**, **Concurrency & Locking**, and **Advanced Postgres Features**. Each rule provides **clear explanations** with **good and bad code examples**.<br /><br />

These **Agent Skills** follow an **open industry standard**, compatible with tools like **Claude Code**, **Cursor**, **GitHub Copilot**, and **VS Code**, allowing agents to reference **explicit Postgres best practices** instead of relying on incomplete training data.<br /><br />

Supabase built this from **real-world production issues** seen at scale—such as **missing foreign key indexes**, **accidental RLS bypasses**, **locking migrations**, **connection pool exhaustion**, and **hidden full table scans**.<br /><br />

When combined with the **Supabase MCP server**, agents gain both the **ability to execute database changes** and the **judgment to do them safely**. The MCP server handles **execution**, while Agent Skills provide **decision-making guidance**.<br /><br />

The project is **open source**, **community-driven**, and available now at **github.com/supabase/agent-skills**, with installation via **npm** or **Claude plugins**.

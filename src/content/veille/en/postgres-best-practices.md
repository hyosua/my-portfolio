---
title: "Postgres Best Practices"
source: "supabase.com/"
originalUrl: "https://supabase.com/blog/postgres-best-practices-for-ai-agents"
publishDate: 2026-01-24
tags: ["postgresql", "ai", "database", "supabase"]
image: "/veille/postgresql.webp"
description: "Supabase released Agent Skills for Postgres Best Practices, a collection of 30 rules across 8 categories to help AI coding agents write correct, performant Postgres code."
---

Supabase has launched **“Agent Skills”**, a best-practices guide designed to help AI assistants (Cursor, Copilot, Claude) generate **secure and high-performance** Postgres code, addressing gaps in standard training data.<br/><br/>

**Key Highlights**:<br/><br/>

- **Goal**: Prevent common AI mistakes (performance issues, RLS vulnerabilities, migration lockups).
- **Content**: 30 authoritative rules across 8 categories (security, indexing, connection management, etc.), based on real production incidents.
- **Format**: Each rule includes explanations and examples of correct vs. incorrect code.

- **Compatibility**: An open standard usable with Claude Code, Cursor, GitHub Copilot, and VS Code.
- **Architecture**: Works in tandem with Supabase’s MCP server. The “Skills” provide the decision-making framework (know-how), while the MCP server handles technical execution.
- **Availability**: Open-source project available on GitHub (`supabase/agent-skills`) and via npm.


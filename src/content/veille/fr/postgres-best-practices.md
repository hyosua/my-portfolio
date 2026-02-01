---
title: "Bonnes pratiques Postgres"
source: "supabase.com/"
originalUrl: "https://supabase.com/blog/postgres-best-practices-for-ai-agents"
publishDate: 2026-01-24
tags: ["postgresql", "ia", "base de données", "supabase"]
image: "/veille/postgresql.webp"
description: "Supabase a publié des Agent Skills pour les bonnes pratiques Postgres, une collection de 30 règles réparties en 8 catégories pour aider les agents de codage IA à écrire du code Postgres correct et performant."
---

Supabase a lancé les **"Agent Skills"**, un guide de bonnes pratiques pour aider les assistants IA (Cursor, Copilot, Claude) à générer du code Postgres **sécurisé et performant**, comblant ainsi les lacunes des données d'entraînement standard.<br/><br />

**Voici les Points Clés:**<br /><br/>

* **Objectif** : Éviter les erreurs courantes des IA (problèmes de performance, failles RLS, blocages de migration).
* **Contenu** : 30 règles d'autorité réparties en 8 catégories (sécurité, indexation, gestion des connexions, etc.), basées sur des incidents réels de production.
* **Format** : Chaque règle inclut des explications et des exemples de code corrects vs incorrects.

* **Compatibilité** : Standard ouvert utilisable avec Claude Code, Cursor, GitHub Copilot et VS Code.
* **Architecture** : Fonctionne en duo avec le serveur MCP de Supabase. Les "Skills" fournissent le cadre décisionnel (le savoir-faire), tandis que le serveur MCP gère l'exécution technique.
* **Disponibilité** : Projet open source disponible sur GitHub (supabase/agent-skills) et via npm.
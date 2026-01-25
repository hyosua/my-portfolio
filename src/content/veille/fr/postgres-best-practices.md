---
title: "Bonnes pratiques Postgres"
source: "supabase.com/"
originalUrl: "https://supabase.com/blog/postgres-best-practices-for-ai-agents"
publishDate: 2026-01-24
tags: ["postgresql", "ia", "base de données", "supabase"]
image: "/veille/postgresql.webp"
description: "Supabase a publié des Agent Skills pour les bonnes pratiques Postgres, une collection de 30 règles réparties en 8 catégories pour aider les agents de codage IA à écrire du code Postgres correct et performant."
---

Supabase publie des **Agent Skills pour les bonnes pratiques Postgres** afin d’aider les **agents de codage basés sur l’IA** à produire du **code Postgres correct et prêt pour la production**. Bien que les agents sachent générer du code, ils rencontrent souvent des difficultés face à la **complexité propre à Postgres** — notamment les **pièges de performance**, les **compromis liés à l’indexation**, les **limites de connexion** et la **sécurité au niveau des lignes (Row Level Security, RLS)**.<br /><br />

Le dépôt contient **30 règles faisant autorité**, réparties en **8 catégories priorisées**, comme la **performance des requêtes**, la **gestion des connexions**, la **sécurité et le RLS**, la **conception du schéma**, la **concurrence et le verrouillage**, ou encore les **fonctionnalités avancées de Postgres**. Chaque règle inclut des **explications claires** ainsi que des **exemples de code corrects et incorrects**.<br /><br />

Ces **Agent Skills** suivent un **standard ouvert de l’industrie**, compatible avec des outils tels que **Claude Code**, **Cursor**, **GitHub Copilot** et **VS Code**, permettant aux agents de s’appuyer sur des **bonnes pratiques Postgres explicites** plutôt que sur des données d’entraînement incomplètes.<br /><br />

Supabase a construit ces règles à partir de **problèmes réels rencontrés en production à grande échelle**, comme des **index manquants sur les clés étrangères**, des **contournements involontaires du RLS**, des **migrations qui verrouillent les tables**, l’**épuisement des pools de connexions** et des **analyses complètes de tables masquées par les ORM**.<br /><br />

Combinés au **serveur MCP de Supabase**, ces outils offrent aux agents à la fois la **capacité d’exécuter des modifications sur la base de données** et le **discernement nécessaire pour le faire en toute sécurité**. Le serveur MCP gère l’**exécution**, tandis que les Agent Skills apportent un **cadre de décision**.<br /><br />

Le projet est **open source**, **piloté par la communauté**, et disponible dès maintenant sur **github.com/supabase/agent-skills**, avec une installation via **npm** ou des **plugins Claude**.

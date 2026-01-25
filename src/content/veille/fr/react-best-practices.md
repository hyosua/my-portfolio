---
title: "Bonnes pratiques React"
source: "vercel.com"
originalUrl: "https://vercel.com/blog/introducing-react-best-practices"
publishDate: 2026-01-14
tags: ["react", "vercel", "nextjs", "ai"]
image: "/veille/react.png"
description: "Vercel a publié react-best-practices, un dépôt structuré regroupant plus de 40 règles d’optimisation des performances réparties en 8 catégories et priorisées selon leur impact."
---

**react-best-practices** est un framework structuré qui synthétise **plus de 10 ans** d’enseignements sur les performances de **React** et **Next.js**, conçu pour les **développeurs** et les **agents de développement basés sur l’IA**.<br /><br />

Il se concentre sur la résolution en priorité des **problèmes de performance à fort impact**, notamment :
- **L’élimination des waterfalls asynchrones**
- **La réduction de la taille des bundles JavaScript**
- **La prévention des re-renders inutiles**<br /><br />

Le principe fondamental est **la priorisation par impact** : corriger les **temps d’attente** et le **sur-envoi de code** est bien plus important que les micro-optimisations.<br /><br />

Le dépôt comprend **plus de 40 règles** réparties en **8 catégories**, chacune incluant :
- **Un niveau d’impact** (CRITICAL → LOW)
- **Des exemples de code concrets**
- Un fichier **AGENTS.md** compilé pour des **refactorisations pilotées par l’IA** et cohérentes à l’échelle du projet<br /><br />

Ces pratiques sont issues de **cas réels en production** et sont également proposées sous forme de **Agent Skills** pour des outils comme **Cursor**, **Codex** et **Claude Code**.<br /><br />

**Objectif :** réduire la dette de performance sur le long terme et améliorer les métriques React en conditions réelles, à grande échelle.

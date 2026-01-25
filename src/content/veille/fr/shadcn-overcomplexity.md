---
title: "L’incroyable sur-complexité du bouton radio Shadcn"
source: "paulmakeswebsites.com"
originalUrl: "https://paulmakeswebsites.com/writing/shadcn-radio-button"
publishDate: 2026-01-15
tags: ["react", "css", "shadcn", "html"]
image: "/veille/radiobuton.webp"
description: "Les bibliothèques d’interface modernes comme Shadcn et Radix ajoutent une complexité considérable à de simples boutons radio HTML..."
---

Les bibliothèques d’interface modernes comme **Shadcn** et **Radix** introduisent une complexité significative pour de **simples boutons radio HTML**. Elles s’appuient sur de nombreuses dépendances, des centaines de lignes de code **React** et plusieurs kilo-octets de **JavaScript** pour une fonctionnalité pourtant basique.<br /><br />

Plutôt que d’utiliser les **éléments HTML natifs**, ces bibliothèques reconstruisent entièrement les boutons radio à l’aide de boutons enrichis d’**attributs ARIA**. Cette approche contraste avec la simplicité des solutions CSS existantes, qui permettent de styliser efficacement les boutons radio grâce à des techniques comme `appearance: none`, les pseudo-éléments et les pseudo-classes.<br /><br />

Cette **sur-complexité** s’éloigne des **bonnes pratiques ARIA**, augmente la **charge cognitive** pour les développeurs et dégrade les **performances**, alors même que les navigateurs prennent en charge ce type de composant nativement depuis plus de 30 ans.


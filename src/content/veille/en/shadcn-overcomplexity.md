---
title: "The Incredible Overcomplexity of the Shadcn Radio Button"
source: "paulmakeswebsites.com"
originalUrl: "https://paulmakeswebsites.com/writing/shadcn-radio-button"
publishDate: 2024-05-14
tags: ["react", "css", "shadcn", "html"]
image: "/veille/radiobuton.webp"
description: "Modern UI libraries like Shadcn and Radix add significant complexity to simple HTML radio buttons..."
---

Modern UI libraries such as **Shadcn** and **Radix** introduce significant complexity for what should be **simple HTML radio buttons**. They rely on multiple dependencies, **hundreds of lines of React code**, and several kilobytes of **JavaScript** to implement an otherwise basic feature.<br /><br />

Instead of leveraging **native HTML inputs**, these libraries rebuild radio buttons from scratch using buttons enhanced with **ARIA attributes**. This approach stands in contrast to the simplicity of existing CSS solutions, which allow radio buttons to be styled effectively using techniques such as `appearance: none`, pseudo-elements, and pseudo-classes.<br /><br />

This **overcomplexity** runs counter to **ARIA best practices**, increases **cognitive load** for developers, and negatively impacts **performance** for a feature that browsers have supported natively for over 30 years.

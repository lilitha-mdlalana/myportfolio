---
title: 'Understanding JavaScript - Execution Context'
description: 'A mini series of trying to understand how JavaScript actually runs in the browser'
pubDate: '2026-05-28'
tags: ['javascript', 'learning']
---

Welcome to my mini-series - a series I'll call "Understanding JavaScript" (though can we really understand JS  👀).  These are meant to serve as a reference and also explaining my understanding of things I learn as I try to explore the JavaScript language on a deeper level.

We start off with the execution context -  the "room" where the code runs.

**Analogy:** imagine every function call creates a sealed room. That room has a whiteboard (local variables), a door to the hallway outside (scope chain), and a nametag on the door(`this` binding). When the function finishes, the room is destroyed unless something still holds a reference to it ( that's a closure).

The JS engine has two phases for every context before running a single line:
### Creation Phase:
- `var` declarations are found and set to `undefined` (hoisting)
- `function` declarations are fully loaded in memory
- `let/const` are registered but untouchable

### Execution Phase:
Code runs line by line and runs/'executes' each line - also known as the **thread of execution**.

This is why `console.log(x)` before `var x = 5` gives undefined and not an error — `x` was created in the creation phase, just not assigned yet.
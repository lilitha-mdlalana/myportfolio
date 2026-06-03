---
title: 'Understanding JavaScript - Call Stack'
description: 'A mini series of trying to understand how JavaScript actually runs in the browser'
pubDate: '2026-06-01'
tags: ['javascript', 'learning']
---

Building on from the last post about the **Execution Context**, next we talk about the Call Stack, also known "The Ordered Record of Where We Are". This will be a short one as I believe it's quite easy to understand.

### What is the Call Stack:
The *Call Stack* is a LIFO (last in, first out) structure that tracks which execution context is currently active.

```markdown
The call chain looks like this:
handleClick()
└── fetchUserData(id)
    └── renderDashboard()
```

The call stack is basically keeping track of what function is currently running and who called it.

Right now `handleClick()` started running, then it called `fetchUserData(id)`, so `fetchUserData()` gets placed on top of `handleClick()` in the stack. While `fetchUserData()` is running, it calls `renderDashboard()`, so now `renderDashboard()` sits at the very top because it's the function currently being executed.

The stack therefore looks like:
```javascript
renderDashboard()       <- currently executing
fetchUserData(id)
handleClick()
Global Execution Context
```

Once `renderDashboard()` finishes, it gets popped off the stack and execution goes back to `fetchUserData()`. When `fetchUserData()` finishes, it gets popped off and execution returns to `handleClick()`. Finally `handleClick()` finishes and gets popped too.

Think of it like a stack of plates: the last plate added is always the first one to come off. That's why it's called a call **stack**.

```markdown
Fun fact:
A "stack overflow" means you recursed so deeply the stack ran out of allocated memory.
```

**Note**: While JavaScript is executing on the call stack, the browser cannot run other JavaScript. User events, timers, and other callbacks must wait until the stack is empty before they can be processed.

Logging off...
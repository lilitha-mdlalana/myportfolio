---
title: 'Understanding JavaScript - Heap vs Stack Memory'
description: 'A mini series of trying to understand how JavaScript actually runs in the browser'
pubDate: '2026-06-03'
tags: ['javascript', 'learning']
---

Building on from the previous posts about Execution Context and the Call Stack, now we take at the Stack vs Heap memory - how JavaScript actually stores data in memory.

### Stack: fast, ordered, temporary

The stack is where JavaScript keeps track of `function calls` (execution contexts) and primitive values. Primitive values now being any value with the type of: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. When you copy a primitive, you copy the actual value.

```javascript
let a = 10
let b = a

b = 20

console.log(a) // 10
console.log(b) // 20
```

The stack works like a **LIFO structure (last in, first out)** — the same idea as the call stack.

### Heap: dynamic, unordered, long-lived

The heap is where JavaScript stores things like `objects`, `arrays`, `functions`. Instead of storing the actual value in the variable, JavaScript stores a **reference (pointer)** pointing to where the data lives in the heap.

```javascript
let obj1 = { limit: 10 }
let obj2 = obj1

obj2.limit = 20

console.log(obj1.limit) // 20
console.log(obj2.limit) // 20
```

Both variables point to the same object in memory.

So you're not copying the object — you're copying the reference.

### Why this matters: reference equality

With objects, equality is based on reference, not structure.

```javascript
console.log({} === {}) // false
```

Even though they look identical, they live in different places in memory.

But:

```javascript
let a = {}
let b = a

console.log(a === b) // true
```

Because both variables point to the same heap location.

---

### Garbage Collection

JavaScript automatically manages memory using **garbage collection**.
The rule is simple:

> If nothing is referencing a value anymore, it becomes eligible for cleanup.

The engine scans memory and removes anything that is no longer reachable.

### How memory leaks happen

Memory leaks happen when something *still holds a reference* to data you think is gone.

A common example is closures:

```javascript
function setup() {
  let data = { huge: "object" }

  window.addEventListener("click", function () {
    console.log(data)
  })
}
```

Even after `setup()` finishes, the event listener still references `data`, so it stays in memory.

Same idea applies to:

* intervals (`setInterval`)
* timeouts (`setTimeout`)
* global event listeners
* closures capturing variables

### Cleaning up matters

To avoid leaks, you need to remove references when they’re no longer needed:

```javascript
window.removeEventListener("click", handler)
clearInterval(id)
```

If nothing points to the data anymore, the garbage collector can safely clean it up.

Logging off...
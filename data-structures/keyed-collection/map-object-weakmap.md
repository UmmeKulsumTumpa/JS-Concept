
## What is a Map?
A **Map** is a collection of key/value pairs where:
- Keys can be **any value** (not just strings or symbols like in Objects)
- The **order of items is preserved** (insertion order)
- You can easily get the **size** of a Map


## Map vs Object
### Object:
- Only strings or symbols can be used as keys
- Must manually track the size
- Iteration order is **not guaranteed** (although most modern engines preserve it)
- Has default properties from its prototype chain

### Map:
- **Any value** can be used as keys (including objects)
- Easy to get the size using `.size`
- Keeps elements in **insertion order**
- No default keys; just your data

## When to Use Map?
- When keys are **unknown until runtime**
- When keys are **not strings**
- When you want a **reliable iteration order**

## When to Use Object?
- When you want to use logic on properties
- When you don’t need ordering or non-string keys

---

## What is a WeakMap?
A **WeakMap** is similar to Map, but with some key differences:
- Keys must be **objects** or **non-registered symbols**
- Does **not prevent garbage collection** of its keys
- Cannot **iterate**, list keys, or know how many items it holds

### Why Use WeakMap?
- Used to store **private data**
- Good for hiding internal implementation details

### Example: Private Data Storage
```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Use private data
};

module.exports = Public;
```

> Because WeakMap keys are weakly held, once the key object is garbage collected, the value is gone too.

### Important Points:
- No size property
- No iteration
- Cannot observe keys
- Great for encapsulation of private data

---

## Summary Table
| Feature             | Object     | Map        | WeakMap            |
|---------------------|------------|------------|---------------------|
| Key Types           | String/Symbol | Any       | Object/Non-registered Symbol |
| Insertion Order     | Not guaranteed | Preserved | N/A                |
| Size Property       | No         | Yes        | No                  |
| Iterable            | Partially  | Yes        | No                  |
| Use for Private Data| No         | No         | Yes                 |
| Prevents GC(Garbage Collection)?        | Yes        | Yes        | **No**              |

Great follow-up! Let's break down exactly **why setting `person1 = null` doesn’t remove the reference from `Map`**, and **why `Map` still remembers it**, unlike `WeakMap`.

---



##  Code Recap (with Map):

```js
let person1 = {name: "Umme"};
const map = new Map();
map.set(person1, "This is Umme's data");

person1 = null;

console.log(map.get(person1)); // undefined
```

### ❓ Why does `map` still hold the reference?

When you do this:

```js
map.set(person1, "This is Umme's data");
```

You're **telling the map**:  
“Hey, store this object (`person1`) as a key, and associate it with some value.”

So **internally**, the `Map` stores the actual object `{name: "Umme"}` as the key. It doesn’t rely on your variable `person1`. The reference to the object is now held **inside the Map**, even if your variable is gone.

Then this happens:

```js
person1 = null;
```

Now:
- The variable `person1` no longer refers to `{name: "Umme"}`
- BUT the Map still has that object as a key internally
- Therefore, the object **is not garbage collected**
- You just lost your access to it via `person1`

 And then:

```js
console.log(map.get(person1)); // undefined
```

This gives `undefined` because `person1` is now `null`, and you're trying to look up `null` in the map, **not the original object key**.

---

##  Analogy

Imagine you give a library a book to store (the `Map`), and you walk away. The library still has the book. Even if you forget you ever had it (`person1 = null`), the library (`Map`) hasn’t forgotten.

In contrast, `WeakMap` is more like giving someone a book to borrow, but you don’t write it down. If you forget about the book, it just disappears. That's why it's called **"weak"** — it won’t protect the key from being cleaned up.

---

##  Key Takeaways:

| Concept | `Map` | `WeakMap` |
|--------|------|-----------|
| Stores strong reference to key? | ✅ Yes | ❌ No |
| Holds key even if original variable is gone? | ✅ Yes | ❌ No |
| Object key stays in memory? | ✅ Yes | ❌ No (if no other refs) |
| Can you iterate? | ✅ Yes | ❌ No |
| Automatically cleans up if unreferenced? | ❌ No | ✅ Yes |

---

## **WeakMap: What happens if we set `person2 = null`?**

In this code:

```js
let person2 = {name: "Tumpa"};
const weakMap = new WeakMap();
weakMap.set(person2, "This is Tumpa's data");

person2 = null;
```

**What happens now?**

- The object `{name: "Tumpa"}` is no longer referenced **anywhere** (because `person2` was pointing to it, and now it’s `null`).
- Since **WeakMap holds a *weak reference*** to keys, it doesn't prevent that object from being garbage collected.
- So the object will be **garbage collected automatically** by JavaScript at some point.
- After that, the entry in the `WeakMap` will **disappear** silently — you can’t detect when.

 **Why?**
- This behavior is exactly why it's called a **WeakMap**. It does **not prevent garbage collection** of its keys.

**Note:**
You can’t **iterate or inspect** the contents of a WeakMap (no `.size`, `.forEach`, `.entries`, etc.), so you **can’t see when the key/value is removed**.

---

###  Summary:

| Topic | Map | WeakMap |
|------|------|----------|
| `forEach` params | `(value, key)` | ❌ Not supported |
| Iteration | ✅ Yes (`for...of`, `.forEach`) | ❌ No iteration allowed |
| Key garbage collected if no refs? | ❌ No | ✅ Yes |
| Key types | Any | Only objects |
| Prevents GC | ✅ Yes | ❌ No |


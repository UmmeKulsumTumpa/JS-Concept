##  **JavaScript Closures**

### 🔹 What is a Closure?

> A **closure** is the combination of a **function** and the **lexical environment** (variables) in which that function was declared.

In simpler terms:  
When a function is defined **inside another function**, and it **remembers** variables from the outer function **even after the outer function has finished executing**, that’s a **closure**.

---

##  Basic Example

```javascript
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner;
}

const counter = outer();  // outer() runs and returns inner
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
```

###  What’s happening?
- `outer()` defines `count` and returns `inner()`.
- `inner()` **remembers** `count` — that's the **closure**.
- Even though `outer()` has finished, `count` is not garbage-collected because `inner()` still references it.

---

##  Key Concepts of Closures

| Concept | Description |
|--------|-------------|
| **Lexical scope** | Functions access variables where they are defined, not where they are called |
| **Preserve state** | Closures keep data "alive" between function calls |
| **Data privacy** | Variables can be private, only accessible via closure |
| **Memory** | Variables in a closure stay in memory as long as they are in use |

---

##  Practical Use Cases of Closures

### 1. **Data Encapsulation / Private Variables**

```javascript
function createUser(name) {
  let score = 0;

  return {
    getName() {
      return name;
    },
    incrementScore() {
      score++;
    },
    getScore() {
      return score;
    }
  };
}

const user = createUser("Alice");
user.incrementScore();
user.incrementScore();
console.log(user.getName());  // Alice
console.log(user.getScore()); // 2
```

➡️ `score` is **private** — only accessible through the methods.

---

### 2. **Function Factories**

```javascript
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

➡️ `factor` is closed over by the inner function.

---

### 3. **Timers or Asynchronous Behavior**

```javascript
function startTimer() {
  let seconds = 0;

  setInterval(function () {
    seconds++;
    console.log("Seconds passed:", seconds);
  }, 1000);
}

startTimer();
```

➡️ `seconds` stays in memory because the interval function forms a closure.

---

## 🧱 How Closures Work Behind the Scenes

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}
```

- When `outer()` is called, it creates a **scope** with `message`.
- `inner()` is returned and **remembers** the `message` variable.
- The JavaScript engine keeps `message` in memory **because `inner()` might use it** later.

---

## ❗ Common Mistake: Closures in Loops

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Logs 3, 3, 3
  }, 1000);
}
```

### ✅ Fixed using `let`:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Logs 0, 1, 2
  }, 1000);
}
```

Or using IIFE:

```javascript
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // Logs 0, 1, 2
    }, 1000);
  })(i);
}
```

The **"closures in loops"** section is a classic JavaScript gotcha, especially when using `var`. Let’s break down **each example**, explain why it behaves the way it does, and how to fix it.

---

## ❗ Example 1: The Problem with `var` in Loops

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

### ❓ What happens?

This logs:

```
3
3
3
```

###  Why?

- `var` is **function-scoped**, **not block-scoped**.
- So there's only **one shared `i` variable** across all iterations.
- By the time the `setTimeout` callbacks run (after ~1000ms), the loop has already finished and `i` is `3`.

> All 3 functions share the same reference to `i`, and they all see `i = 3`.

---

## ✅ Example 2: The Fix Using `let`

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

### ✅ Output:
```
0
1
2
```

### ✅ Why?

- `let` is **block-scoped**, so each iteration of the loop creates a **new `i`**.
- Each `setTimeout` callback closes over **a different copy of `i`**.

---

## ✅ Example 3: The Fix Using an IIFE

```javascript
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
```

### ✅ Output:
```
0
1
2
```

### ✅ Why?

- We use an **Immediately Invoked Function Expression (IIFE)** to **capture the current value of `i`** as `j`.
- `j` is a function parameter, so it's **scoped to that invocation**.
- Each `setTimeout` closes over a **different `j`**.

---

##  Final Thoughts

| Approach | Variable Scope | Works As Expected? |
|----------|----------------|--------------------|
| `var` in loop | Shared across iterations | ❌ No (closure sees final value) |
| `let` in loop | Block-scoped (per iteration) | ✅ Yes |
| IIFE + `var`  | Captures value via function argument | ✅ Yes |


---

## ✅ Summary

- A **closure** is a function that remembers the scope it was defined in.
- Closures let you create **private variables** and **preserve state**.
- They are created **any time** a function accesses variables outside its own scope.


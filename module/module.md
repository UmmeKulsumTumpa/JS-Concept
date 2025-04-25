
---

##  **Execution Order of JavaScript in HTML**

### 1. **Multiple `<script>` Tags: Are They Executed in Order?**
✅ **Yes**, if you include multiple `<script>` tags in HTML **without `async` or `defer`**, they are executed **in the order they appear** in the document.

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    console.log("Script 1");
  </script>
  <script>
    console.log("Script 2");
  </script>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

### Output:
```
Script 1
Script 2
```

So, the browser executes Script 1, waits until it's done, then executes Script 2.

---

##  **What If You Use External JS Files?**

Same rule: **executed in the order they appear**.

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="one.js"></script>
  <script src="two.js"></script>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

If `one.js` has:
```js
console.log("From one.js");
```

And `two.js` has:
```js
console.log("From two.js");
```

### Output:
```
From one.js
From two.js
```

---

##  **What If You Have HTML Elements and Scripts?**

The browser parses HTML from top to bottom. When it hits a `<script>` tag **(without `defer` or `async`)**, it **pauses HTML parsing**, executes the script, then resumes.

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Script Example</title>
</head>
<body>
  <h1 id="heading">Hello</h1>

  <script>
    const heading = document.getElementById('heading');
    console.log(heading.textContent);
  </script>

  <script>
    console.log("Script after accessing DOM");
  </script>
</body>
</html>
```

### Output:
```
Hello
Script after accessing DOM
```

✅ This works because the `<h1>` exists before the script runs.

---

##  **But What If Script Is in `<head>` and Tries to Access Body?**

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    const heading = document.getElementById('heading');
    console.log(heading); // ❌ null
  </script>
</head>
<body>
  <h1 id="heading">Hello</h1>
</body>
</html>
```

Output: `null` because the script ran **before the `<h1>` was parsed**.

---

## 🔸 **So How to Control Script Loading?**

### 1. ✅ Use `defer`
- Scripts are downloaded in parallel but **executed in order**, **after the HTML is fully parsed**.
```html
<script src="script1.js" defer></script>
<script src="script2.js" defer></script>
```

### 2. ⚠️ Use `async`
- Scripts are downloaded in parallel and **executed as soon as they load**, which **may be out of order**.

```html
<script src="script1.js" async></script>
<script src="script2.js" async></script>
```

Order not guaranteed.

---

## ✅ Summary

| Scenario                      | Execution Order | Blocks HTML? | DOM Ready?   |
|------------------------------|-----------------|--------------|--------------|
| `<script>` in `<head>`       | Top to bottom   | ✅ Yes        | ❌ Not always |
| `<script>` in `<body>`       | Top to bottom   | ✅ Yes        | ✅ Yes (if placed after element) |
| `<script defer>`             | Top to bottom   | ❌ No         | ✅ Yes        |
| `<script async>`             | Any order       | ❌ No         | ❌ Not guaranteed |


---

##  **Why is the module script (`type="module"`) executed *before* the regular script?**

This behavior happens because **module scripts are deferred by default**, *even if you don’t explicitly add `defer`*! And **regular scripts are executed immediately as the browser parses them** (unless they're also marked `defer` or placed after parsing finishes).

---

###  Key Differences:

| Feature                     | `<script>` (regular) | `<script type="module">` |
|----------------------------|----------------------|---------------------------|
| Default execution timing   | Immediate            | Deferred (like `defer`)   |
| Execution order            | When parser hits it  | After document parsing    |
| `this` value               | `window`             | `undefined` (module scope) |
| Top-level `await` support  | ❌ No                | ✅ Yes                    |
| Variable sharing           | Global               | Module scoped             |

---

##  In Your Example:

```html
<script type="module">
    console.log(this); // executed after full HTML parsing -> "undefined"
</script>

<script>
    console.log(this); // executed immediately when parser reaches this line -> "window"
</script>
```

Let’s say:
- The **`<script>` block (non-module)** is on line 17
- The **`<script type="module">` block** is on line 22

###  You’d **expect** the normal script to run first, right?
But it doesn’t, because:

> Even though the module script appears later in the HTML, it **waits** until the entire document is parsed, and then it’s added to the JS task queue **before** the regular script finishes if the regular script is *synchronous and blocking.*

BUT if you place the **module first**, it's **scheduled** for later execution after parsing completes — but if the **regular script is synchronous**, it may actually delay the execution of the module if the regular script is hit before parsing is done.

---

###  **Accurate Timeline** (in practice):

- HTML is parsed from top to bottom
- When `<script type="module">` is seen, the browser **downloads it** immediately, but **defers execution**
- When `<script>` (regular) is seen, it's executed **immediately**
- BUT if the module script is *before* the regular script in HTML, and parsing is fast, the module may execute **first** after DOM parsing finishes.

---

###  Try Flipping the Script Tags:

Move the regular `<script>` before the module:

```html
<script>
  console.log("regular", this);
</script>

<script type="module">
  console.log("module", this);
</script>
```

Now you should see:

```
regular window
module undefined
```

This demonstrates that **order in the HTML does matter**, but also **module scripts wait until parsing is done**, while regular scripts block parsing and execute immediately.

---

## ✅ Final Summary:

- `<script>`: runs **immediately** when the browser hits it.
- `<script type="module">`: runs **after the entire HTML is parsed**, even without `defer`.
- That's why sometimes the module appears to run first — even if it’s below in HTML — because regular scripts can block parsing.


#  Autoboxing in JavaScript

##  What is Autoboxing?

**Autoboxing** is the automatic process in JavaScript where a **primitive value** is **wrapped into an object** so that you can access **methods or properties** on it.

This allows primitive types like `string`, `number`, and `boolean` to behave like objects temporarily.

---

##  JavaScript Primitives

The seven primitive types in JavaScript are:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`

Of these, autoboxing applies to:

- `string` → `String`
- `number` → `Number`
- `boolean` → `Boolean`
- `bigint` → `BigInt`
- `symbol` → `Symbol`

> ❌ `null` and `undefined` do **not** support autoboxing (they have no object wrappers).

---

##  Why Does Autoboxing Exist?

Because JavaScript allows code like:

```js
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
```

Even though `str` is a primitive, we're using it **like an object**. JavaScript **temporarily wraps** it with its object type so that the method can be called.

This is **autoboxing**.

---

##  Behind-the-Scenes Execution

Let’s take this simple example:

```js
var str = "Autoboxing";
console.log(str.length); // 10
```

### What JavaScript does behind the scenes:

```js
var str = "Autoboxing";

// JavaScript internally does something like this:
var strBoxed = new String(str);
console.log(strBoxed.length);
strBoxed = undefined;
```

> - The primitive string `"Autoboxing"` is autoboxed into a `String` object.
> - The `length` property is accessed on the temporary object.
> - The object is **immediately discarded** after the operation.

This temporary `strBoxed` is **not visible in your code** — it’s an internal step done by the JavaScript engine.

---

## ⚠️ Autoboxing is Temporary

```js
let str = "hello";
str.test = "world";

console.log(str.test); // undefined
```

Why? Because:

1. `"hello"` is autoboxed into a temporary `String` object.
2. The `test` property is set on that object.
3. Then the object is discarded.
4. So when we try to access `str.test` again, it's **not there**.

---

##  Wrapper Types Summary

| Primitive | Wrapper Object |
|-----------|----------------|
| `number`  | `Number`       |
| `string`  | `String`       |
| `boolean` | `Boolean`      |
| `bigint`  | `BigInt`       |
| `symbol`  | `Symbol`       |

---

##  Comparisons and Pitfalls

```js
let str1 = "hello";
let str2 = new String("hello");

console.log(str1 == str2);  // true  (value comparison)
console.log(str1 === str2); // false (different types: primitive vs object)
```

Always use **primitives**, not boxed objects — they are faster and safer.

---

##  Example with Number

```js
let num = 42;
console.log(num.toFixed(2)); // "42.00"
```

Under the hood:

```js
let numBoxed = new Number(42);
console.log(numBoxed.toFixed(2));
numBoxed = undefined;
```

---

## ❌ Don’t Manually Box Values

```js
let objStr = new String("hello");
console.log(typeof objStr); // "object"
```

This creates a **real object**, not a primitive.

---

## ✅ Summary

- Autoboxing allows methods and properties to be accessed on primitives.
- JavaScript temporarily wraps primitives into object wrappers like `String`, `Number`, etc.
- After the operation, the wrapper is discarded.
- Manual boxing with `new String()` is **not recommended**.
- Avoid adding properties to primitives — they won't persist.
- Autoboxing is an internal JavaScript engine feature; actual implementation details may vary.

---

## 📌 Quick Recap

```js
let str = "abc";
console.log(str.length); // 3

// Internally
let strBoxed = new String("abc");
console.log(strBoxed.length);
strBoxed = undefined;
```

---

## 🌐 Also Used In

Autoboxing isn't unique to JavaScript. It's also present in other languages like:

- Java
- C#

---

> 🔍 Understanding autoboxing helps explain why and how primitives can behave like objects — but only temporarily.


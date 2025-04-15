
---

##  **What is Mutable and Immutable?**

### 🔹 **Immutable = Cannot Change**
- Once created, the **value stays the same**.
- If you try to change it, JavaScript just makes a **new copy**.

### 🔸 **Mutable = Can Change**
- You can **change the value directly**.
- No need to make a new copy — the original gets updated.

---

##  Real-Life Analogy

###  Immutable = Ice cube
> You can’t bend or reshape an ice cube. You’d have to **melt and refreeze** it (make a new one).

###  Mutable = Clay
> You can keep molding the same piece of clay into different shapes. You're **changing the original**.

---

## ✅ Examples in JavaScript

---

###  Immutable Types (Primitives)

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

#### Example 1: String

```js
let name = "John";
name[0] = "D";     // ❌ This doesn't change the string
console.log(name); // ➜ "John" (still the same)

name = "Dave";     // ✅ This creates a new string
console.log(name); // ➜ "Dave"
```

Even though you assigned `"Dave"`, you're not changing `"John"`, you're **replacing it entirely**.

---

###  Mutable Types (Objects and Arrays)

- `object`
- `array`
- `function`

#### Example 2: Object

```js
let user = { name: "Alice" };
user.name = "Bob"; // ✅ This changes the original object
console.log(user); // ➜ { name: "Bob" }
```

You're not replacing `user` — you're **modifying its contents**.

#### Example 3: Array

```js
let fruits = ["apple", "banana"];
fruits.push("mango"); // ✅ Changes the original array
console.log(fruits);  // ➜ ["apple", "banana", "mango"]
```

Again, no new array — just changed the one we had.

---

##  Quick Comparison

###  Immutable (Primitive)
```js
let x = 5;
let y = x;   // Copy by value
y = 10;
console.log(x); // ➜ 5 (unchanged)
```

###  Mutable (Object)
```js
let obj1 = { a: 1 };
let obj2 = obj1;   // Copy by reference
obj2.a = 9;
console.log(obj1.a); // ➜ 9 (changed original!)
```

---

##  Easy Way to Remember

| Type     | Can you change it? | Is it copied by? | Example change         |
|----------|--------------------|------------------|-------------------------|
| Primitive | ❌ No (immutable)  | Value            | `"abc"` → `"xyz"` (new string) |
| Object    | ✅ Yes (mutable)   | Reference        | `{ a: 1 } → { a: 2 }` (same object)

---

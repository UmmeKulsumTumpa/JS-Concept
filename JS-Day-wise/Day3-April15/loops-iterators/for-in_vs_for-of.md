
#  JavaScript Loops: `for...in`, `for...of`, and `forEach()`

JavaScript offers several ways to loop through data structures. Each has its purpose depending on whether you want to loop through **object properties**, **array elements**, or **iterable values**.

---

##  `for...in` – Loop Through **Object Keys**

### 🔧 Syntax:
```js
for (const key in object) {
  // code block
}
```

### ✅ Use it when:
- You're looping over **object properties**.

### ❌ Avoid when:
- Iterating through **arrays**, especially when **order matters**.

###  Example with Object:
```js
const person = { fname: "John", lname: "Doe", age: 25 };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// fname: John
// lname: Doe
// age: 25
```

###  Example with Array (not recommended):
```js
const numbers = [45, 4, 9, 16, 25];
numbers.foo = "hello";

for (const index in numbers) {
  console.log(index); // Logs: "0", "1", "2", "3", "4", "foo"
}
```
> Index order is **not guaranteed**, and custom properties will also be included.

---

##  `for...of` – Loop Through **Iterable Values**

Introduced in **ES6 (2015)**, `for...of` is perfect for looping over **values** in arrays, strings, maps, sets, NodeLists, and other iterable objects.

###  Syntax:
```js
for (const value of iterable) {
  // code block
}
```

### ✅ Use it when:
- Looping over **arrays**, **strings**, **maps**, or any **iterable object**.
- You want **values**, not keys.

### ❌ Avoid when:
- Working directly with plain **objects** (not iterable by default).

### Example with Array:
```js
const cars = ["BMW", "Volvo", "Mini"];

for (const car of cars) {
  console.log(car); // Logs: BMW, Volvo, Mini
}
```

###  Example with String:
```js
const language = "JavaScript";

for (const char of language) {
  console.log(char); // Logs each character
}
```

### 🔥 Bonus: Destructuring with `Object.entries()`:
```js
const obj = { foo: 1, bar: 2 };

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
// Output:
// foo 1
// bar 2
```

---

##  `Array.forEach()` – Loop Through Arrays with a Callback

`forEach()` is a method that takes a **callback function** and runs it on **each array element**.

###  Syntax:
```js
array.forEach(function(value, index, array) {
  // code block
});
```

### ✅ Use it when:
- You need to **execute a function** for every array element.
- You want **clean and readable syntax**.
- You want to access the **value, index, and the full array**.

### ❌ Avoid when:
- You want to **break/exit early** from the loop (it doesn't support `break` or `continue`).

###  Example:
```js
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(function(value) {
  console.log(value);
});
// Output: 45 4 9 16 25
```

---

## 🆚 Summary Table

| Feature           | `for...in`                     | `for...of`                      | `forEach()`                            |
|-------------------|--------------------------------|----------------------------------|----------------------------------------|
| Works on          | Objects, Arrays                | Iterables (Arrays, Strings, etc.)| Arrays only                            |
| Iterates over     | **Keys** (property names)      | **Values**                       | **Values** via callback                |
| Includes custom props | ✅ Yes                    | ❌ No                             | ❌ No                                   |
| Order guaranteed? | ❌ No                          | ✅ Yes                            | ✅ Yes                                  |
| Can break early?  | ✅ Yes (with `break`)          | ✅ Yes                            | ❌ No (can't break/continue)           |
| Best use case     | Object property enumeration    | Loop through array or string values | Execute logic on each array element |

---

## ✅ Final Recommendations

| Scenario                        | Recommended Loop   |
|----------------------------------|---------------------|
| Loop through object keys         | `for...in`          |
| Loop through array values        | `for...of`          |
| Loop through string characters   | `for...of`          |
| Loop through array with function | `forEach()`         |
| Need to break/continue early     | `for` / `for...of`  |


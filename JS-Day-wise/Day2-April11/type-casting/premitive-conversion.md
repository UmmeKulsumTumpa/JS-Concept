# JavaScript Type Conversions

JavaScript automatically or explicitly converts values to the right type (string, number, or boolean) depending on the context.

> ✅ **Only primitive types are covered here (not objects)**

---

## Types of Conversions

### 1. **String Conversion**
- Happens when a value needs to be shown (e.g., `alert`).
- Explicit conversion: `String(value)`
- Examples:
  ```js
  let value = true;
  alert(typeof value); // boolean
  value = String(value);
  alert(typeof value); // string
  ```
- ✅ Notes:
  - `true` → `"true"`
  - `null` → `"null"`
  - Conversion is usually straightforward

---

### 2. **Numeric Conversion**
- Happens in math operations and comparisons.
- Explicit conversion: `Number(value)`
- Examples:
  ```js
  alert("6" / "2"); // 3
  let str = "123";
  let num = Number(str);
  alert(typeof num); // number
  ```

####  Conversion Rules

| Value                        | Converts To |
|-----------------------------|-------------|
| `undefined`                 | `NaN`       |
| `null`                      | `0`         |
| `true / false`              | `1 / 0`     |
| `"   123   "` (string)      | `123`       |
| `"123z"` (invalid number)   | `NaN`       |
| `""` (empty string)         | `0`         |

---

### 3. **Boolean Conversion**
- Happens in logical expressions or condition checks.
- Explicit conversion: `Boolean(value)`

####  Conversion Rules

| Value                       | Converts To |
|----------------------------|-------------|
| `0`, `null`, `undefined`   | `false`     |
| `NaN`, `""` (empty string) | `false`     |
| Any other value            | `true`      |

- Examples:
  ```js
  Boolean(1);       // true
  Boolean(0);       // false
  Boolean("hello"); // true
  Boolean("");      // false
  Boolean("0");     // true
  Boolean(" ");     // true
  ```

---

## ✅ Summary

- **String**: `String(value)` – used for output/display
- **Number**: `Number(value)` – used in math
- **Boolean**: `Boolean(value)` – used in logic

#### ⚠️ Common Mistakes
- `undefined` → `NaN` (not `0`)
- `"0"` and `" "` → `true` (non-empty strings are always true)

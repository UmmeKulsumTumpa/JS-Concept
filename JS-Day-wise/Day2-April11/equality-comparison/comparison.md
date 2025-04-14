
# JavaScript Comparison and Logical Operators

Comparison and logical operators are used to test conditions (true/false). These are often used in **conditional statements**.

---

##  Comparison Operators

Used to compare two values.  
Given: `x = 5`

| Operator | Description | Example         | Result   |
|----------|-------------|------------------|----------|
| `==`     | equal to    | `x == "5"`       | `true`   |
| `===`    | equal value and type | `x === "5"` | `false`  |
| `!=`     | not equal   | `x != 8`         | `true`   |
| `!==`    | not equal value or type | `x !== "5"` | `true`   |
| `>`      | greater than | `x > 8`         | `false`  |
| `<`      | less than    | `x < 8`         | `true`   |
| `>=`     | greater than or equal to | `x >= 8` | `false`  |
| `<=`     | less than or equal to | `x <= 8` | `true`   |


---

##  Logical Operators

Used to combine multiple conditions.  
Given: `x = 6`, `y = 3`

| Operator | Description | Example                     | Result   |
|----------|-------------|-----------------------------|----------|
| `&&`     | and         | `x < 10 && y > 1`           | `true`   |
| `||`     | or          | `x == 5 || y == 5`          | `false`  |
| `!`      | not         | `!(x == y)`                 | `true`   |

---


##  Comparing Different Types

- JavaScript converts types automatically during comparisons.
- String vs Number: string gets converted to number.
- Empty string = `0`
- Non-numeric string = `NaN` (false in comparison)

### Examples:
```js
2 < "12"      // true
2 < "John"    // false
"2" < "12"    // false (alphabetical comparison)
```

✅ **Best Practice**: Convert values to proper types before comparing.

```js
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
```

---

##  Nullish Coalescing Operator (`??`)

Returns the first value **if it's not `null` or `undefined`**, otherwise returns the second value.

### Example:
```js
let name = null;
let text = "missing";
let result = name ?? text; // "missing"
```

---

### Table Explanation (JavaScript Comparison Outcomes)

| Case             | Result | Explanation |
|------------------|--------|-------------|
| `2 < 12`         | ✅ true | Both are numbers, and `2` is clearly less than `12`. |
| `2 < "12"`       | ✅ true | `"12"` is a string, but JavaScript converts it to a number (`12`). So it's the same as `2 < 12`. |
| `2 < "John"`     | ❌ false | `"John"` is a non-numeric string, converted to `NaN`. Any comparison with `NaN` is `false`. |
| `2 > "John"`     | ❌ false | Same as above. `2 > NaN` → `false`. |
| `2 == "John"`    | ❌ false | `"John"` is not a number, so it's converted to `NaN`. `2 == NaN` → `false`. |
| `"2" < "12"`     | ❌ false | Both are strings. String comparison uses **lexicographic (alphabetical) order**, so `"2"` is **greater** than `"1"` (in `"12"`). |
| `"2" > "12"`     | ✅ true | Again, string comparison: `"2"` > `"1"` → `true`. |
| `"2" == "12"`    | ❌ false | Both are strings, but different values, so `false`. |

---

### 💡 Extra Notes:
- **Numeric vs String:** If one operand is a number and the other is a numeric string, JS converts the string to a number.
- **Non-numeric strings:** These become `NaN` when used in numeric comparisons.
- **NaN comparisons:** Always return `false`.
- **String comparisons:** Done using Unicode values (alphabetical order).

---

# JavaScript Default Parameters

## Introduction to Default Parameters
- **Default Parameters** allow function parameters to be initialized with default values if no value or `undefined` is passed when calling the function.
- In JavaScript, function parameters default to `undefined`. However, default parameters provide an easy way to set a different default value.

## Syntax

```js
function fnName(param1 = defaultValue1, param2 = defaultValue2, ...) {
  // function body
}
```

## Key Concepts

### Default Parameters in Action

- Example 1: Without default parameters:
  ```js
  function multiply(a, b) {
    return a * b;
  }

  console.log(multiply(5, 2));  // 10
  console.log(multiply(5));     // NaN
  ```

- Example 2: With default parameters:
  ```js
  function multiply(a, b = 1) {
    return a * b;
  }

  console.log(multiply(5, 2));  // 10
  console.log(multiply(5));     // 5
  ```

### Behavior of Default Parameters
- **If `undefined` is passed**, the default value is applied:
  ```js
  multiply(5, undefined); // 5
  ```
- **Falsy values like `null` or `""` do not trigger the default**:
  ```js
  function test(num = 1) {
    console.log(num);
    }

    test();           // 'number' (num is set to 1)
    test(undefined);  // 'number' (num is set to 1 too)
    test("");         // 'string' (num is set to '')
    test(null);       // 'object' (num is set to null)
  ```

> - **What happened:**
>   - The first `test()` call triggers the default value because no argument is passed, so `num` is set to `1`.
>   - When `undefined` is explicitly passed (`test(undefined)`), the default value is still applied. This is because in JavaScript, `undefined` is treated as "no value" in function parameters, triggering the default assignment.
>   - However, other falsy values like `""` (empty string) and `null` do not trigger the default. They are passed as is: an empty string is passed for `num`, and `null` is passed as is.

### Left-to-Right Evaluation
- Parameters are evaluated left to right, so defaults can depend on earlier parameters:
  ```js
  function f(x = 1, y) {
    return [x, y];
  }

  f();    // [1, undefined]
  f(2);   // [2, undefined]
  ```

> - **Why this Happens:**
>     - **Default parameters are evaluated left to right:** The default values only apply to parameters that are **missing** or explicitly passed as `undefined`. So in this case, since `y` is missing but `x` is provided, `x` gets the value `2`, and `y` defaults to `undefined`.
>     
>     - **No value provided for `y`:** If no value is passed for a parameter and no default is defined, JavaScript automatically sets it to `undefined`. 

### Scope of Default Parameter Values
- **Default parameters live in their own scope**, which is a parent of the function's body.
- This means later parameters can refer to earlier ones, but not the other way around:
    ```js
    function greet(name, greeting, message = `${greeting} ${name}`) {
    return [name, greeting, message];
    }

    console.log(greet("David", "Hi"));  // ["David", "Hi", "Hi David"]
    console.log(greet("David", "Hi", "Happy Birthday!"));  // ["David", "Hi", "Happy Birthday!"]
    ```

> - **What happened:**
>   - In the first call `greet("David", "Hi")`, `message` defaults to `${greeting} ${name}` because no value for `message` is passed. The result is `"Hi David"`.
>   - In the second call `greet("David", "Hi", "Happy Birthday!")`, since `message` is explicitly provided, the default is overridden and `"Happy Birthday!"` is used instead.

### Evaluating Default Parameters
- The default parameter is evaluated **at call time**, meaning it is calculated each time the function is called:
    ```js
    function append(value, array = []) {
    array.push(value);
    return array;
    }

    console.log(append(1)); // [1]
    console.log(append(2)); // [2], not [1, 2]
    ```

> - **What happened:**
>   - The default parameter for `array` is set to an empty array `[]`. However, default parameters are evaluated **at the time the function is called**, not when the function is defined. 
>   - So, when `append(1)` is called, the empty array `[]` is created and `1` is pushed to it.
>   - On the second call, a new empty array is created again, so `2` is pushed to a new empty array, resulting in `[2]` and not `[1, 2]`. This shows that the array is reinitialized on every call.

### Expressions in Default Parameters
- You can use expressions for default values, but **you can't use `await` or `yield`** since they require asynchronous evaluation:
  ```js
  async function f(a = await Promise.resolve(1)) {
    return a;
  }
  ```

### Earlier Parameters Available for Later Default Parameters
- Default parameters earlier in the list can refer to later ones:
  ```js
  function withDefaults(a, b = 5, c = b) {
    return [a, b, c];
  }

  withDefaults(10);  // [10, 5, 5]
  ```
> - **What happened:**
>   - Here, `b` has a default value of `5`. When no second argument is passed, `b` is `5`.
>   - The value of `c` is dependent on `b`. Since `b` is `5`, `c` also defaults to `5`.
>   - Hence, the result is `[10, 5, 5]` where `a` is explicitly set to `10`, and both `b` and `c` use their default values.

### Destructuring with Default Values
- You can use default values with **destructured parameters**:
    ```js
    function preFilledArray([x = 1, y = 2] = []) {
    return x + y;
    }

    console.log(preFilledArray());   // 3
    console.log(preFilledArray([2])); // 4
    console.log(preFilledArray([2, 3])); // 5
    ```

> - **What happened:**
>   - In this code, the function `preFilledArray` takes an array with two parameters `x` and `y`. If no value is provided, the defaults `x = 1` and `y = 2` are used.
>   - The first call `preFilledArray()` uses the default values for both `x` and `y`, resulting in `1 + 2 = 3`.
>   - In the second call, only `x` is provided (`2`), so `y` defaults to `2`, and the result is `2 + 2 = 4`.
>   - In the third call, both `x` and `y` are provided (`2` and `3`), so the function simply adds them together, resulting in `2 + 3 = 5`.

## Common Mistakes and Limitations
- **Accessing variables in default parameter values:** Trying to use a variable from the function body in default parameters will cause a **ReferenceError**.
  ```js
  function f(a = go()) {
    function go() {
      return ":P";
    }
  }
  f();  // ReferenceError
  ```
> - **What happened:**
>   - When defining `a` with the default value `go()`, the function `go` is not available in the parameter scope. JavaScript throws a `ReferenceError` because the function `go` is declared inside the body of `f()` and is not accessible in the parameter initialization scope.

- **`await` and `yield` cannot be used in default parameter expressions.**
- Default parameters are **evaluated when the function is called**, not when defined.

## Summary
- Default parameters provide a cleaner and more concise way to handle undefined or missing arguments in JavaScript functions.
- You can set default values directly in the parameter list, which reduces the need for checks inside the function body.


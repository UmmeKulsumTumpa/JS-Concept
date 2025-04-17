- json follows js object syntax
- deserialization -> converting string to a native object
- serialization -> converting a native object to a string

Sure! Here's a simplified and easy-to-understand summary of the text you provided, written in **Markdown format** with important points highlighted:

---

##  What is JSON?

- **JSON** stands for **JavaScript Object Notation**.
- It is a **text-based** format to store and exchange data.
- JSON is often used to **send data between a server and a client** (like a webpage).
- It looks similar to JavaScript objects but with **stricter rules**.

---

## 📦 JSON Example

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    }
  ]
}
```

---

##  Key Points

###  JSON is:
- A **string** that looks like a JS object
- Used to send data across a network
- Easy to convert to/from JavaScript objects

###  Parsing and Stringifying

- Convert JSON string to object: `JSON.parse(jsonString)`
- Convert object to JSON string: `JSON.stringify(object)`

---

## 🔢 JSON Can Be an Array

```json
[
  {
    "name": "Molecule Man",
    "age": 29
  },
  {
    "name": "Madame Uppercut",
    "age": 39
  }
]
```

Access with array index:
```js
heroes[0].name  // "Molecule Man"
```

---

## ⚠️ JSON Syntax Rules (Very Strict)

- Strings use **double quotes only** (`"text"`)
- No functions, dates, sets, or special objects
- No comments allowed (`// like this`)
- No trailing commas
- Keys must be **strings in double quotes**
- Only allowed values:
  - `string`, `number`, `true`, `false`, `null`, `object`, `array`

---

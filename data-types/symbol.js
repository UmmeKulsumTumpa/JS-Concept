const mySymbol = Symbol();
const namedSymbol = Symbol("cat");

console.log(mySymbol);
console.log(namedSymbol);

console.log(typeof mySymbol);
console.log(typeof namedSymbol);
console.log(typeof "cat");

// each symbol is unique even if two symbol has same description, they are still unique
console.log(Symbol() === mySymbol); // false; though both are empty symbol, still unique
console.log(Symbol("cat") === namedSymbol); // false
console.log(mySymbol === mySymbol); // true, cause mySymbol itself is unique but not different

// can log the description of symbol
console.log(mySymbol.description); 
console.log(namedSymbol.description);


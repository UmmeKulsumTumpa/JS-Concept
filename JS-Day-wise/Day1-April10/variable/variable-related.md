### Learned at day 1 of js:

- Learnt REPL(read-eval-print-loop) shell 
- Hoisting -> a brand new topic for me, basically it is a mechanism where variable and function declaration are moved at the top of their scope before code execution.
- for let and const, these are hoisted on the top of the block, but not initialized. meaning, the block of the code knows that the variable exists, but it cannot be used until is has been initialized.
The variable is in a Temporal Dead Zone(TDZ) from the start of the block, until it is decleared.
- JS only hoist declartion, not initialization
- so to prevent the hoisting(default behaviour or js), we can use the "strict mode", the strict mode prevents the use of variable before decalring it.
- 3 types of scope in js: global, function and block
- anything that is decalred outside a function, is global scoped
- var is function scoped
- let and const is block scoped(introduced in es6)



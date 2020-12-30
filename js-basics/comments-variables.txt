## Javascript (JS) Basics (Part I)
- JS is case sensitive
- Instructions in JS are called statments which are separated by semicolons. This is only necessary if a there are more than one statement on a single line.
- Comments are used for annotating code and follow this syntax:
  - // This is a single line comment.
  - /* When a comment takes up multiples lines, then you have to use a slash and asterisk. */
  - You cannot have a comment within a comment -> // hello this is // a comment // -> Invalid syntax
- Declarations
  - You can declare variables in JS in three ways (each of these serves a different purpose)
    - var: was mainly used for variable declarations pre-ES6; can be re-declared and updated; globally **scoped** or function/locally **scoped**
    - let: more widely used than var; block scoped and it can be updated but <em>cannot be re-declared</em>.
    - const: block scoped but cannot be re-declared/re-assigned or updated.
- Scope
  - Scope basically means where in your code your variable is available to be used.
    - Variables declared outside of a function have a global scope whereas variables declared inside of a function have a function/local scope.
- Hoisting
  - According to [freeCodeCamp](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/), hoisting is a mechanism where variables and functions can be moved to the top of their scope before the code executes. Please visit freeCodeCamp for examples in context.




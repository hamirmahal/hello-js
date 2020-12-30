## JS Basics (Part II)
### Data Structure & Types
- Primitives: data that is an object, has no methods, and is immutable, meaning it cannot be changed.
  - Types:
    - Boolean : true or false
    - null
    - undefined
    - Number
    - BigInt
    - String
    - Symbol
- Data type conversions
  - In JS, you do not have to specify the data type of a variable when declared because JS can automatically convert data types when necessary.
    - For instance, you declare:
        let answer = 96;
    - ... and later declare:
        let answer = "This is not a number."
        <em>The equal sign here does not mean that "equal to". We'll get to this later.</em>
  - In cases where you have expressions with numeric and string values with the "+" operator, JS converts the numbers to strings.
    - For instance:
        x = "My lucky number is " + 7 // "My lucky number is 7"
    - When you have a numeric value that is saved as a string, you can convert it back to a number using the following methods:
      - [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
      - [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)


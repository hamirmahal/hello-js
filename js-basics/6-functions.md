## JS Basics (Part VI)

### Functions
- What is a function in Javascript?
  - A function is basically a set of instructions that are defined within a code block. These instructions carry out some sort of task, such as calculating a value. For a set of instructions to be called a function, it must take in an input and return some sort of output. The instructions are basically there to illustrate the relationship between this input and output. 

- In Javascript, a function is defined by using the following:
  - the <em>function</em> keyword followed by the name of the function (you get to specify this)
  - a list of inputs enclosed in parenthesis and separated by commas 
  - a code block {} that has the instructions
- Syntax:
  ```
  function myFunction(num1, num2, num3) {
    console.log((num1 * num2 * num3)/2)  
  }
  ```
  - We wrote a function here that takes three parameters (inputs). The instructions of the function says to print the result of the product of those three inputs divided by 2. 
- Once you declare a function the way we did above, <em>we also need to make sure to call/invoke it</em>. (declaring a function does not actually execute it). Here is how you call a function:
  ```
  myFunction(2,5,8);
  ```
  - We called our function by writing the name of the function and specifying the values of the inputs. In doing so, we are running the function. Our expected output should be `40`. 

- What is a function expression?
  - The aforementioned examples discusses how to declare and call functions. JS Functions can also be created by function expressions, which is when the function keyword is used to define a function inside of an expression. (Read more about expressions vs. statements [here](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)).
  - The cool thing about declaring functions inside of expressions is that the function does not need to be named, thus it can be anonymous. For example, our `myFunction()` function from earlier can be written like this:
    ```
    const myFunction = function(num1, num1, num3) {
      console.log((num1 * num2 * num3)/2)  
    }
    ```
  - In this case, we are assigning some function to a <em>variable</em> called `myFunction`. Invoking this variable also invokes the function.
- Names vs Anonymous Functions - when to use what
  - There are a number of pros and cons in using either named or anonymous functions even though the functionality of both works exactly the same.  
**Every javascript function is actually a function object! Read about Objects [here]()**

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
- Once you declare a function the way we did above, we also need to make sure to call it (declaring a function does not actually execute it). The way you execute functions is by calling them using the following syntax:
  ```
  myFunction(2,5,8);
  ```
  - We called our function by writing the name of the function and specifying the values of the inputs. In doing so, we are running the function. Our expected output should be `40`. 

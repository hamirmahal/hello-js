## JS Basics (Part V)
### Loops and Iteration
- `for ...` loop
  - a `for ...` loop uses a <em>for</em> statement that creates a loop which has three expressions and a block statement. These three expressions are as follows:
    1. initialization: this is where you declare a variable or expression that should be evaluated before the loop starts. Typically, a counter variabele is initialized here (a counter variable is a variable that keeps track of count so when you want to have an initilaizer expression for a counter variable, you basically define where the count starts -> does it start at 0 or 1 etc.)
    2. boolean expression: this is where you define the condition which is evaluated before every loop iteration. This condition has to evluate to true for the block statemement will run. This exppression is actually optional and can be left out. If it is left out, the condition will always be true. If the expression evaluates to false, then the block statement won't run and the execution will skip to the <em>initilization</em>.
    3. incrementation: this will increment the initialization expression and it occurs at the end of each loop iteration (before the next evaluation of the condition).
  - The syntax of the `for ...` loop:
    ```
    for (initialization ; condition ; incrementation ) {
      // do something  
    }
    ```
  - Once the first iteration of the loop is complete, it returns back to the condition expression and runs again until the limit (which is defined in the condition) is reached.
- `while ...` statement
  - this loop will run as along as the specified condition is true. When the condition evaluates to false, then the loop will terminate.
  - syntax:
    ```
    let n = 0;
    let x = 0;
    while (n < 3) {
      n++
      x += n
    }
    ```
- `do ... while` statement 
  - this loop is specifically used to repeat a statenent until a specified condition evaluates to <em>false</em>. The condition is evaluated after the statement is executed.  
  - syntax:
    ```
    do 
      {//this}
    while (condition)
    ```
  - example:
    ```
    let i = 1;
    const z = 5
    
    do {
      console.log(i);
      i++;
    } while (i <= n); // condition states to print the value of i as long as i is less than/equal to 5
    ```
    - The output will look like this (see comments for why each valus is printed):
      ```
      1 // this is initial value and is printed without the condition being checked
      2 // condition evaluates to true because 2 <= 5 so 2 is printed 
      3 // condition evaluates to true because 3 <= 5 so 3 is printed 
      4 // condition evaluates to true because 4 <= 5 so 4 is printed 
      5 // condition evaluates to true because 5 <= 5 so 5 is printed
      /* 6 will not be printed because the condition will evaluate to false. When the condition evaluates to false, the loop will terminate */
      ```
- `for ...` loop vs `while ...` loops
  - the `for ...` loops are used when you know how many times the loop should run, which is provided by the condition expression (also known as the termination condition). 
  - the `while ...` loop is used when you <em>don't know</em> the number of times the loop should run. So, the while loop will run the same code over and over again until the specified condition evaluates to false.  
  - in the `do ... while` loop, the order of operations is slightly different because it will run the statement block and then evaluate the condition.
- infinite loops
  - this is what you have when the condition of a loop doesn't evaluate to false. When a condition evaluates to false, it terminates the loop so when this doesn't happen, then the loop will keep running forever.
- `for ... in` loop
  - iterates through the properties of an object
  - syntax:
      ```
      for (property in object) {
        // do something
      }
      ```
  - example:
      ```
      let myDog = {
        name: "Duke",
        breed: "labrador",
        age: 1
      }
      for (let x in myDog) {
        console.log(`${x} => ${myDof[x]});
      }
      ``` 
    - output:
      ```
      name => Duke
      breed => labrador
      age => 1
      ```
  - this loop can be used to update the properties of an object 
      ```
      let salaries = {
        Neal : 700,
        Peter : 1,400,
        Diana: 1,200
      }

      for (let z in salaries) {
        let salary = "$" + salaries[z];
      }

      console.log(`${i} : ${salary}`);
}
      ```
    - output:
      ```
      Neal : $700,
      Peter : $1,400,
      Diana: $1,200
      ```
- `for ... of` loop
  - loops thorugh iterable objects such as <em>arrays</em>, <em>strings</em> etc.
  - syntax:
    ```
    for (variable of iterable) { // variable here has to be declared by either using var, let, or const
      //do something
    }
    ```
  - example:
    ```
    const favoriteFruits = ['mango', 'guava', 'pineapple', 'strawberry'];

    for (let fruit of favoriteFruits ) {
      console.log(fruit);
    }
    ```
    - output:
    ```
    "mango"
    "guava"
    "pineapple"
    "strawberry"
    ```

- Other statements
  - `label` statement 
    - prefixes an element with an identifier so that that it can be referred to later in the same program
    - can be used with `break` or `continue` statements
  - `break` statement
    - used when you want to terminate a loop (`switch` can also be used)
  - `continue` statement
    - used to restart a `while`, `do ... while`, `for ...`, or `label` statement





    

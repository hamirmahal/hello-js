## JS Basics (Part V)
### Loops and Iteration
- `for...` loop
  - a `for...` loop uses a <em>for</em> statement that creates a loop which has three expressions and a block statement. These three expressions are as follows:
    1. initialization: this is where you declare a variable or expression that should be evaluated before the loop starts. Typically, a counter variabele is initialized here (a counter variable is a variable that keeps track of count so when you want to have an initilaizer expression for a counter variable, you basically define where the count starts -> does it start at 0 or 1 etc.)
    2. boolean expression: this is where you define the condition which is evaluated before every loop iteration. This condition has to evluate to true for the block statemement will run. This exppression is actually optional and can be left out. If it is left out, the condition will always be true. If the expression evaluates to false, then the block statement won't run and the execution will skip to the <em>initilization</em>.
    3. incrementation: this will increment the initialization expression and it occurs at the end of each loop iteration (before the next evaluation of the condition).
  - The syntax of the `for...` loop:
    ```
    for (initialization ; condition ; incrementation ) {
      // do something  
    }
    ```
  - Once the first iteration of the loop is complete, it returns back to the condition expression and runs again until the limit (which is defined in the condition) is reached.
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
  - `for...` loop vs `do ... while` loop


    

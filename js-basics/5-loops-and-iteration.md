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
    
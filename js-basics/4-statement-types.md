## JS Basics (Part IV)
### Statement Types
- Block Statement
  - used to group elements inside of curly brackets
    {
      statements are in here
    }
  - commonly used with control flow statements
- Control flow statements
  - According to <em>MDN Web Docs</em>, "control flow is the order in which the computer executes statements in a script.
  Code is run in order from the first line in the file to the last line," (read more about it [here](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)).
- Conditional statements
  - A series of commands will execute PROVIDED THAT a specific condition is true.
  - Tyles of conditional statements:
   - Example A: `if ...` 
    ```
      if (condition) { 
        //do something
      }
    ```
     - Code block will only run if condition evaluates to true.
   - Example B: `if ... else`
    ```
      if (condition) {
        // do something
      } else {
        // do this
      }
    ```
     - <em>else</em> is optional and is only used to state what should happen in the case that the specifed condition evaluates to false.
   - Example C: `if ... else if`
    ```
      if (condition) {
        // then do something
      } else if (condition) { 
        // do this now
      } else {
        // do this.
      }
      ```
     - <em>else if</em> is used when you want to test another condition
  - If the conditon you are specifying uses the assignment operator (`=`), then make sure to use double parentheses because otherwise, it can be easily confused with the <em>loose equality</em> (`==`)
   - For example:
      ```    
      if ((x = 0)) {
        //some statement here
      } else {
        //do this
      }
      ```
- Switch statement
  - A switch statement is used by a program to evaluate an expression and match its value to a case that you provide. If the expression matches, a command (or commands) will be executed.
  - Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement) to see an examples switch statement and how it works.
- Break statements
  - These are optional and are basically used with the case clause inside of a switch statement. Their purpose is to ensure that the program breaks out of the switch statement once there is a match and moves on to the next switch (this is important because without a break statement, the program will continue to evaluate the next cases inside of the switch even if a match has been found).
- Exception Handling Statements
  - throw Statement
  - try ... catch statement



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
    - Example A: if ...
    - Example B: if ... else
    - Example C: if ... else if
      - Syntactical format:
        - Example A:
            if (condition) { 
            // then do something
            }
            - the condition should evaluate to true for the code block {then do this} to run.
        - Example B:
            if (condition) {
              // then do something
            } else { 
              // do this.
            }
            - <em>else</em> will only run if the specified condition {then do something}evaluates to false
        - Example C:
            if (condition) {
              // then do something
            } else if (condition) { 
              // do this now
            } else {
              // do this.
            }
            - <em>else if</em> is used when you want to test another condition
  - If the condition you are testing required you to use "=", then add an additional parentheses.
    - For example:
        if ((x = 0)) {
          //some statement here
        } else {
          //do this
        }
- Switch statement
  - According to <em>MDN Web Docs</em>, "A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement."
  - Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement) to see an examples switch statement and how it works.
- Break statements
  - These are optional and are basically used with the case clause inside of a switch statement. Their purpose is to ensure that the program breaks out of the switch statement once there is a match and moves on to the next switch (this is important because without a break statement, the program will continue to evaluate the next cases inside of the switch even if a match has been found).
- Exception Handling Statements
  - throw Statement
  - try ... catch statement



## JS Basics (Part IV)
### Statement Types
- Block Statement
  - used to group elements inside of curly brackets
    {
      statements are in here
    }
  - commonly used with control flow statements
- Control flow statements
  - According to MDN Web Docs, "control flow is the order in which the computer executes statements in a script.
  Code is run in order from the first line in the file to the last line," (read more about it [here](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)).
- Conditional statements
  - A series of commands will execute PROVIDED THAT a specific condition is true.
  - Tyles of conditional statements:
    - Example A: if ...
    - Example B: if ... else
    - Example C: if ... else if
      - Syntactical format:
        - Example A:
            if (condition) { // the condition should evaluate to true for the code block {} to run.
            then do this
            }
        - Example B:
            if (condition) {
              then do something
            } else { // <em>else</em> will only run if the specified condition evaluates to false
              do this.
            }
        - Example C:
            if (condition) {
              then do something
            } else if (condition) { // <em>else if</em> is used when you want to test another condition
              do this now
            } else {
              do this.
            }




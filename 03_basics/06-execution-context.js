/*JavsScript Execution Context


How does JS actually run/execute your files?


2 Phases 

1. Memory Creation Phase or Creation Phase
2. Execution Phase





Phase 1: Global Execution Context (GEC is then referred into the global variable 'this').

Phase 2: Functional Execution Context

Eval Execution Context (Usually used in databases and stuff and is part of the global execution context)

*/

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    return num1 + num2;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 25);


/*

Step 1: Global Execution/Environment (allocated to 'this') 

Step 2: Memory Creation Phase. All of the variables are assembled together and memory space is created for/allocated to them. (Cycle 1)

i.e.    - val1 => undefined
        - val2 => undefined
        - addNum => since it's a function so it's definition is added
        - result1 => undefined
        - result2 => undefined

Step 3: Execution Phase 

        - val1 <= 10
        - val2 <= 20
        - lines 27-29 are only definition and won't impact the      execution of their own
        - Now addNum is executed and stored in result1 so it will go back to lines 27-29 and create a separate new Execution Environment/context which will have its own variable environment and execution thread. And this happens EVERY TIME a function is called. Each Function Execution Environment will have it's own Memory Creation and Execution Phases

*/

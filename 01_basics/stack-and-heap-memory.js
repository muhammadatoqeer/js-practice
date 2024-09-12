// JavaScript Memory Management: Stack vs. Heap
// =============================================

// Stack Memory
// ------------
// Stack is used for static memory allocation and storing primitive values and references to objects in heap memory.
// It works in a Last-In-First-Out (LIFO) manner. The stack is automatically managed and is very fast.
// The data stored on the stack is limited in size and is short-lived (local variables, function calls).

function stackExample() {
    // Primitive types (numbers, booleans, strings, etc.) are stored directly on the stack.
    let num = 10;        // Stored on the stack
    let str = "Hello";   // Stored on the stack
    let isActive = true; // Stored on the stack

    // Function calls also use stack memory
    // Each call creates a new frame on the stack with its own local variables.

    // The values of num, str, and isActive are stored directly on the stack since they are primitives.
}

stackExample(); // When the function call completes, its stack frame is removed.

// Heap Memory
// -----------
// Heap is used for dynamic memory allocation and storing objects, arrays, and functions.
// Unlike the stack, heap memory does not follow a strict order (LIFO) and is slower because of its dynamic nature.
// Objects and arrays are stored in the heap because they can grow in size and their lifetimes can vary.

function heapExample() {
    // Reference types (objects, arrays, functions) are stored in the heap.
    let obj = { name: "John", age: 30 }; // The object is stored in heap memory, and the reference is stored on the stack.
    let arr = [1, 2, 3, 4];              // The array is stored in heap memory, and the reference is stored on the stack.

    // Only the references (memory addresses) to obj and arr are stored on the stack.
    // The actual values of the object and array are stored in the heap.

    // Heap allows for complex data structures and dynamic memory usage, but it requires garbage collection.
}

heapExample(); // After the function call, the references are removed from the stack, 
               // but the actual data in the heap is cleaned up by garbage collection when no longer needed.

// Stack vs. Heap Summary
// ----------------------
// 1. **Stack Memory:**
//    - Used for static memory allocation.
//    - Stores primitive values and function call frames.
//    - Operates in a LIFO manner, making it fast and efficient.
//    - Limited in size and automatically managed (no need for garbage collection).

// 2. **Heap Memory:**
//    - Used for dynamic memory allocation.
//    - Stores objects, arrays, functions (complex data types).
//    - Slower access compared to the stack due to its dynamic nature.
//    - Requires garbage collection to manage memory (automatic in JavaScript).

// Example illustrating Stack and Heap:
function stackAndHeap() {
    let primitive = 100;                // Stored on the stack (primitive value)
    let object = { key: "value" };      // Object is stored in the heap; reference is stored on the stack
    let array = [1, 2, 3];              // Array is stored in the heap; reference is stored on the stack

    // Modifying the object and array affects heap memory
    object.key = "newValue";            // Updates the heap-stored object directly via its reference
    array.push(4);                      // Modifies the heap-stored array directly via its reference

    // Copying Primitive vs. Reference
    let copyPrimitive = primitive;      // A new copy is made on the stack (independent copy)
    let copyObject = object;            // The reference is copied (both point to the same object in the heap)

    copyPrimitive = 200;                // Only affects the copy, not the original primitive
    copyObject.key = "anotherValue";    // Affects the original object as both references point to the same heap memory

    console.log(primitive);   // Output: 100 (primitive is unchanged)
    console.log(copyPrimitive); // Output: 200 (independent copy of the primitive)
    console.log(object.key);  // Output: "anotherValue" (modified through reference)
}

stackAndHeap(); // Run the function to see the behavior explained above

// Key Takeaway:
// - Stack is fast and stores simple, short-lived data (primitives, function calls).
// - Heap is slower and stores complex, long-lived data (objects, arrays, functions).
// - Stack stores the actual values of primitives and references to heap-allocated data.

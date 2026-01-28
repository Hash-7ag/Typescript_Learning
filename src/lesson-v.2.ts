// Example of static type checking 
function greet(name: string): string{
   return `Hellow ${name}!`;
};

greet("World"); // OK
//! greet(123); // ERROR: Argument of type 'number' is not assignable
            // to parameter of type 'string'.
// The compiler will report an error, and the code will not be compilet to JS
// until u fix it.

//*1.1 Static Typing
// Example of static type checking 
function greet(name: string): string{
   return `Hellow ${name}!`;
};

greet("World"); // OK
//! greet(123); // ERROR: Argument of type 'number' is not assignable
            // to parameter of type 'string'.
// The compiler will report an error, and the code will not be compilet to JS
// until u fix it.

////-------------------------------------------------------------------->

//*1.2 Strict Typing
//todo: In JS (weak/dynamic typing)
//todo: console.log("5" - 2); // 3 (the string "5" is implicitly converted to a number)
//todo: console.log("5" + 2); // "52" (the number 2 is implicitly converted to a string)

// In TypeScript with strict checks enabled (`strict: true`)
//! let result1: number = "5" - 2; // ERROR: Type 'string' is not assignable to type 'number'.
//! let result1: string = "5" + 2; // ERROR: Type 'number' is not assignable to type 'string'.

////-------------------------------------------------------------------->

//*1.3 Structural Typing (Duck Typing)
interface Point {
   x: number;
   y: number;
}

function printPoint(point: Point) {
   console.log(`(${point.x}, ${point.y})`);
}

// The object 'myPoint' is not declared as a 'Point',
// but it has the same structure.
const myPoint = { x: 10, y: 20, z: 30}; // Extra property 'z' - not a problem!
printPoint(myPoint); // OK! Structure matches.

//! This will NOT work:
//! const badPoint = {x: 10}; // ERROR: Property 'y' is missing in type '{ x: number; }'.
//! printPoint(badPoint);

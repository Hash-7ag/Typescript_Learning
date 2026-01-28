//*1.1
// Example of static type checking 
function greet(name: string): string{
   return `Hellow ${name}!`;
};

greet("World"); // OK
//! greet(123); // ERROR: Argument of type 'number' is not assignable
            // to parameter of type 'string'.
// The compiler will report an error, and the code will not be compilet to JS
// until u fix it.

//*1.2
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

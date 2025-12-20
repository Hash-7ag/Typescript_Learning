import './style.css'

//* let message: string = "hellow";
//* message = 12345 // Error: Type 'number' is not assignable to type 'string'.
//* console.log(message.toUpperCase());

//* При "strict": true
//* function greet(name: string) {
//*   console.log(`Hello, ${name.toUpperCase()}`);
//* }
//* greet(null); // ERROR! Argument of type 'null' is not assignable to parameter of type 'string'.

// This function expects an object that matches the Point structure.
// interface Point {
//    x: number;
//    y: number;
// }

// // We create an object. We don't even say that it's of type Point.
// // But TypeScript sees that it has properties `x` and `y` of type number.
// // The structure matches!
// function printPoint(point: Point) {
//    console.log(`x: ${point.x}, y: ${point.y}`);
// }

// const myPoint = {x: 10, y: 15};
// printPoint(myPoint); // Code work!

// // And this object is also suitable, even though it has an extra property `z`!
// const point3D = {x: 10, y: 15, z: 20};
// printPoint(point3D); // Everything is fine! TypeScript only checks for REQUIRED fields.

// // But this one doesn't, because it's missing the `y` property.
// const invalidPoint = {x: 12};
// // printPoint(invalidPoint); // ERROR!

// ---------------------------

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage("Hi!");

// =====

// function throwError(message: string): never {
//   throw new Error(message);
// }

// =====

// let value: unknown;

// value = 10;
// value = "hello";

// // Ошибка:
// // console.log(value.toUpperCase());

// if (typeof value === "string") {
//   console.log(value.toUpperCase()); // OK
// }

// =====

// let data: any;

// data = 5;
// data = "text";

// console.log(data.toUpperCase());

// =====

// let id: number | string;

// id = 10;      // OK
// id = "abc";   // OK
// // id = true; // ❌ error

// function printId(value: number | string) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// =====

interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // необязательное поле
}

const user: User = {
  id: 1,
  name: "Alex",
};

type Product = {
  id: number;
  price: number;
};

const phone: Product = {
  id: 1,
  price: 999,
};

// =====
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

// interface User {
//   id: number;
//   name: string;
//   isAdmin?: boolean; // необязательное поле
// }

// const user: User = {
//   id: 1,
//   name: "Alex",
// };

// type Product = {
//   id: number;
//   price: number;
// };

// const phone: Product = {
//   id: 1,
//   price: 999,
// };

// =====

// function identity<T>(value: T): T {
//   return value;
// }

// identity<number>(10);       // T = number
// identity<string>("hello");  // T = string


// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// getFirstElement([1, 2, 3]);       // number
// getFirstElement(["a", "b"]);      // string

// ------------------------------------------

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   isActive: boolean;
// };

// const users: User[] = [
//   { id: 1, name: "Alex", age: 17, isActive: true },
//   { id: 2, name: "Max", age: 21, isActive: false },
//   { id: 3, name: "Kate", age: 19, isActive: true },
// ];

// function filterByField<T, K extends keyof T>(
//   items: T[],
//   field: K,
//   value: T[K]
// ): T[] {
//   return items.filter(item => item[field] === value);
// }

// const activeUsers = filterByField(users, "isActive", true);
// const adults = filterByField(users, "age", 21);

// =====================

// type SuccessResponse = {
//   status: "success";
//   data: string;
// };

// type ErrorResponse = {
//   status: "error";
//   message: string;
// };

// type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse): string {
//   if (response.status === "success") {
//     return `Данные: ${response.data}`;
//   } else {
//     return `Ошибка: ${response.message}`;
//   }
// }

// const res1: ApiResponse = { status: "success", data: "OK" };
// const res2: ApiResponse = { status: "error", message: "Not found" };

// console.log(handleResponse(res1));
// console.log(handleResponse(res2));

// =====================

type Events = {
  login: { userId: number };
  logout: void;
  message: { text: string };
};


class TypedEventEmitter<E> {
  private listeners: {
    [K in keyof E]?: Array<(payload: E[K]) => void>;
  } = {};

  on<K extends keyof E>(event: K, callback: (payload: E[K]) => void) {
    this.listeners[event] ??= [];
    this.listeners[event]!.push(callback);
  }

  emit<K extends keyof E>(event: K, payload: E[K]) {
    this.listeners[event]?.forEach(cb => cb(payload));
  }
}

// typescript setup
// Setting up typescript project 
// -->npx/npm i typescript -g
//configuring tsconfig.json 
// compile using: tsc filename.ts

// var a = 12
// var b = 13

// console.log(a, b)

//Basic Types
//->Primitives Types (number, string, boolean)
//->Arrays
//->Tuples
//->Enums
//->Any, Unknown, Void, Null, Undefined, Never

//Primitives and References
// data types that contains {}, [], ()
// var a = [1, 2, 3, 4, 5]
// var b = a

// b.splice(b.length-1, 1)
// console.log(a, b)
// //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ] changes will be refelected in parent data

//TYPES
//1.Primitive types
// let a = 12  //number
// let b = "Patty" //string
// let c = true   //boolean

//2.Arrays
// let arr = [1, 2, 3, "Patty", {a: 12}] //mix type array
// let ar2: number[] = [1, 2, 3]  //number type array

//3. Tuples
// let arr: [string, number] = ["patty", 42]
// let arr2: [string, boolean, number] = ["abc", true, 4]

//4. Enums
// enum UserRoles {
//     ADMIN = "admin",
//     GUEST = "Guest",
//     SUPER_ADMIN = "supa_admin"
// }

// console.log(UserRoles.SUPER_ADMIN)


//5. 
//A)Any - data_type without type specified

// var c  //data without data type
// console.log(typeof c)
// c = 12
// c = "Patty"
// console.log(typeof c)


//B. unknown
// var a: unknown
// a = 12
// a = "harsh"

// if (typeof a === "string") {
//     console.log(a.toUpperCase())
// }


//C. void
// function abcd(): void { // function with no return type
//     console.log("hey")
// }

//D. null
// let a: null
// a = 12 will be not assignable to null type

//E. undefined
// var a: undefined
// a = 12 will be not assignable to undefineed type

//Type inference: identifying or inferencing the data-type
//Type annotation: let a: number | boolean | string
//Extending interfaces
//Type alias
// Intersection types

//INERFACE 
// interface User{
//     name: string,
//     email: string,
//     password: string,
//     phone?: number,  //optional field
// }

// interface Admin extends User {
//     isAdmin: boolean
// }

// function abcd(obj: Admin): boolean {
//     return !obj.isAdmin
// }

// console.log(abcd({name: "abcd", email: "abcd@gmail.com", password:"abcd123", isAdmin: true}))

//Type Aliases
// type value = string | boolean | null

// function fn(arg: value) {

// }

// fn(true)

//interseciton
interface User {
    name: string, 
    email: string
}

type Admin = User & {
    getDetails(user: string): void
}

function abcd(obj: Admin){
    obj.getDetails("patty")
}

//interface is used to define the shape and nature of the object
//type will be used to define data type with union (|)


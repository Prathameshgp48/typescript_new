//Generic functions
//Generic interfaces
// Generic classes


//GENERIC FUNCTIONS
// function logger<T>(val: T) {
//     console.log(val)
// }

// logger<string>("Hellow")
// logger<number>(48)
// logger<boolean>(true)

// function logs<T>(a: T, b: boolean, c: number) {}
// logs<string>("heloo",true, 2)

//GENERIC INTERFACE

// interface Halo<T>{
//    id: number,
//    name: string,
//    key: T
// }

// function abcd(obj: Halo<string>) {
    
// }

//GENERIC CLASSES
// class BottleMaker<T>{
//     constructor(public key: T) {
//     }
// }

// let b3 = new BottleMaker<string>("Hey")
// let b4 = new BottleMaker<number>(43)

// console.log(b4.key, b3.key)

function abdc<T>(a: T, b: T): T{
    return "helo" as T
}

abdc<string>("hsdfa", "dsfgaw")
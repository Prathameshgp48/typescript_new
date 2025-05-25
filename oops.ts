//CLASS AND OBJECT

// class BikeFactory {
//     gear = 6;
//     constructor(public brand: string, public type: string, public price: number) {

//     }
// }

// let b1 = new BikeFactory("GT650", "cafe-racer", 4.5)

//this keyword
// class Bottle {
//     constructor(public name: string) {
//         this.name = name
//     }
// }

// let b1 = new Bottle("milton")


//PUBLIC PRIVATE PROTECTED ACCESS SPECIFIERS
//PUBLIC PRIVATE
class Vehicle {
    private brand: string = "Royal Enfield"
    protected isServiceGood: boolean = true
    constructor(public name: string) {

    }
}

class Bike extends Vehicle {
    constructor(name: string) {
        super(name)
    }

    getValue() {
        // console.log(this.name, this.brand)
    }

    reviewService(isServiceGood: boolean) {
        this.isServiceGood = isServiceGood
        console.log(`Service was ${isServiceGood? "good": "worst"}`)
    }
}

//public specifiers allow access to attbs everywhere
//private variables are only meant for the originated class
//protected variables are accessible in originating as well as inherited classes 


let b1 = new Bike("GT650")
b1.getValue()
b1.reviewService(false)


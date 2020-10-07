class Vehicle { // vehicle class  added 

    constructor(make, model, year) { //consrtuctor for vehicle class
        this.make = make;
        this.model = model;
        this.year = year; // three arguments (make model year)
    }

    Information() {  // method added to vehicle class 
        console.log(`Make : ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    } //arguments logged to console

}

class Cars extends Vehicle {  // new class added which inherits from the vehicle class
    constructor(make, model, year, doors){ // constructor added with 4 arguments
        super(make, model, year); //parents class constructor invoked
        this.doors = doors;

    }

    Information(){  //method added
        super.Information();  // information method of parent class invoked 
        console.log(`Doors: ${this.doors}.`);  // amount of doors wrote to console
    }
}

let myCar = new Cars('VW', 'Passat', 2011, 5);
myCar.Information(); // instance created to test if working correctly


// let myVehicle = new Vehicle('VW', 'Golf', 2010);
// myVehicle.Information();
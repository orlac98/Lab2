class BMI {  // BMI class created
    constructor(height, weight) { // constructor added to BMI class
        this.height = height; // two arguments added height & weight
        this.weight = weight;
    }
    calculateBMI() {  // method added 
        let bmi = this.weight / (this.height ** 2);  // bmi formula to return individuals bmi
        return bmi;
    }
}

let MyBmi = new BMI(2,90);  // instance of BMI class 
let calculatedBMI = MyBmi.calculateBMI();
console.log (calculatedBMI);  //calculateBMI invoked 
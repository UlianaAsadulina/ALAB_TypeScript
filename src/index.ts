//@ts-check
type statusVehicle = "started" | "stopped";

class Vehicle {
  make: string;
  model: string;
  wheels: number;

  status: statusVehicle = "stopped";

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

class NCycle {
  make: any | any[];
  model: any | any[];
  wheels: number;

  constructor(make: any | any[], model: any | any[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  print(parametr: number = 0) {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        for (let i = 0; i < this.make.length; i++) {
          console.log(i);
          if (parametr === i) {
            for (let j = 0; j < this.model.length; j++) {
              console.log(j);
              if (parametr === j) {
                console.log(
                  `This NCycle has a ${this.make[i]} ${this.model[j]} at ${parametr}.`
                );
              }
            }
          }
        }
      } else {
        console.log("This NCycle was not created properly.");
      }
    }
  }

  printAll() {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i = 0; i < this.make.length; i++) {
        if (this.make[i] && this.model[i])
          console.log(
            `This NCycle has a ${this.make[i]} ${this.model[i]} at ${i} position`
          );
      }
    }
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

const testCycle1 = new NCycle(1, 2, 3);
testCycle1.print();
testCycle1.printAll();

const testCycle2 = new NCycle("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle("Make", 10, 4);
testCycle3.print(4);
testCycle3.printAll();

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(testCycle1.make, testCycle5.model[1]));

add(testCycle2.make, testCycle4.model[1]);

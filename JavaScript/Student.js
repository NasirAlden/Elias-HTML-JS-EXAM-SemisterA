import { Person } from "./Person.js";
class Student extends Person {
  constructor(firstName, lastName, grade, age) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  printName() {
    console.log("Student Name: " + this.firstName + " " + this.lastName);
  }
  printAge() {
    console.log("Student Age: " + this.age);
  }
}

let st1 = new Student("Nasir", "Alden", 12, 44);

st1.printName();
st1.printAge();

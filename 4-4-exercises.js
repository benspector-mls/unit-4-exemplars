// Question 1
function makeCounter(startingValue){
  return () => { // return a function with a closure around startingValue
    startingValue++; // we maintain a reference to startingValue
    return startingValue;
  }
}

// Question 2
class Circle {
  constructor(radius, color) {
    // Within a constructor, `this` refers to the new instance object that is created and returned
    this.radius = radius;
    this.color = color;
  }

  // These methods live in Circle.prototype and are inherited by instances of the constructor
  drawCircle() {
    return `Drawing a ${this.color} circle.`;
  }

  getCircumference() {
    return this.radius * 2 * Math.PI;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }

  changeColor(color) {
    this.color = color;
    return color;
  }
}

// Question 3
class Teacher {
  constructor(name, school, grade, subject) {
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
  }

  addStudent(name) {
    this.students.push(name);
    return this.students.length;
  }

  changeSchools(school) {
    this.school = school;
    return school;
  }
}

// Question 4
class BankAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = 0;
  }

  showBalance() {
    return `Your balance is $${this._balance.toFixed(2)}.`;
  }

  deposit(amount) {
    this._balance += amount;
    return this.showBalance();
  }

  withdraw(amount) {
    if (amount > this._balance) {
      return 'You do not have enough funds.';
    }
    this._balance -= amount;
    return this.showBalance();
  }
}

module.exports = {
  makeCounter,
  Circle,
  Teacher,
  BankAccount
};
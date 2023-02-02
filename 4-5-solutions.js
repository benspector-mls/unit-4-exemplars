
class Quadrilateral {
  constructor(s1, s2, s3, s4) {
    this.side1 = s1;
    this.side2 = s2;
    this.side3 = s3;
    this.side4 = s4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(length, width) {
    // invokes the Quadrilateral constructor, passing in length for side1 and side3, passing in width for side2 and side4
    super(length, width, length, width); 
  }

  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // invokes the Rectangle constructor, passing in side for both length and width
    super(side, side);
  }

  getDiagonal() {
    return Math.sqrt(this.side1**2 + this.side2**2);
  }
}

class Person {
  constructor(name, age, isCoder) {
    this.name = name;
    this.age = age;
    this.isCoder = isCoder;
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person
};

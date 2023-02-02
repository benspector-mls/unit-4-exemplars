# Unit 4 Short Responses

Table of Contents:
- [4_0 Short Response](#4_0)
- [4_1 Short Response](#4_1)
- [4_4 Short Response](#4_4)
- [4_5 Short Response](#4_5)

<hr>

## 4_0

**1. What is encapsulation? In JavaScript, why do we use it?**

In Object-Oriented Programming (OOP), **encapsulation** is the concept of using objects to keep data and methods that operate on that data in one place. Encapsulation also involves providing limited access to protected data values through a carefully designed interface of methods and properties.

```js
const person = {
  name: "ben",
  age: 27,
  greet(otherPerson) {
    console.log(`Hello ${otherPerson}, my name is ${this.name} and I am ${this.age} years old.`)
  },
  changeName(newName) {
    this.name = newName;
  }
}
```

In this example, the `person` object encapsulates state (`name` and `age`) and behavior that interacts with that state (the `greet()` and `changeName()` methods).

A real life example of encapsulation is an HR Department, where HR staff encapsulates employee data, manipulates it, and oversees any updates to that data. If you want to change your own employee data, you have to go through the HR Department to do so.

The example below does NOT show encapsulation because the data and the function that interact with it are separated
```js
const contacts = ['ben', 'maya', 'reuben' ];
function addContact(name) {
  contacts.push(name);
}
```

**2. How do JavaScript objects encapsulate state? How do they encapsulate behavior?**

JavaScript objects encapsulate state through properties and they encapsulate behavior through methods.

**3. What are factory functions and why are they useful?**

Factory functions are functions that return a structured object. They are useful if we want many objects with the same structure (the same properties and methods).

**4. Write a code snippet in which you create a Person factory function with at least two data properties. Then, in that same code snippet, use your factory function to create a _Person_ object.**

```js
function makePerson(name, age) {
  return {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`)
    }
  }
}

const ben = makePerson('ben', 27);
const daniel = makePerson('Daniel', 33);
ben.greet(); // Hello, my name is Ben and I am 27 years old
daniel.greet(); // Hello, my name is Daniel and I am 33 years old`
```

<hr>

## 4_1

#### 1. In the browser, what serves as the global object?

In a web browser, the global object is called `window`.

#### 2. In the Node.js environment, what serves as the global object?

In the Node.js environment, the global object is called `global`.

#### 3. In the browser environment, what does the following log? **Why?**

```javascript
a = 10;

console.log(window.a);
```

This logs `10` to the console. Any variable declared without a keyword will be added to the global `window` object. In this example, `a` is declared without a keyword and is added to the global `window` object so `window.a` evaluates to `10`.

##### All following code snippets should be run in the browser environemnt: 

#### 4. What does the following code log? **Why**?

```javascript
var b = 100;

console.log(window.b);
```

This logs `100` to the console. Any variable declared with the `var` keyword in the global scope (not in a function) will be added to the global `window` object. In this example, `b` is declared with the `var` keyword and is added to the global `window` object so `window.b` evaluates to `100`.
      
#### 5. What does the following code log? **Why**?

```javascript
let c = 9;
const d = 11;

console.log(window.c);
console.log(window.d);
```

This will log `undefined` twice. Variables declared with `let` or `const` are NOT added to the global `window` object. `c` and `d` are not default properties of the `window` object so they evaluate to `undefined`.

#### 6. What does the following code log? Why?

```javascript
function func() {
      var x = 1;
}

func();

console.log(x);
```

This code will throw an error `ReferenceError: x is not defined` when we attempt to reference `x` in the global scope. Variables declared with `var` in a function's scope are NOT added to the global scope (the `window` object). In this example, the variable `x` is declared inside of the scope of `func` and there is no globally scoped variable `x`. 

#### 7. What does the following code log? Explain the difference, if any, between this output and that of problem 6.

```javascript
function func() {
      x = 1;
}

func();

console.log(x);
```

This code will log `1` to the console because `x` is declared without a keyword `var` while in problem 6, it is. Variables declared without any keyword are added to the global scope, even if they are declared inside a function. In this example, the variable `x` is declared without a keyword so it is added to the global scope with a value of `1`. 

#### 8. What does the following code log? Why?

```javascript
function func() {
      return this;
}

let context = func();

console.log(context);
```

This will log the global `window` object to the console. Per [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this): 

> "For a typical function, the value of `this` is the object that the function is accessed on."

Since the function `func` is declared in the global scope, it is added to the global object as `window.func`. When we invoke `func()`, we are invoking `window.func()` causing `this` to evaluate to `window` which is returned. `context` is then assigned to this returned value and printed.

#### 9. What will the following code log? Explain the difference, if any, between this output and that of problem 8.

```javascript
const obj = {
      func: function() {
      return this;
      },
};

let context = obj.func();

console.log(context);
```

Unlike the previous example, the function `func` is declared as a method on the `obj` object (not globally on the `window` object). Therefore, `this` evaluates to the object `obj` which is returned. `context` is then assigned to this returned value and printed.

#### 10. What will the following code produce? **Why**? 

```javascript
var x = 10; // Global variable x added to the window
var y = 10; // Global variable y added to the window
var z = {   // Global variable z added to the window
      x: -10,   // The property z.x
      y: -10,   // The property z.y
};

function add() { // Global function add added to the window
      return this.x + y;
}

z.add = add; // adding the function add to the z object

console.log(add()); // This logs 20
console.log(z.add()); // This logs 0
```

The first time that `add()` is evaluated and printed, it will print `20`. This is because the function `add` is declared globally and when we invoke it, we are essentially invoking `window.add()`. Therefore, the `this` object that `add` is being "called on" is `window` leading to `this.x` to evaluate to `window.x` with the value `10`. When added with the global `y` variable with the value `10`, the value returned (and then printed) is `20`.

When `z.add()` is evaluated and printed, it will print `0`. This is because the function `add` is being invoked on the `z` object leading to `this.x` to evaluate to `z.x` with the value `-10`. When added with the global `y` variable with the value `10`, the value returned (and then printed) is `0`.

<hr>

## 4_4

**1. What is a closure?**

Each time we create a function, we create a closure. A closure is the set of variables created inside of a function and the variable available outside of the function. This is also known as the "lexical environment".

Closures are often created when we create a function within another function and return the nested function. 

```js
let x = 5; // a global variable available anywhere
function outer() {
  let y = 10; // a local variable available to `outer` and `inner`
  function inner() {
    let z = 20; // a local variable available only to `inner`
    console.log(x + y + z);
  }
  return inner; // After being returned, inner will maintain a reference to `y`
}
let funcWithClosure = outer();
funcWithClosure(); // 35
```


When we return a nested function that references variables (or parameters) in the outer function’s scope, references to the variables of the outer function are retained by the nested function after it is returned. In this example, the variable `y`, which would ordinarily only be accessible by code executed within `outer`, can be used after `outer` returns due to the closure created by `inner`. 

**2. What are the benefits of using a constructor functions to create object instances instead of a factory function?**

Constructor functions automatically create and return a new object that we can assign properties on using the `this` keyword.

Objects created by constructor functions also inherit properties from the constructor's `.prototype` meaning instances are _true_ instances (they return `true` when using the `instanceof` operator).

Because of this, we can also use prototypal inheritance to implement super- and sub-classes.

```js
function Rectangle(w, h) { 
  this.width = w;
  this.height = h;
}
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
}
const myRectangle = new Rectangle(4, 2);
console.log(myRectangle.getArea()); // 8
console.log('myRectangle is a Rectangle:', myRectangle instanceof Rectangle);

// Subclass based on the Rectangle superclass
function Square(w) {
  Rectangle.call(this, w, w)
}
const mySquare = new Square(4);
console.log(mySquare.getArea()); // 16
console.log('mySquare is a Square:', mySquare instanceof Square)
console.log('mySquare is a Rectangle:', mySquare instanceof Rectangle);
```

**3. What is the `__proto__` property and how does it differ from the `protoype` property?**

`__proto__` a property of an _instance_ of a constructor function. It points to the constructor's prototype.

`prototype` is a property of a constructor Function object (like `Array.prototype` or `Object.prototype` or `String.prototype`). It holds the object that serves as the prototype for objects created by that constructor. 

The `__proto__` property of instances of a class's constructor function is equal to the `.prototype` property of the class's constructor function.

Under the hood, this is how the `instanceof` operator and the `Object.getPrototypeOf` method work.

```js
const myArr = [];
console.log(myArr.__proto__ === Array.prototype); // true

console.log(myArr instanceof Array); // true
console.log(Object.getPrototypeOf(myArr). === Array.prototype); // true
```

<hr>

## 4_5

**1. What is inheritance in programming?**

**Inheritance** is a mechanism in object-oriented programming. It describes a relationship between two classes: a **sub-class** that inherits methods from a **super-class**. As a result, instances of the sub-class can use methods defined in a super-class. 

Inheritance can exist in a chain in which a sub-sub-class can inherit from a sub-class which inherits from a super-class.

For example, every Array inherits methods from the `Array.prototype` which inherits methods from the `Object.prototype`. Therefore, all arrays can use `Object.prototype` methods like `toString()`.

**2. In a code snippet, demonstrate inheritance by creating two classes where one is the parent class and one is the child class.**

```js
class Rectangle {
    constructor (w, h) {
        this.width = w;
        this.height = h;
    }

    printArea() {
        console.log(this.width * this.height);
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
}

const shape1 = new Rectangle(5, 3);
console.log(shape1.width, shape1.height); // 5 3
shape1.printArea(); // 15

const shape2 = new Square(5);
console.log(shape2.width, shape2.height); // 5 5
shape2.printArea(); // 25
```

In this example, `Square` is a child class (or "subclass") that inherits properties/methods from the `Rectangle` parent class (or "superclass"). 

The constructor function of `Square` invokes the constructor function of `Rectangle` by invoking `super`, passing in `sideLength` for the parameters `width` and `height`. Instances of the `Square` class therefore inherit the properties `width` and `height` and the method `printArea`.
 

**3. What is polymorphism? Show an example in a code snippet.**

Polymorphism is a concept in object-oriented programming where multiple types of objects share "signatures" (they have the same property and method names even if their values/implementations are different). 

The impact of polymorphism is that our program can reliably use different types of objects in the same way if they all descend from the same parent class.

```js
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    makeSound() {
        console.log(`${this.make} ${this.model} goes vroom!`);
    }
}

class OldsMobile extends Car {
    constructor(make, model) {
        super(make, model);
        this.isVintage = true;
    }
    makeSound() {
        console.log("pop pop... screeeech");
        super.makeSound();
    }
}

let myCar = new Car("Chevy", "Cobalt");
let myOldCar = new OldsMobile("Ford", "Model T")
myNormalCar.makeSound();
// Chevy Cobalt goes vroom!
myOldCar.makeSound(); 
// pop pop... screeeech
// Ford Model T goes vroom!
```

In this example, `OldsMobile` is a child class of the `Car` class. The `OldsMobile` class overrides the method `makeSound` so that it first prints out `pop pop... screeeech` before invoking the parent class's method `super.makeSound()`.

This demonstrates polymorphism because both `myNormalCar` and `myOldCar` can be invoked in the same way but have their own implementations of the `makeSound` method. 

This can be particularly useful if you have an array of objects that all descend from the same superclass and you need to invoke the same method on every object. If your code is polymorphic, you won't have to change _how_ you interact with each object since they have the same properties/methods even if the implementations are different.

```js
const myCars = [
    new Car("Chevy", "Cobalt"),
    new OldsMobile("Ford", "Model T"),
    new OldsMobile("Ford", "Thunderbird"),
    new Car("Tesla", "Model X")
]

myCars.forEach(car => car.makeSound());
````
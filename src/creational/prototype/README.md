<h1 align='center'>Prototype</h1>

<p align='center'>
	<img src='./.github/prototype.png' alt='Prototype'>
</p>

## Problem

"A class needs a exact copy of a object and creating a new object and pass all its properties don't suits with the application context"

Create a new object and use the original's properties is something not recommended because:

- It could have private fields and methods
- The new object is totally dependant of the original
- Maybe you don't know the concrete class that the object are based, but know only the interface

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/prototype/structure.png "Prototype UML Diagram")

- 1: The prototype interface declares the cloning methods. In most cases it's just the *clone* method
- 2: The class *ConcretePrototype* implements the cloning method. Besides copying the original object, this method can handle with some specific cloning cases like recursive dependencies
- 3: The client can produce copies of any object that implements the prototype interface

## Usage

### Aplications
- Use it when your code should'nt depends on concrete classes of objects you need to copy
- Use it when you need to reduce the number of subclasses that changes only the initialization of their objects. Somebody could have created these subclasses to be able to create objects with a certain configuration

### Consequences
#### Pros
- Cloning objects without coupling to their concrete classes
- Using cloning procedures instead of repeating initialization codes
- Easily producing of complex objects


#### Cons
- Clone complex objects that have circular referencies could be tricky

---
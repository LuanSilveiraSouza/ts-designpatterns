<h1 align='center'>Decorator</h1>

<p align='center'>
	<img src='../../../.github/decorator.png' alt='Decorator'>
</p>

## Problem

"A entity has multiple behaviors that needs to composite one above other"

The main problems decorator solves are:

- Object Aggregation over Inheritance
- Behavior modifications implemented easy as possible
- Extending the object without breaking it and making simple to disassemble

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/decorator/structure.png "Decorator UML Diagram")

- Component: Interface that describes the shape of target entities;
- Concrete Component: Class of objects that will be wrapped;
- Base Decorator: It defines how decorators will change base behaviors of Components;
- Concrete Decorator: Adds extra utilities using Base Decorator to the Component passed in constructor
- Client: Wraps components in multiple decorators to make all layers of that object

## Usage

### Aplications
- Need to assign new behaviors to a object, at a runtime and without breaking the code that uses the object
- When it's very awkward to extend the object with inheritance

### Consequences
#### Pros
- Extending without creating subclasses (inheritance)
- Add and remove responsibilities from an object at runtime
- Combining decorators to create multiple behavior

#### Cons
- Hard to remove a specific wrapper when using many decorators
- Hard to implement a decorator that don't depends on the order of decorator stack

---
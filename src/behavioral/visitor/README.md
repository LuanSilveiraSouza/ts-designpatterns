<h1 align='center'>Visitor</h1>

<p align='center'>
	<img src='../../../.github/visitor.png' alt='Visitor'>
</p>

## Problem

Visitor enable to add new functionalities to a set of entities without directly modifying it.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/visitor/structure-en.png "Visitor UML Diagram")

- Visitor interface defines the visit methods to all the entities
- Concrete Visitors implements these visit methods to pass through the elements in a specific way
- Element interface enables classes to accept a visitor's visit
- Each element has to implement the accept method, redirecting a input visitor to its right visit method and passing itself as a parameter
- Clients use the classes and visitors. Usually, it represents a complex objec, like a composite tree

## Usage

### Aplications
- Use it to add new functionalities related to visit-like algorithms
- Use it to clean up business logic of auxiliary behaviors
- Use it to do operations in every element of complex structures 

### Consequences
#### Pros
- Single Responsibility Principle: add new behaviors without modifying the actual classes 
- Open/Closed Principle: The visitor class has only a implementation of a behavior in every class


#### Cons
- Need to update all visitors when a new entity is added to the flow
- Visitors may cannot access some private method of the target classes

---
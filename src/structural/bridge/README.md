<h1 align='center'>Bridge</h1>

<p align='center'>
	<img src='../../../.github/bridge.png' alt='Bridge'>
</p>

## Problem

"A entity needs extensions in its shape in two or more different dimensions"

The main problems bridge solves are:

- Provide multiple variants by dividing a property to a separate implementation
- Decrease the number of extended classes compared to a inheritance approach

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/bridge/structure-en.png "Bridge UML Diagram")

- Abstraction: Defines the main logic of that entity
- Implementation: Interface that are common to all Concrete Implementations
- Concrete Implementations: Classes that will be injected in Abstraction providing low-level details

## Usage

### Aplications
- Separate and organize a big monolithic class with various functionalities
- Extend a class in N dimensions
- Need to be able to switch between implementations at runtime

### Consequences
#### Pros
- Creating platform-independent classes
- Open-Close Principle: You can add implementations freely from each other
- Single Responsibility Principle: Focus in High-Level logic in the abstraction, focus in details in the implementations

#### Cons
- Might make the code complicated applying this patterns in a highly cohesive class

---
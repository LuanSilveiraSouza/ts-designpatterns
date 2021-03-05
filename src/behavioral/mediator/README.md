<h1 align='center'>Mediator</h1>

<p align='center'>
	<img src='../../../.github/mediator.png' alt='Mediator'>
</p>

## Problem

"A massive different types of classes needs to connect to each other."

The Mediator is a 3rd entity that position itself in the middle of that communication.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/mediator/structure.png "Mediator UML Diagram")

- 1: Components are a bunch of classes that needs a mediator to properly exchange data
- 2: The Mediator interface defines the base to all mediators can fit the role of a middle component 
- 3: Concrete mediators implements a specific logic to the intercommunication

## Usage

### Aplications
- Use mediators when some classes are strictly bounded to another classes 
- Disable the needing of subclasses only to modify the context or scope of a entity

### Consequences
#### Pros
- Components don't need to know anything about each other
- Improved reusability of components
- Open/Closed Principle: insert new Mediators without touching any other piece of code 

#### Cons
- Without caution, a Mediator can become a God Class

---
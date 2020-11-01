<h1 align='center'>Builder</h1>

<p align='center'>
	<img src='../../../.github/builder.png' alt='Factory'>
</p>

## Problem

"A complex object needs different constructor setups, so its building is separated from its representation."

The main problems builder solves are:

- A object with many properties that have different ways to instantiate;
- Better orchestration when building objects with step-by-step creation;
- Can join forces with Factory. 

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/builder/structure.png "Builder UML Diagram")

- Target Class: Class that are being builded with various constructors;
- Builder Interface: Declares steps to all Builders create Target objects;
- Concrete Builders: Implements Builder Interface defining the steps to create a specific object;
- Director: After receiving a builder, it runs all steps to make a object and return it.

## Usage

### Aplications
- Avoid enormous constructors with diverse behavior
- Create different representations of the same product
- Construct composite trees or very complex objects

### Consequences
#### Pros
- Creating by steps;
- Reusability of construction code when defining various building representations
- *Single Responsibility Principle*: You isolate complex construction code from business logic code

#### Cons
- Increased complexity of code by adding many classes
- Creating products can become tedious and laborious 

---
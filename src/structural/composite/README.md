<h1 align='center'>Composite</h1>

<p align='center'>
	<img src='../../../.github/composite.png' alt='Composite'>
</p>

## Problem

The composite pattern makes sense to be used when the core of a functionality or system can be represented as a tree, with a stabilished hierarchy and a commander of all elements.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/composite/structure-en.png "Composite UML Diagram")

- Component: Interface that defines the basic functionality of all components (the simples and complexes) 
- Leaf: Basic element that does not have sub elements but implements the hard logic 
- Composite: Class that control all leafs, delegating requests to all of it without the need of know each one of elements
- Client: Composes a composite object with all required elements 

## Usage

### Aplications
- Implement a tree-like structure
- Treat both simple and complex objects equally and with possibility of inheritance

### Consequences
#### Pros
- Handling complex hierachies with simplicity
- Open-Close Principle: Adds new elements without changing the composite class

#### Cons
- It could become a bit hard to declare a single interface that can contain all objects 

---
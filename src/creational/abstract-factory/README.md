<h1 align='center'>Abstract Factory</h1>

<p align='center'>
	<img src='../../../.github/abstract-factory.png' alt='Abstract Factory'>
</p>

## Problem

The Abstract Factory enables the massive production of families of related objects.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/abstract-factory/structure.png "Abstract Factory UML Diagram")

- Abstract Products: Interface that set a contract to products that compose a family of objects;
- Concrete Products: Implements the correspondent interface of it product type;
- Abstract Factory: Declares the methods that all factories must follow for create the objects;
- Concrete Factory: Implements the methods creating a specific collection of classes that are based on some variant of the concrete products;
- Client uses the factories without knowing the deep face of the creation of the objects, but if needed it can work directly with concrete factories.

## Usage

### Aplications
- Need to work with a bunch of family-related objects without use concrete classes of those products

### Consequences
#### Pros
- Guaranteed compatibility between all products created by the factories;
- Single Responsibility Principle: Extract the creation of products from its deep implementations;
- Open/Closed Principle: Adds new variants with little effort.

#### Cons
- Significantly high complexity in the mere creation of objects

---
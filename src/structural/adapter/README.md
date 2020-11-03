<h1 align='center'>Adapter</h1>

<p align='center'>
	<img src='../../../.github/adapter.png' alt='Adapter'>
</p>

## Problem

"A class that consumes a X interface classes needs to use a Y interface classes"

The main problems adapter solves are:

- Resolve incompatibility by different interface implementations;
- Integrate 3rd Party libraries that follows its own patterns;

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter.png "Adapter UML Diagram")

- Client: Consumes classes based on Client Interface;
- Client Interface: Main interface that represents the contract to interact with the Client;
- Adaptee: Different class that Client needs to use;
- Adapter: Middle class that implements Client Interface and converts its methods and props to Adaptee format.

## Usage

### Aplications
- Need to use some class that isn't compatible with the rest of the code
- It is more simple create an adapter to that class than adapt the rest of the code to directly use it
- Construct composite trees or very complex objects

### Consequences
#### Pros
- Separating interface and data conversion from business logic
- Inserting many adapters you need without breaking nothing existent

#### Cons
- Increase complexity of adding new classes, so in some cases is more simply just change the Adaptee directly to match Client Interface

---
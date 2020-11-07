<h1 align='center'>Strategy</h1>

<p align='center'>
	<img src='../../../.github/strategy.png' alt='Strategy'>
</p>

## Problem

"A class must switch some of your behavior between multiple algorithms"

The Strategy Pattern (also know as Policy Pattern) that enables a behavior to have a family of implementations and to select and switch between each one at runtime.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png "Strategy UML Diagram")

- Context: Entity that maintains reference to one of the concrete strategy at a time
- Strategy: Interface that enable classes to be used and switched by Context
- Concrete Strategy: A specific implementation that Context uses
- Client: Creates concrete strategies and assign them to Context

## Usage

### Aplications
- Use it when you want different implementations of a algorithm to be controled by a object during runtime 
- Use it when you have a lot of similar classes that only differ in the way they execute some behavior

### Consequences
#### Pros
- Swap between behaviors at runtime
- Isolation of implementation details from the code that uses it
- Replace inheritance by composition
- Open/Closed Principle: You can add new strategies without modifying the context


#### Cons
- If the algorithms rarely change, this pattern adds a unnecessary complexity to the context
- Clients needs to know the differences between strategies to properly use them

---
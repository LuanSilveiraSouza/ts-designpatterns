<h1 align='center'>Iterator</h1>

<p align='center'>
	<img src='../../../.github/iterator.png' alt='Iterator'>
</p>

## Problem


Iterator enables complex objects and structures to have a default output collection.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/iterator/structure.png "Iterator UML Diagram")

- The iterator interface declares common methods to handle with iterables (next, done, etc)
- Concrete iterators build a specific iteration algorithms to a specific structure
- The collection interface defines the model that iterators can interact with it
- Collections enables iterators to traverse its data in a specific way
- Client works either with collections and iterators

## Usage

### Aplications
- Use it to traverse complex objects and data structures (like trees and graphs) in different ways accordingly to the context
- Use it to hide and encapsulate collections from clients perspective

### Consequences
#### Pros
- Single Responsibility Principle: isolate actual code implementations from its traversing methods
- Open/Closed Principle: implements new kinds of collections and iterators without changing anything else
- Iterate over the same collection multiple times in different manners
- Delaying iterations when needed


#### Cons
- Very specific to contexts where it has really complex data
- Iterators can be less eficient compared to going directly on the original code

---
<h1 align='center'>Flyweight</h1>

<p align='center'>
	<img src='../../../.github/flyweight.png' alt='Flyweight'>
</p>

## Problem

Given a context where a collection of classes were instantiate a huge ammount of times, flyweight can decrease the RAM usage by sharing common resources ammong the objects.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/flyweight/structure.png "Decorator UML Diagram")

- Flyweight classes possesses resources that can be shared. Intrinsic states are the ones shared. Extrinsic states are data that do not repeat and are unique to each object.
- The Context class contains the extrinsic state. When a context is paired with one of the flyweight objects, it represents the full state of the original object.
- The Client calculates and stores the extrinsic data, and all the mechanism will sounds like a template to it.
- The Flyweight Factory handles with the shared resources, returning and creating new instances when needed

## Usage

### Aplications
- Use it when a massive number of objects are in memory and some of its data or logic can be generalized.

### Consequences
#### Pros
- RAM saving 

#### Cons
- Tradeoff: saves RAM by using more of the CPU
- More code complexity

---
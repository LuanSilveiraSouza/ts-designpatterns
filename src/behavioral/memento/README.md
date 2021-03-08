<h1 align='center'>Memento</h1>

<p align='center'>
	<img src='../../../.github/memento.png' alt='Memento'>
</p>

## Problem

If a context need a state of a object that has already modified, Memento is the design pattern to use.

## Structure

![State UML Diagram](https://refactoring.guru/images/patterns/diagrams/memento/structure1.png "Memento UML Diagram")

- The Originator is the class that Memento will bring back a previous state. It can save this state and restore back by the use of a Memento.
- The Memento is kinda a snapshot of a previous version of some object. It is a good idea to make it immutable and handle only with its data.
- Caretakers are optional classes that handle with multiple Mementos, knowing the flow to save and restore them in the Originator and storing all Mementos inside it.

## Usage

### Aplications
- Use it when a certain context need to rollback objects inside state.

### Consequences
#### Pros
- Producing snapshots of objects without modifying its encapsulation
- You can simplify the Originator's code by adding a Caretaker to handle all the states history by itself. 


#### Cons
- Need some care about memory usage of a big quantity of Mementos.
- Dynamic languages cannot apply some of the encapsulation or immutability of this design pattern. 

---
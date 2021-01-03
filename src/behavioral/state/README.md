<h1 align='center'>State</h1>

<p align='center'>
	<img src='../../../.github/state.png' alt='State'>
</p>

## Problem

"A object has a specific state that has to change frequently."

The State Pattern implements a Finite State Machine (FSM) in a object-oriented way.

## Structure

![State UML Diagram](https://refactoring.guru/images/patterns/diagrams/state/structure-en.png "State UML Diagram")

- 1: The Context stores a reference to one of the possible states and delegates to it all hard work to its specific implementations handle the actions.
- 2: The State interface declares all common actions that the concrete states have to solve. There is a common sense that all states have to make all methods declared in this interface meaningfull to prevent unused code.
- 3: Concrete States implements all State methods in a specific way. Maybe the states needs a back reference to the context to handle with operations owned by it.

## Usage

### Aplications
- Use it when a object have a great number of possible states and its change frequently between them.
- Use it to avoid multiple conditionals in a class to handle with all states and its consequences

### Consequences
#### Pros
- Single Responsibility Principle: Each state have its particular class and the context only change between states and execute the needed operations
- Open/Close Principle: Introduces new states without breaking any other state or the mechanism between them and the context
- Context code simplification by removing bulky conditional state handling


#### Cons
- These pattern requires a deep analysis of the context because its implementation in a code that rarely changes or have little amounts of states can become an anti-pattern

---
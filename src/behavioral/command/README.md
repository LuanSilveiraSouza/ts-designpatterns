<h1 align='center'>Command</h1>

<p align='center'>
	<img src='../../../.github/command.png' alt='Command'>
</p>

## Problem

The Command Pattern stabilish a way to transform a call or task in a independent object, with some information about the request if needed.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/command/structure.png "Command UML Diagram")

- The Command interface only defines the execution method of all commands
- Concrete Commands define a way to call a method of the Receiver
- The Receiver is the original class. It contains business logic and a bunch of method that will be acessed by Commands
- Invoker class has the responsibility to pass any Command and execute it
- Clients set Commands and a Invoker, and use them to access the Receiver target class 

## Usage

### Aplications
- Use it when you want to handle with operations as parametrized objects
- Use it to control the order and delay of executions
- Use it when you need reversing mechanisms

### Consequences
#### Pros
- Single Responsibility Principle: decouple classes that invoke operations from classes that perform these operations
- Open/Closed Principle: You can introduce new commands into the app without breaking existing client code.
- Easy implementation of redo/undo
- You can join different commands in a single one


#### Cons
- Caution when handling with deferment 

---
<h1 align='center'>Facade</h1>

<p align='center'>
	<img src='../../../.github/facade.png' alt='Facade'>
</p>

## Problem

"A complex subsystem with various modules needs to be executed in a specific order"

The main problems facade solves are:

- Provide a interface to do things in order
- Act as a entry point to a larger body of code that will be reused (for example a library) 

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/facade/structure.png "Facade UML Diagram")

- Facade: A convenient class that executes routines in the subsystem;
- Complex SubSystem: Composes of dozens of objects and entities but are unhandleful
- Client: Uses the facade to access to the system's functionalities

## Usage

### Aplications
- Want to structure a subsystem into layers
- When you need to have a limited but straightforward interface to a complex subsystem.

### Consequences
#### Pros
- Isolate the main functionalities of the complex implementations of it

#### Cons
- A facade can become a god object coupled to all classes of an app.
- In some cases it becomes a Anti-Pattern

---
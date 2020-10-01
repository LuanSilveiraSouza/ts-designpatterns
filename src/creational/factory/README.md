<h1 align='center'>Factory</h1>

<p align='center'>
	<img src='./.github/factory.png' alt='Factory'>
</p>

## Problem

"A framework needs to standardize the architectural model for a range of applications, but allow for individual applications to define their own domain objects and provide for their instantiation."

The main problems factory solves are:

- Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses;
- Defining a "virtual" constructor to always return the same instance;
- Avoid the use of creation of instance using *new*. 

## Structure

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Factory_Method_UML_class_diagram.png/600px-Factory_Method_UML_class_diagram.png "Factory UML Diagram")

- Creator(Abstract): Declares the factory method who returns a object from Product class;
- ConcreteCreator: Overwrites the basic implementation of the factory method and returns a object from ConcreteProduct class;
- Product(Abstract): Defines a interface for created objects from the factory method;
- ConcreteProduct: Implementation of Product class.

## Usage

### Aplications
- Encapsulate the creation of objects
- Need for subclasses that define what object subtype it is
- Protecting subclasses from direct access
- When the class don't anticipate the object class it want to create

### Consequences
#### Pros
- Low Coupling;
- More flexibility;
- Control on object instantiation.

#### Cons
- Increased number of classes can overload the system.

---
<h1 align='center'>Template Method</h1>

<p align='center'>
	<img src='../../../.github/template-method.png' alt='Template Method'>
</p>

## Problem

A group of algorithms that have the same steps and order can be generalized with the Template Method.

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/template-method/structure.png "Template Method UML Diagram")

- The Abstract Class defines the steps and the specific order of execution with the templateMethod() function
- Concrete Classes override all the steps with solid implementations, but not the templateMethod() function

## Usage

### Aplications
- Use it to hide the details of algorithm implementations from clients
- Use when the code base have a group of very similar algorithms that can be acts with a template

### Consequences
#### Pros
- Freedom to override specific parts of the whole algorithm execution
- Hability to pull the code to a superclass


#### Cons
- Can become very complex in cases with a lot of steps
- Some clients may be limited by the skeleton of the template

---
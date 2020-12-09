<h1 align='center'>Chain of Responsibility</h1>

<p align='center'>
	<img src='../../../.github/chain-of-responsibility.png' alt='Chain of Responsibility'>
</p>

## Problem


A Chain of Responsibility pass some task to a battery of handlers that will chose what is the most suitable to do the task.
It treats the task as a request that will going ahead until somebody execute it or reach the final of the chain

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/structure.png "Chain of Responsibility UML Diagram")

- Handler: Handlers implements a common interface or extends a abstract class with the proposal method and ocasionally a method to set the next handler
- BaseHandler: Defines the structure for all handlers and expose a few boilerplate code
- ConcreteHandler: Defines the solid code to handling the requests based on BaseHandler
- Client: Uses the handlers to compose a chain of sequential classes that will treat incoming request and will delegate it to the choosed handler

## Usage

### Aplications
- Use it when the program expects to handle with a variety of requests but don't know which one is the next and what are the request sequence 
- Use it when you need to execute several handlers in a particular order or the order have to change at runtime 

### Consequences
#### Pros
- Control of the order of request handling
- Single Responsibility Principle: decouple classes that invoke operations that classes that perform operations
- Open/Closed Principle: adds new handlerss to the code without much effort. 


#### Cons
- Some chains can become enormous
- Some requests can reach the final and you will might need to handle what to do in that cases

---
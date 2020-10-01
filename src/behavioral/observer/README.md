<h1 align='center'>Observer</h1>

<p align='center'>
	<img src='../../../.github/observer.png' alt='Observer'>
</p>

## Problem

"Multiple classes must have to listen specific events at the same time."

The Observer Pattern works with 2 parts: Publisher and Subscriber.

- The publisher have the responsibility to call the subscribers.
- The opposite cannot be implemented (all the subscribers waiting the publisher).

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/observer/structure.png "Observer UML Diagram")

- 1: The Publisher have events of interests of other objects and a Subscriber register/unregister system
- 2: When a event happens, the Publisher triggers all Subscribers in the list
- 3: The Subscriber must have at the minimum the *update* method, which is actioned in the notifying. This method may have parameters relationed to the Publisher.
- 4: Concrete Subscribers perform actions based on the response of the Publisher.
- 5: The Subscriber can need a entire Publisher object to properly handle with the notification.
- 6: The Client only needs to create a Publisher, adds Subscribers to it and trigger the events.

## Usage

### Aplications
- Use it when the state changes of one object require changing other objects
- Use it when the set of objects that need update is unknown or changes dinamically 

### Consequences
#### Pros
- Open/Close Principle: Subscribers get data from Publishers without changing its properties or behaviors
- Easy relations between different objects at runtime


#### Cons
- Subscriber are notified in the order that they have registered

---
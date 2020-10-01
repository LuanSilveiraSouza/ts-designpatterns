<h1 align='center'>Singleton</h1>

<p align='center'>
	<img src='./.github/singleton.png' alt='Singleton'>
</p>

## Problem

"Application needs one, and only one, instance of an object. Additionally, lazy initialization and global access are necessary."

The usage of singleton should be considered only if three criteria are satisfied:

- Global access is not otherwise provided for
- Lazy initialization is desirable
- Ownership of the single instance cannot be reasonably assigned

## Structure

![alt text](https://sourcemaking.com/files/v2/content/patterns/singleton1.png "Singleton UML Diagram")

Make the class of the single instance responsible for access and "initialization on first use". The single instance is a private static attribute. The accessor function is a public static method.

## Usage

### Aplications
- Distribute a global access to a object
- Prevines news instanciations making private constructors
- Do *lazy initialization*, that is, create the instance in first use

### Consequences
#### Pros
- Control in how and when clients access the instance
- More flexibility than static methods because it allows polymorphism
- With just an internal implementation of the singleton you can make the singleton create a controlled number of instances

#### Cons
- A static and specific implementation like singleton results in great coupling
- Bad scope
- Some languagens don't have one class because executes classes with a ClassLoader

---
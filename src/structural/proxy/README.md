<h1 align='center'>Proxy</h1>

<p align='center'>
	<img src='../../../.github/proxy.png' alt='Proxy'>
</p>

## Problem

The Proxy pattern control the access of clients to a object.

The Proxy acts as an intermediator. The most common uses of access control provided by proxy are:

- Authentication/Security
- Request's intermediary processes 
- Memory/system resource management

## Structure

![alt text](https://refactoring.guru/images/patterns/diagrams/proxy/structure.png "Proxy UML Diagram")

- Service Interface: Interface that the target class and the proxy follows;
- Service: A useful class with some business logic;
- Proxy: The intermediary class that points to a Service and do some aditional processing before pass the flow to the Service;
- Client: Uses the Service by passing it to the Proxy so it can control the Service logic flow.

## Usage

### Aplications
- Security: Protection Proxy
- Lazy initialization: Virtual Proxy
- Request log: Log Proxy
- Caching results: Cache Proxy
- Remote code execution: Remote Proxy 

### Consequences
#### Pros
- Control services without Clients knowing about it
- Lifecycle management
- Proxies works event if the Service is not fully started
- Open/Close Principle: Adds new Proxies without disrupting existing code

#### Cons
- The Service logics can be delayed by Proxy's intermediary processes

---
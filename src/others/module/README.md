<h1 align='center'>Module</h1>

## Problem

The module pattern serves as a wrapper to a set of attributes and functions. It shows itself as a alternative to bring some of the organization of the Object-Oriented paradigm in a functional-structured code.

## Structure

- The Module itself is a function that contains inside of it a set of variables, functions and operations using these elements;
- Clients uses the module in a similar form of the instantiation of a object, except of don't have to use the *new* keyword;
- Modules can have almost all features that a object has, but in a functional way: for example, to contain private attributes and methods you only need to not return these elements in the end of the module function;
- All operations that are related to modules are possible thanks to a special concept: Closures;
- A closure is the binding that a function or a value has with its original scope. The values that are returned in the end of the module function remembers of everything that has taken part of that scope, even if the function has already started, runned and finished. 

## Usage

### Aplications
- Some object-oriented concepts make sense in the context of the code but you want the control gained by using functional programming
- Vanilla Javascript with part of the power that Typescript provides you 
- Structure elements around a wrapper (like the outer part of a lib that will be directly called by clients)

### Consequences
#### Pros
- Flexibility in construction of layers of code
- All benefits of closures
- With the correct implementation you can insert private variables/methods, cloning and inheritance, augmentations, cross-file private state and submodules

#### Cons
- For new players, closures can be a bit difficult to first understand at all

---
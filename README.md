# Linked List in JavaScript

## Overview
This project implements a **Linked List** data structure in JavaScript using ES6 classes. It includes various methods to manipulate and interact with the linked list.

## Features
- **Append**: Add a node at the end
- **Prepend**: Add a node at the beginning
- **Size**: Get the size of the linked list
- **Head**: Get the first node
- **Tail**: Get the last node
- **At(index)**: Get the node at a specific index
- **Pop**: Remove the last node
- **Contains(value)**: Check if a value exists in the list
- **Find(value)**: Get the index of a value
- **toString()**: Convert the list into a string representation
- **InsertAt(value, index)**: Insert a node at a specific position
- **RemoveAt(index)**: Remove a node at a specific position

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/linked-list-js.git
   ```
2. Navigate to the project folder:
   ```sh
   cd linked-list-js
   ```

## Usage
Import the LinkedList class in your `main.js` file:

```js
import LinkedList from "./LinkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("rabbit");
console.log(list.toString()); // "( dog ) -> ( cat ) -> ( rabbit ) -> null"
```

## Visual Representation
Below is a visual example of how nodes are connected in a linked list:

```
( dog ) -> ( cat ) -> ( rabbit ) -> null
```
Each node contains a **value** and a reference to the **next node**.

## Contributing
Feel free to submit pull requests or report issues.

## License
This project is open-source and available under the [MIT License](LICENSE).


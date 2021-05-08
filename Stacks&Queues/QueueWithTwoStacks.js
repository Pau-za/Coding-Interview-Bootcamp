// Implementar un queue usando dos stacks

// 1- Crear dos stacks e implementar la función enqueue que utiliza el push del stack
const firstStack = new Stack();
const secondStack = new Stack();

firstStack.push('uno');
firstStack.push('dos');
firstStack.push('tres');
firstStack.push('cuatro');
firstStack.push('cinco');

// Implementar el método dequeue pusheando cada elemento del stack 1 en el stack2 y luego popear el stack2

secondStack.push(firstStack.pop());
secondStack.push(firstStack.pop());
secondStack.push(firstStack.pop());
secondStack.push(firstStack.pop());
secondStack.push(firstStack.pop());

// Devuelve los elementos en el orden invertido, como lo haría un Queue
secondStack.pop();
secondStack.pop();
secondStack.pop();
secondStack.pop();
secondStack.pop();
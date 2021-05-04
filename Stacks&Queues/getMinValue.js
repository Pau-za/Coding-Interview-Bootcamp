// problema 1
// Implementa un stack de enteros con sus operaciones push, pop, peek y una funcion getMin 
// que obtendrá  el  valor  mas  pequeño  de  la  pila.  Todas  las  operaciones (incluyendo 
// getMin) deben ser constantes (O(1)).

class MinStack {
    constructor() {
        this.storage = {};
        this.size = 0;
        this.minValue = 0;
        this.minIndex = 1;
    }

    // push to the top of the stack
    push(element) {
        if (this.size == 0) {
            this.minValue = element;
        } else if (element < this.minValue) {
            this.minValue = element;
            this.minIndex = this.size;
            this.minIndex++;

        }
        this.size++;
        this.storage[this.size] = element;
        console.log(this.storage);
    }

    // pop method
    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        console.log(removed);
        console.log(this.storage);
        return removed;
    }

    peek() {
        console.log(this.storage[this.size]);
        return this.storage[this.size];
    }

    getMin() {
        if (this.storage[this.minIndex] == undefined) {
            let counter = 0;
            for (const [key, value] of Object.entries(this.storage)) {
                counter++;
                if (counter == 1) {
                    this.minValue = value;
                } else if (value < this.minValue) {
                    this.value = value;
                }
            }
            console.log(`nuevo valor mínimo ${this.minValue}`)
        } else {
            console.log(this.storage);
        }
        return (this.minValue);
    }
};


const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

minStack.getMin();

minStack.pop();

minStack.getMin();
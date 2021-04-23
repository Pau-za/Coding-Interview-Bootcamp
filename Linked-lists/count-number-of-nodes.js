// creando nodos de la linked list
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// va la linked list
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addNode = (el) => {
        let node = new ListNode(el);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

// Implementa un algoritmo que encuentre nodo k lugares antes del último nodo.

const lList1 = buildLinkedList([2, 3, 1, 4, 9, 10, 11]);
const lList2 = buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const numberOfNodes = (list, n) => {
    let current = list.head;
    let counter = 1;
    let val = 0;

    while (current.next != null) {
        counter ++;
        if (n == current.data) {
            val = counter - 1;
        }
        current = current.next;
    }
    console.log(counter - val);
    return counter - val;
}

numberOfNodes(lList1, 9); // respuesta 2
numberOfNodes(lList2, 1); // respuest 9
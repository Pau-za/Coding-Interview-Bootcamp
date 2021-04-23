// Tienes dos números representados por dos linked lists donde el valor de cada nodo representa un dígito. 
// Los dígitos están guardados de manera inversa, de manera que las unidades está en el primer nodo (head), las decenas en el segundo nodo, etc.

// Escribe un programa que dado dos linked lists, sume los dos números que representan y regrese esa suma representada también en un linked list.

// creando nodos de la linked list
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

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
};



const linkedList1 = [2, 3, 1];
const linkedList2 = [6, 0, 3];

const LinkedListA = [9, 9, 9];
const LinkedListB = [1];

// construyendo las linked lists

const list1 = buildLinkedList(linkedList1);
const list2 = buildLinkedList(linkedList2);

const listA = buildLinkedList(LinkedListA);
const listB = buildLinkedList(LinkedListB);


const arrayReverse = (list) => {
    let current = list.head;
    let arr = [];

    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    let reversedEls = '';
    
    for (let i = 0; i < arr.length; i++) {
        newIndex = (arr.length - 1 - i);
        reversedEls += arr[newIndex];
    }
    console.log(reversedEls);
    return reversedEls
};

const sumTwoLists = (list1, list2) => {
    const sum = parseInt(arrayReverse(list1)) + parseInt(arrayReverse(list2));
    const linkedListResult = buildLinkedList([...sum.toString()]);
    console.log(linkedListResult);
    return linkedListResult;
};

sumTwoLists(list1, list2);
// sumTwoLists(listA, listB);
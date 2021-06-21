// stack data structure

// const { number } = require("prop-types");

// class Stack {
//     constructor() {
//        this.stack = [];
//     }
//     add(item) {
//         this.stack.push(item)
//     }
//     remove(){
//         if(this.stack.length){
//             return this.stack.pop()
//         }
//     }
// }

// const guest = new Stack();
// guest.add('jamir ali');
// guest.add('kadamali');
// guest.add('sarafat ali');
// console.log(guest.stack);
// const speaker = guest.remove();
// console.log(speaker)


// Queue data structure 


// class Queue {
//     constructor(){
//         this.queue = [];
//     }
//     enqueue(item) {
//         this.queue.push(item);
//     }
//     dequeue(){
//         if(this.queue.length){
//             return this.queue.shift();
//         }
//     }
//     front() {
//         if(this.isEmpty())
//         return 'no element in queue'
//         return this.queue[0]
//     }
    
  
//     isEmpty(){       
//         return this.queue.length == 0;
//     }
    
   
//     printQueue()
//     {
//         var str = "";
//         for(var i = 0; i < this.queue.length; i++)
//             str += this.queue[i] +" ";
//         return str;
//     }
// }

// const waiters = new Queue();
// waiters.enqueue('jamir ali');
// waiters.enqueue('karamotali');
// waiters.enqueue('sarafatali')
// console.log(waiters.queue)
// const victory = waiters.dequeue();
// console.log(victory);

// const firstPerson = waiters.front()
// console.log((firstPerson))
// const allPerson = waiters.printQueue();
// console.log(allPerson)


// dictionary data structure


// class Dictionary {
//     constructor(){
//         this.dictionary = {};
//     }
//     add(key, value) {
//         this.dictionary[key] = value;
//     }
//     get(key) {
//        return  this.dictionary[key];
//     }
// }

// const phoneBook = new Dictionary();
// phoneBook.add('jamir ali',  '01254486385');
// phoneBook.add('amir', '0125441536');
// console.log(phoneBook.dictionary)
// const jamirali = phoneBook.get('jamir ali')
// console.log(jamirali)

// LinkedList data structure


// class Node {
//     constructor (value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor (head){
//         this.head = head;
//     }
//     add(value){
//         const newNode = new Node(value);
//         let current = this.head;
//         while(current.next != null){
//             current = current.next;
//         }
//         current.next = newNode;
//     }

// }
// const head = new Node(1200);
// const manobBondon = new LinkedList(head)
// manobBondon.add(522);
// manobBondon.add(53);
// manobBondon.add(63)
// console.log(JSON.stringify(manobBondon))

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor(head) {
//         this.head = head;
//     }
//     add(value) {
//         const newNode = new Node(value);
//         let current = this.head;
//         while(current.next != null){
//             current = current.next;
//         }
//         current.next = newNode;
//     }
// }

// const head = new Node(300);
// const chaining = new LinkedList(head);
// chaining.add(256);
// chaining.add(254);
// chaining.add(206);
// chaining.add(266);
// chaining.add(256);
// console.log(JSON.stringify(chaining))

// binary_search data structure 


// const numbers = [2, 3, 5, 7, 8, 10, 12, 15, 18, 20, 22, 24,  26, 28, 30];
// const target = 22;
// function binary_search(numbers, target){
//     let  startIndex = 0;
//     let endIndex = numbers.length - 1;
//     while(startIndex <= endIndex){
//         let mid = Math.floor((startIndex + endIndex) / 2 );
//         if(numbers[mid] === target){
//             console.log('targeted number is found in position', mid)
//             return mid;
//         }if(numbers[mid] < target){
//             startIndex = mid + 1;
//         }if(numbers[mid] > target){
//             endIndex = mid -1;
//         }
    
//     }
//     return -1;
// }

// const index = binary_search(numbers, 22)
// console.log(index)


// bubbleSort data structure assending sort

const  array = [23, 55, 32, 34, 15, 56, 35, 36, 57, 12, 11, 3, 40, 10, 5];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           if(array[j] > array[j + 1]) {
               const temp = array[j];
               array[j] = array[j+1];
               array[j+1] = temp;
           }            
        }       
    }
    return array;
}
const sorted = bubbleSort(array)
console.log(sorted)


// bubbleSort data structure decending sort


const  array1 = [23, 55, 32, 34, 15, 56, 35, 36, 57, 12, 11, 3, 40, 10, 5];

function bubbleSort1(array1) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1.length; j++) {
           if(array1[j] < array1[j + 1]) {
               const temp = array1[j];
               array1[j] = array1[j+1];
               array1[j+1] = temp;
           }            
        }       
    }
    return array1;
}
const sorted1 = bubbleSort1(array1)
console.log(sorted1)

const numbers = [25, 55, 32, 34, 15, 56, 35, 36, 57, 12, 11, 3,10, 40, 10,39, 14, 79, 19, 45];
function bubble_sorted(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j+ 1]){
                const swap = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = swap;
            }
            
        }
    }
    return numbers;
}
const numbers_sorted = bubble_sorted(numbers);
console.log(numbers_sorted)

// selection sort data structure 
 
const numbers2 = [23, 55, 32, 34, 15, -4, 56, 35, 36, 57, 12, 11, 3, 40, 10, 5];

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let  j = i+1;  j < array.length;  j++) {
            if (array[j] < array[min]){
                min = j;
            }            
        }
       const temp = array[i];
       array[i]  = array[min];
       array[min]  = temp;
    }
    return array;
}

const selectedSort = selectionSort(numbers2);
console.log(selectedSort)
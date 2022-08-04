// Of course, gotta set up our list.
class Node
{
    constructor(val)
    {
        this.data = val;
        this.next = null;    
    }
}

// Given a reference to the head of a list
// Push a new node to the front!
function push(head, x) {
    // Allocate Node
    let new_node = new Node(x);

    // Link the old list off the new node.
    new_node.next = head;

    // Gotta move the head so we can point to the new node.
    head = new_node

    return head;
}

// Alright, lets count how many times a node shows up in our list!

// Counter is used here so one can run this code multiple times!
// Just need to set it as 0 of course, no biggie.
function count(head, y, counter){
    if (head == null)
        // This will only run after we've gone through the list. 
        return counter;
    if (head.data == y)
        // This will only run if the number we stumble across is the number in question.
        counter++;

    // Go again until we reach the end, which is of course, null.
    return count(head.next, y, counter);
}

// Lets start up our list!

// Of course, empty at first.
let head = null

// Lets push our numbers in...
head = push(head, 5);
head = push(head, 5);
head = push(head, 3);
head = push(head, 5);
head = push(head, 3);
head = push(head, 4);
let m = 5
let w = 3
let h = 4
let steve = 8

// Then we check the good ol count function.
// Wild we can make a whole code run in a console log.
console.log(`count of ${m} is ` + count(head, m, 0))
console.log(`count of ${w} is ` + count(head, w, 0))
console.log(`count of ${h} is ` + count(head, h, 0))
console.log(`count of ${steve} is ` + count(head, steve, 0))
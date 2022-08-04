class Node {
  constructor(val = 0) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}
var head;

// This will be a function to insert a new node
// at the beginning of the doubly linked list
function insert(data) {
  // Distribute node.
  var temp = new Node();

  // Fill the data value in temp
  temp.data = data;
  temp.next = temp.prev = null;

  // If head is null
  //head will be changed to temp
  if (head == null) {
    head = temp;
    console.log(head);
  } else {
    // Inserting the node before the head.
    // Ya know, in the case the head actually ISN'T Null */
    temp.next = head;
    head.prev = temp;
    head = temp;
  }
}
function closestSums(X) {
  // The first node of the triplet.
  var first = head;

  // The second node of the triplet
  var second = head.next;

  // Stores the last node, the tail, of the list
  var tail = head;

  // Keep going untill end of the list
  while (tail.next != null) {
    tail = tail.next;
  }
  // Stores sum closet to X
  var diff = Number.MAX_VALUE;

  // The third node of the triplet
  var third = tail;

  // Keep going till the end of the list
  while (first != null) {
    second = first.next;
    third = tail;

    while (second != null && third != null && third != second) {
      var sum = first.data + second.data + third.data;

      if (Math.abs(X - sum) < Math.abs(X - diff)) {
        // Update value of diff
        diff = sum;
      }
      // Is sum less than X?
      if (sum < X) {
        // Increment the second point
        second = second.next;
      } else {
        // Decrement the third pointer
        third = third.prev;
      }
    }
    // Move first pointer ahead
    first = first.next;
  }
  // And print!
  console.log(diff);
}

head = null;
insert(4);
insert(3);
insert(2);
insert(1);

closestSums(3);

/*
    PRIORITY QUEUE: a data structures that takes with each piece of data a prioirty values 
    and returns the data in order of priority

    THE PROBLEM: 
    Implement a priority queue with the following methods:
        insert(data, priority)
        peek()
        popMax()
*/

// First you must define the type of data being taken in
// Nodes will make up the priorityQueue by referencing the node behind it
function Node(data, priority) {
    this.data = data
    this.priority = priority
}

// When the priorityQueue is initiliazed, the only thing that need to exist
// is a reference to the first element of the prioirtyQueue, which we will use for later methods
function PriorityQueue() {
    this.first = null
}

// O(n), will at most have to go through every item in the queue
PriorityQueue.prototype.insert = function(data, priority) {
    const newNode = new Node(data, priority)
    // Handle when the newNode is going to be the first in the queue
    if (!this.first || this.first.priority < priority) {
        const prevFirst = this.first
        this.first = newNode
        this.first.next = prevFirst
    }
    else {
        let prevNode = this.first
        // Keeps progressing along the queue until we find where the newNode should go
        while (prevNode.next && prevNode.next.priority >= priority) {
            prevNode = prevNode.next
        }
        newNode.next = prevNode.next
        prevNode.next = newNode
    }
}

// O(1)
PriorityQueue.prototype.peek = function() {
    return this.first.data
}

// O(1)
PriorityQueue.prototype.popMax = function() {
    const oldFirst = this.first
    this.first = oldFirst.next
    return oldFirst
}
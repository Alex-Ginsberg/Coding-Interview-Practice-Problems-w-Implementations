/*
    THE PROBLEM: 
    Write 3 tree traversal functions: breadthFirst, depthFirstPreOrder, depthFirstPostOrder

    breadthFirst: evaluate each level of the tree in order
    depthFirstPreOrder: children nodes are visited before sibling nodes
    depthFirstPostOrder: a node is not traversed until all of its children have been traversed
*/

function Node(value) {
    return {
        value,
        children: []
    }
}

// O(n), has to evaluate every value in the tree
function breadthFirst(root) {
    const queue = [root]
    while (queue.length) {
        const currentNode = queue.shift()
        queue.push(...currentNode.children)
        console.log(currentNode.value)
    }
}

// Process current node
// Process first node
// Process next node
// ...

// O(n)
function depthFirstPreOrder(root) {
    console.log(root.value)
    // Goes through each of the children in order and makes a recursive call on the child
    // This works because it continuously process the children from left to right
    root.children.forEach(child => {
        depthFirstPreOrder(child)
    })
}

// Process all children
// Process the root

// O(n)
function depthFirstPostOrder(root) {
    // Causes the children to be evaluated before the parent
    root.children.forEach(child => {
        depthFirstPostOrder(child)
    })
    console.log(root.value)
}

/*
    Tree Traversal Algorithms:
        Inorder: left, root, right
        Preorder: root, left, right
        Postorder: left, right, root
*/

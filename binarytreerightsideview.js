//Objective is to return the right side view of a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does a BFS traversal over the tree and pushes
//the right most node into the result.

if (!tree.root) {
    return []
}

let queue = [tree.root]
let result = []

while (queue.length > 0) {
    let next = []
    result.push(queue[queue.length - 1].val)
    
    for (let node of queue) {
        if (node.left) {
            next.push(node.left)
        }
        
        if (node.right) {
            next.push(node.right)
        }
    }
    
    queue = next
}

return result
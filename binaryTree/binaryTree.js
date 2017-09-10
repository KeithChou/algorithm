const Algorithm = require('../index.js')
const insert = Symbol('insert')
const insertNode = Symbol('insertNode')

class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinaryTree extends Algorithm {
  constructor (option) {
    super(option)
    this.root = null
  }
  [insert] (key) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this[insertNode](this.root, newNode)
    }
    // return this.root
    console.log(this.root)
  }
  [insertNode] (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this[insertNode](node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this[insertNode](node.right, newNode)
      }
    }
  }
  createBinaryTree (arr = [8, 3, 10, 1, 6, 14, 4, 7, 13]) {
    arr.forEach(value => {
      this[insert](value)
    })
  }
}

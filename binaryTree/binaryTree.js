const Algorithm = require('../index.js')
const insert = Symbol('insert')
const insertNode = Symbol('insertNode')
const inOrderTraverseNode = Symbol('inOrderTraverseNode')
const prevOrderTraverseNode = Symbol('prevOrderTraverseNode')
const nextOrderTraverseNode = Symbol('nextOrderTraverseNode')

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
  [insert] (key, cb) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this[insertNode](this.root, newNode)
    }
    // return this.root
    cb(this.root)
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
  [inOrderTraverseNode] (node, callback) {
    if (node !== null) {
      this[inOrderTraverseNode](node.left, callback)
      callback(node.key)
      this[inOrderTraverseNode](node.right, callback)
    }
  }
  [prevOrderTraverseNode] (node, callback) {
    if (node !== null) {
      callback(node.key)
      this[prevOrderTraverseNode](node.left, callback)
      this[prevOrderTraverseNode](node.right, callback)
    }
  }
  [nextOrderTraverseNode] (node, callback) {
    if (node !== null) {
      this[nextOrderTraverseNode](node.left, callback)
      this[nextOrderTraverseNode](node.right, callback)
      callback(node.key)
    }
  }
  createBinaryTree (arr = [8, 3, 10, 1, 6, 14, 4, 7, 13], cb = () => {}) {
    if (typeof arr === 'function') {
      cb = arr
      arr = [8, 3, 10, 1, 6, 14, 4, 7, 13]
    }
    arr.forEach(value => {
      this[insert](value, cb)
    })
  }
  inOrderTraverse (callback = () => {}) {
    this.createBinaryTree()
    this[inOrderTraverseNode](this.root, callback)
  }
  prevOrderTraverse (callback = () => {}) {
    this.createBinaryTree()
    this[prevOrderTraverseNode](this.root, callback)
  }
  nextOrderTraverse (callback = () => {}) {
    this.createBinaryTree()
    this[nextOrderTraverseNode](this.root, callback)
  }
}

let a = new BinaryTree()
a.nextOrderTraverse(key => {
  console.log(key)
})

const Algorithm = require('../index.js')
const insert = Symbol('insert')
const insertNode = Symbol('insertNode')
const inOrderTraverseNode = Symbol('inOrderTraverseNode')
const prevOrderTraverseNode = Symbol('prevOrderTraverseNode')
const nextOrderTraverseNode = Symbol('nextOrderTraverseNode')
const searchMinNode = Symbol('searchMinNode')
const searchMaxNode = Symbol('searchMaxNode')
const searchNode = Symbol('searchNode')

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
  [searchMinNode] (node) {
    if (node === null) {
       return false
    }
    while (node && node.left !== null) {
      node = node.left
    }
    return node.key
  }
  [searchMaxNode] (node) {
    if (node === null) {
      return false
    }
    while (node && node.right !== null) {
      node = node.right
    }
    return node.key
  }
  [searchNode] (node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return this[searchNode](node.left, key)
    } else if (key > node.key) {
      return this[searchNode](node.right, key)
    } else {
      return true
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
  // 中序遍历二叉树, callback接受一个参数，表示二叉树中的每个节点指。先序，后续相同。
  inOrderTraverse (callback = () => {}) {
    this[inOrderTraverseNode](this.root, callback)
  }
  // 先序遍历二叉树
  prevOrderTraverse (callback = () => {}) {
    this[prevOrderTraverseNode](this.root, callback)
  }
  // 后续遍历二叉树
  nextOrderTraverse (callback = () => {}) {
    this[nextOrderTraverseNode](this.root, callback)
  }
  // 找到二叉树中的最小值，返回最小值
  searchMin () {
    let node = this[searchMinNode](this.root)
    return node
  }
  // 找到二叉树中的最大值，返回最大值
  searchMax () {
    let node = this[searchMaxNode](this.root)
    return node
  }
  // 在二叉树中找到指定的值，若存在，则返回true；否则返回false
  search (key) {
    let node = this[searchNode](this.root, key)
    return node
  }
}

const Algorithm = require('../index.js')
const leaf = Symbol('leaf')
const insert = Symbol('insert')
const insertNode = Symbol('insertNode')
const inOrderTraverseNode = Symbol('inOrderTraverseNode')
const prevOrderTraverseNode = Symbol('prevOrderTraverseNode')
const nextOrderTraverseNode = Symbol('nextOrderTraverseNode')
const searchMinNode = Symbol('searchMinNode')
const searchMaxNode = Symbol('searchMaxNode')
const searchNode = Symbol('searchNode')
const removeNode = Symbol('removeNode')
const findMinNode = Symbol('findMinNode')
const inOrderArr = Symbol('inOrderArr')
const prevOrderArr = Symbol('prevOrderArr')
const nextOrderArr = Symbol('nextOrderArr')
const printFromTtBArr = Symbol('printFromTtBArr')

class Node {
  constructor (key, index) {
    this.key = key
    this.index = index
    this.left = null
    this.right = null
  }
}

class BinaryTree extends Algorithm {
  constructor (option) {
    super(option)
    this.root = null
    this[leaf] = []
    this[inOrderArr] = []
    this[prevOrderArr] = []
    this[nextOrderArr] = []
    this[printFromTtBArr] = []
  }
  [insert] (key, index) {
    let newNode = new Node(key, index)
    if (this.root === null) {
      this.root = newNode
    } else {
      this[insertNode](this.root, newNode)
    }
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
  [inOrderTraverseNode] (node) {
    if (node !== null) {
      this[inOrderTraverseNode](node.left)
      this[inOrderArr].push(node.key)
      this[inOrderTraverseNode](node.right)
    }
  }
  [prevOrderTraverseNode] (node) {
    if (node !== null) {
      this[prevOrderArr].push(node.key)
      this[prevOrderTraverseNode](node.left)
      this[prevOrderTraverseNode](node.right)
    }
  }
  [nextOrderTraverseNode] (node, callback) {
    if (node !== null) {
      this[nextOrderTraverseNode](node.left, callback)
      this[nextOrderTraverseNode](node.right, callback)
      this[nextOrderArr].push(node.key)
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
      return node.index
    }
  }
  [findMinNode] (node) {
    if (node === null) {
      return null
    }
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  [removeNode] (node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = this[removeNode](node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this[removeNode](node.right, key)
      return node
    } else {
      // 删除二叉树中的节点分四种情况：
      // 1. 该节点有左右孩子；2. 该节点没有左右孩子；3. 该节点只有左孩子；4. 该节点只有右孩子

      // 1. 该节点有左右孩子，此时要找到该节点右子树中的最小值，然后将该节点的值等于右子树中最小值。最后删除该最小值的节点。
      if (node.left !== null && node.right !== null) {
        let min = this[findMinNode](node.right)
        node.key = min.key
        node.right = this[removeNode](node.right, min.key)
        return node
      }
      // 2. 该节点没有左右孩子：则直接删除该节点(将其置为null即删除)
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 3. 该节点只有左孩子：将该节点等于该节点的左孩子。
      if (node.right === null) {
        node = node.left
        return node
      }
      // 4. 该节点只有右孩子：将该节点等于该节点的右孩子。
      if (node.left === null) {
        node = node.right
        return node
      }
    }
  }
  createBinaryTree (arr = [8, 3, 10, 1, 6, 14, 4, 7, 13], cb = () => {}) {
    if (typeof arr === 'function') {
      cb = arr
      arr = [8, 3, 10, 1, 6, 14, 4, 7, 13]
    }
    for (let i = 0; i < this[leaf].length; i++) {
      arr.push(this[leaf][i])
    }
    arr.forEach((value, index) => {
      this[insert](value, index)
    })
    cb(this.root)
  }
  // 中序遍历二叉树, callback接受一个参数，表示二叉树中的每个节点指。先序，后序相同。
  // 用途：将二叉树转换成双向链表、从小到大排序二叉树
  inOrderTraverse (callback = () => {}) {
    this[inOrderTraverseNode](this.root)
    return callback(this[inOrderArr])
  }
  // 先序遍历二叉树
  // 用途：复制二叉树
  prevOrderTraverse (callback = () => {}) {
    this[prevOrderTraverseNode](this.root)
    return callback(this[prevOrderArr])
  }
  // 后续遍历二叉树
  // 用途：操作系统文件读取原理
  nextOrderTraverse (callback = () => {}) {
    this[nextOrderTraverseNode](this.root)
    return callback(this[nextOrderArr])
  }
  // 找到二叉树中的最小值，返回最小值
  // 原理：搜索🔍左子树
  searchMin () {
    let node = this[searchMinNode](this.root)
    return node
  }
  // 找到二叉树中的最大值，返回最大值
  // 原理：搜索🔍右子树
  searchMax () {
    let node = this[searchMaxNode](this.root)
    return node
  }
  // 在二叉树中找到指定的值，若存在，则返回true；否则返回false
  // 原理：与当前父节点的key对比，递归遍历searchNode方法
  search (key) {
    let node = this[searchNode](this.root, key)
    return node
  }
  // 删除二叉树中的某个节点，返回删除节点之后的二叉树。如果找不到此节点，则返回节点二叉树本身(相当于复制二叉树)
  remove (key) {
    let node = this[removeNode](this.root, key)
    return node
  }
  // 从上到下打印二叉树
  printFromTopToBottom (callback) {
    if (this.root === null) {
      return []
    }
    let arr = []
    arr.push(this.root)
    while (arr.length) {
      let node = arr.shift()
      this[printFromTtBArr].push(node.key)
      if (node.left !== null) arr.push(node.left)
      if (node.right !== null) arr.push(node.right)
    }
    callback(this[printFromTtBArr])
  }
  // 向二叉树中添加节点
  push () {
    let [node, args] = [this[leaf], Array.prototype.slice.call(arguments)]
    node = node.concat(args)
    this.root = null
    this.createBinaryTree()
    return this.root
  }
}

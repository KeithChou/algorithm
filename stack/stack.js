const Algorithm = require('../index.js')

class Stack extends Algorithm {
  constructor (option) {
    super(option)
  }
  push (arr, ...args) {
    let [len, i] = [args.length, 0]
    for (i; i < len; i++) {
      arr[arr.length] = args[i]
    }
    return arr.length
  }
  pop (arr) {
    let num = arr[arr.length - 1]
    arr.length = arr.length - 1
    return num
  }
  unshift (arr, ...args) {
    let [len, i] = [args.length, 0]
    for (i; i < len; i++) {
      arr.splice(0, 0, args[i])
    }
    return arr.length
  }
  shift (arr) {
    let num = arr[0]
    arr.splice(0, 1)
    return num
  }
}

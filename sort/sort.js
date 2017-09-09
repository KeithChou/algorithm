const Algorithm = require('../index')

class Sort extends Algorithm {
  constructor (option) {
    super(option)
  }
  bubbleSort (arr) {
    // 实现原理
    // 1. 对每个元素进行比较，如果j > j + 1，此时交换位置
    // 2. 当循环整个数组时，最大的元素已经排序好
    // 3. 进行下轮循环，此时不用循环已排序好的元素。
    // 4. 重复1 - 3步骤
    // 5. 此时数组已经排序好
    // 最好时间复杂度：O(n)
    // 最差时间复杂度：O(n^2)
    let [len, i, j, temp] = [arr.length]
    for (i = 0; i < len - 1; i++) {
      for (j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    return arr
  }
  selectSort (arr) {
    // 实现原理
    // 1. 选定一个值为最小值，记录其索引为min
    // 2. 再次轮询整个数组，找到比min为索引的值更小的值，将其索引赋值给min
    // 3. 此时min为最小值的索引，交换初始值和min为索引值的位置
    // 4. 重复1 - 3步骤
    // 5. 此时数组已经排序好
    // 最好时间复杂度：O(n^2)
    // 最坏时间复杂度：O(n^2)
    let [len, i, j, temp, min] = [arr.length]
    for (i = 0; i < len; i++) {
      min = i
      for (j = i + 1; j < len; j++) {
        if (arr[j] < arr[min]) {
          min = j
        }
      }
      temp = arr[min]
      arr[min] = arr[i]
      arr[i] = temp
    }
    return arr
  }
}

var a = new Sort({
  end: 100
})
console.log(a.selectSort(a.random()))
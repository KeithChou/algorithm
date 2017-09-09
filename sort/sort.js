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
  insertSort (arr) {
    // 实现原理
    // 1. 假定第一个元素已经排序，从第二个元素开始从后向前扫描
    // 2. 如果已排序的元素大于i元素，则交换他们的位置(通过splice添加再删除)
    // 3. 重复1 - 2步骤
    // 4. 此时数组已经排序好
    // 最好时间复杂度：O(n)
    // 最差时间复杂度：O(n^2)
    let [len, i, j] = [arr.length]
    for (i = 1; i < len; i++) {
      for (j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          arr.splice(j, 0, arr[i])
          arr.splice(i + 1, 1)
        }
      }
    }
    return arr
  }
  shellSort (arr) {
    // 实现原理：插入排序优化版本
    // 1. 以n/2为步长并且对步长取半值直到步长为1
    // 2. 最初以较大的步长进行交换，接着再以较小的步长进行交换，
    // 3. 最后数组基本已经排序，此时步长为①，接着以插入排序算法进行元素的交换
    // 4. 此时数组已经排序好
    // 最好时间复杂度：O(n)
    // 最差时间复杂度：O(nlog^2(n))
    let [len, gap, i, j, temp] = [arr.length]
    for (gap = len >> 1; gap > 0; gap >>= 1) {
      for (i = gap; i < len; i++) {
        temp = arr[i]
        for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
          arr[j + gap] = arr[j]
        }
        arr[j + gap] = temp
      }
    }
    return arr
  }
}

var a = new Sort({
  end: 10
})
console.log(a.shellSort(a.random(true)))
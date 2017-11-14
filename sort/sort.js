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
  cocksailSort (arr) {
    let len = arr.length
    let [left, right] = [0, len - 1]
    while (left < right) {
      for (let i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
        }
      }
      left++
      for (let i = right; i > left; i--) {
        if (arr[i] < arr[i - 1]) {
          let temp = arr[i]
          arr[i] = arr[i - 1]
          arr[i - 1] = temp
        }
      }
      right--
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
  mergeSort (arr) {
    // 实现原理：
    // 1. 以数组长度的一般作为中间值，分成两个序列
    // 2. 递归回调函数，直到每个数组的长度小于2，方可进行递归操作
    // 3. 递归结束后数组已经排序好
    // 最好时间复杂度：O(nlogn)
    // 最差时间复杂度：O(nlogn)
    if (arr.length < 2) {
      return arr
    }
    let len = arr.length
    let mid = parseInt(len / 2)
    let merge = (left, right) => {
      let final = []
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          final.push(left.shift())
        } else {
          final.push(right.shift())
        }
      }
      return arr.concat(left.concat(right))
    }
    return merge(this.mergeSort(arr.slice(0, mid)), this.mergeSort(arr.slice(mid)))
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
  shellSort (arr) {
    /* 希尔排序是基于插入排序的以下两个性质改进的一个算法：
    1. 插入排序在对几乎已经排序好的数据做操作时，效率高，即可以达到线性排序的效率
    2. 但插入排序一般来说是低效的。因为插入排序每次只能将数据移动一位。

    实现原理：插入排序优化版本
    1. 以n/2为步长并且对步长取半值直到步长为1
    2. 最初以较大的步长进行交换，接着再以较小的步长进行交换，
    3. 最后数组基本已经排序，此时步长为①，接着以插入排序算法进行元素的交换
    4. 此时数组已经排序好

    最好时间复杂度：O(n)
    最差时间复杂度：O(nlog^2(n))
    */
    let [len, i, j, gap, temp] = [arr.length]
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
  quickSort (arr) {
    // 实现原理
    // 1. 选取第一个值作为基准值
    // 2. 数组中大于基准值的值放在右边，小于基准值的值放在左边(二叉树实现原理)
    // 3. 递归回调函数，直到数组长度小于2时返回
    // 4. 此时数组已经排序好
    // 最好时间复杂度：O(nlogn)
    // 最差时间复杂度：O(nlogn)
    if (arr.length < 2) {
      return arr
    }
    let [left, right, mid, len, i] = [[], [], arr[0], arr.length]
    for (i = 1; i < len; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return this.quickSort(left).concat(mid).concat(this.quickSort(right))
  }
  heatSort (arr) {
    /*
      通常堆排序是通过一维数组来实现的。在数组起始位置为0的情况中：
      1. 父节点i的左子节点在位置(2i + 1)
      2. 父节点i的右子节点在位置(2i + 2)
      3. 子节点i的父节点在位置Math.floor((i - 1) / 2)

      堆排序思想：
      1. 找到最后一个父节点，进行最大堆调整
      2. 移除位在第一个数据的根节点，并作最大堆调整的递归运算g
    */
    let len = arr.length
    function swap (i, j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    function maxHeapify (start, end) {
      var dad = start
      var son = dad * 2 + 1
      if (son >= dad) return
      if (son + 1 < dad && arr[son] < arr[son + 1]) {
        son++
      }
      if (arr[dad] < arr[son]) {
        swap(dad, son)
        maxHeapify(son, end)
      }
    }
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      maxHeapify(i, len)
    }
    for (let i = len - 1; i > 0; i--) {
      swap(0, i)
      maxHeapify(0, i)
    }
    return arr
  }
}

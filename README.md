## algorithm

### 说明
这个小型的algorithm库主要面向javascript开发者。在algorithm中封装了常用的排序算法，如冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序等。另外还有树的常见操作，如生成一个二叉树、前序遍历、中序遍历、后序遍历、从上到下打印二叉树、向二叉树中添加、删除、查找二叉树中的某个节点等。在源码上对每个方法都添加了注释。表示对该方法的说明。

algorithm我会持续更新，时间不定。有关算法和数据结构方面的知识我都会放到这个algorithm上。
希望能同jser一起交流，欢迎围观：）

### 使用方法

> 排序算法方面：

```
使用new操作符调用Sort类，接受一个对象作为参数，参数可不传递

let sort = new Sort({
    start: 0, // 默认值，随机生成数组的最小值
    end: 10000, // 默认值，随机生成数组的最大值
})

random方法接受一个boolean值作为参数，true(默认值)表示生成的数组有重复，false表示生成的数组不重复

let arr = sort.random()

冒泡排序: sort.bubbleSort(arr)
选择排序: sort.selectSort(arr)
插入排序: sort.insertSort(arr)
希尔排序: sort.shellSort(arr)
归并排序: sort.mergeSort(arr)
快速排序: sort.quickSort(arr)
```

> 树

```
1. 使用new操作符调用BinaryTree类，接受参数同Sort类，参数可不传

let tree = new BinaryTree(obj)

2. 生成二叉树，createBinaryTree方法，接受两个参数：数组和回调函数。回调函数中接受一个参数，表示对应的节点。两个参数可选。二叉树默认为：[8, 3, 10, 1, 6, 14, 4, 7, 13]

tree.createBinaryTree(arr, cb)

3. 以下深度优先遍历算法接受一个回调函数作为参数，回调函数接受一个值，表示对应节点。

中序遍历：tree.inOrderTraverse(cb)

先序遍历：tree.prevOrderTraverse(cb)

后序遍历：tree.nextOrderTraverse(cb)

4. push方法接受一个值作为参数，表示需要向二叉树中插入的值

增加节点：tree.push(value)

5. 查找节点

5.1 查找树中的最小节点值，返回查找到的节点值

tree.searchMin()

5.2 查找树中的最大节点值，返回查找到的节点值

tree.searchMax()

5.3 查找树中指定的值，接受一个值作为参数，返回该值的索引值

tree.search(value)

6. 删除节点：remove方法接受一个参数，表示需要删除的值。返回删除后的二叉树。

tree.remove(value)

```

以上。我会持续更新的。感谢围观和吐槽：）
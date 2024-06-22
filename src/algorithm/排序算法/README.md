## 常见排序算法的分类

### 插入类排序

基本思想：每次将一个元素插入到前面已经排好序的子序列中

主要包括：`直接插入排序`、`折半插入排序`

### 交换类排序

基本思想：根据两个元素的比较结果来交换两个元素在序列中的位置。

主要包括：`冒泡排序`、`快速排序`

### 选择类排序

基本思想：每趟都从待排序列中选取一个最小值作为序列的第i个元素,直到第n-1趟，待排序列只剩下一个元素。

主要包括：`简单选择排序`、`堆排序`(借助`完全二叉树`的概念)、`归并排序`

## 直接插入排序

基本思想：一个数组, 左边有序(起始只有一个元素), 把右边元素依次插入到左边的有序表

算法描述：

```java {11-13,15}
// 直接插入排序
public void insertSort(int[] array, int n) {
    int i, j;
    // [1, n-1]依次插入到前面的有序表
    for (i = 1; i <= n - 1; i++) {
        // 临时存放待插入元素
        int tmp = array[i];
        // 若tmp小于前序, 需将前序后移并寻找插入位置
        if (tmp < array[i - 1]) {
            // 向前逐个比较，大于tmp的元素都要后移，寻找插入位置
            for (j = i - 1; j >= 0 && tmp < array[j]; j--) {
                array[j + 1] = array[j];
            }
            // 找到插入位置(array[j]后面)
            array[j + 1] = tmp;
        }
    }
}
```

* 空间复杂度: `O(1)`, 借助于了一个临时存放单元
* 时间复杂度: `O(n^2)`, 最好情况下, 元素已经有序, 时间复杂度为`O(n)`
* 稳定性: 稳定
* 适用场景: 基本有序

## 折半插入排序

基本思想：也是左边有序, 右边依次插入有序表, 不同的是找插入位置时, 使用折半查找法

算法描述：

```java {10-17,19-21}
// 折半插入排序
public void binaryInsertSort(int[] array, int n) {
    int i, j;
    // [1, n-1]依次插入到前面的有序表
    for (i = 1; i <= n - 1; i++) {
        // 临时存放待插入元素
        int tmp = array[i];
        int left = 0, right = i - 1;
        // 折半法寻找tmp的插入位置
        while (left <= right) {
            int mid = (left + right) / 2;
            if (tmp < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // 移动元素 出循环后有 left > right 且 left = right + 1
        for (j = i - 1; j >= left; j--) {
            array[j + 1] = array[j];
        }
        array[left] = tmp;
    }
}
```

* 空间复杂度: `O(1)`
* 时间复杂度: `O(n^2)`, 仅减少了比较次数, 大约为`O(nlogn)`(log表示以2为底的对数), 且比较次数与初始顺序无关
* 稳定性: 稳定
* 适用场景: 数据量不大

## 冒泡排序

基本思想：从后向前(也可从前向后)依次比较相邻两元素，若为逆序则交换，这样一趟冒泡会把最小的元素交换到第一个位置; 下一趟冒泡时,
第一个元素就不再参与了，这样每次都把最小元素交换到前面，总共进行`n-1`趟冒泡就可以了。

算法描述：

```java {8-13}
// 冒泡排序
public void bubbleSort(int[] array, int n) {
    // 外层循环控制排序的趟数(n-1 趟)
    for (int i = 0; i < n - 1; i++) {
        // 内层循环用于比较和交换，即一趟冒泡
        for (int j = n - 1; j > i; j--) {
            // 相邻元素比较
            if (array[j] < array[j - 1]) {
                // 交换相邻元素
                int tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
}
```

* 空间复杂度：`O(1)`
* 时间复杂度：`O(n^2)`，最好情况下，元素已经有序，时间复杂度为`O(n)`
* 稳定性：稳定
* 适用场景：基本有序

关于交换元素的方法还可以有如下写法:

```java
example() {
    // 借助临时单元
    int tmp = a;
    a = b;
    b = tmp;
    // 加减操作交换 注意有可能溢出
    a = a + b;
    b = a - b;
    a = a - b;
    // 位操作交换
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}
```

## 快速排序

基本思想：基于分治法，在n个元素中任取一个元素`pivot`(一般为第一个元素)作为基准， 一趟排序后把数据分成两部分，
左边`L[0 ~ k-1]`和右边`L[k+1 ~ n-1]`，使得左边元素都小于`pivot`, 右边都大于`pivot`, 而`pivot`直接复制到`L[k]`上,
这个过程成为一趟快排;  
然后对左子表和右子表分别进行上述过程, 直到每部分只有一个元素或为空为止, 即所有元素都放在了最终位置上。

算法描述：

```java {5,19,21,23,25,28}
// 快速排序
public void quickSort(int[] array, int left, int right) {
    if (left < right) {
        // 划分函数, 找到基准应该在的位置
        int pos = partition(array, left, right);
        // 左边排序
        quickSort(array, left, pos - 1);
        // 右边排序
        quickSort(array, pos + 1, right);
    }
}

// 划分函数，一趟排序的过程。返回值为基准下标
int partition(int[] array, int left, int right) {
    // 以第一个元素作为基准
    int pivot = array[left];
    while (left < right) {
        // 从后向前找到第一个小于pivot的元素
        while (left < right && pivot <= array[right]) right--;
        // 把小于pivot的元素换到左边
        array[left] = array[right];
        // 从前向后找到第一个大于pivot的元素
        while (left < right && pivot >= array[left]) left++;
        // 把大于pivot的元素换到右边
        array[right] = array[left];
    }
    // 出循环时总会有 left == right，把 pivot 放到这里
    array[left] = pivot;
    // 返回基准在的位置
    return left;
}
```

* 空间复杂度: `O(n)`, 栈深度最好为`log(n+1)`, 最坏为`n-1`, 平均栈深度`O(logn)`
* 时间复杂度: 最好`O(nlogn)`, 最坏(有序时最坏)`O(n^2)`, 平均接近最好情况;
* 稳定性: 不稳定
* 适用场景：快排是是所有排序算法中`平均性能最优的`

## 简单选择排序

基本思想: 第`i`趟从`L[i ~ n]`中选择关键字最小的元素与`L[i]`交换, 这样每趟都可确定一个元素的最终位置, 经过`n-1`
趟就可以使整个序列有序。

算法描述:

```java {8-13}
// 简单选择排序
public void selectSort(int[] array, int n) {
    // 外层循环控制排序的趟数(n-1 趟)
    for (int i = 0; i < n - 1; i++) {
        // 记录最小元素位置
        int min = i;
        // 从[i, n-1]中选出最小的
        for (int j = n - 1; j > i; j--) {
            // 更新最小元素位置
            if (array[min] < array[j]) {
                min = j;
            }
        }
        // 最小元素交换到i位置
        int tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
    }
}
```

* 空间复杂度: `O(1)`
* 时间复杂度: `O(n^2)`
* 稳定性: 不稳定

## 堆排序

## 归并排序


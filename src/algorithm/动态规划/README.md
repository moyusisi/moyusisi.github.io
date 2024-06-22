# 动态规划

## 什么是动态规划

动态规划（Dynamic Programming，简称DP）是一种算法，用于解决具有重叠子问题和最优子结构特性的问题。动态规划的核心思想是将原问题拆解为规模更小的子问题，通过求解子问题的最优解，进而构建原问题的最优解。

## 动态规划的特点

动态规划的两个关键特点：

1. `重叠子问题`：相同的子问题会被多次计算，动态规划通过存储这些子问题的解（通常是在一个数组中），使每个子问题只解一次，以减少计算。
2. `最优子结构`：原问题的最优解包含了其子问题的最优解。这意味着可以通过组合子问题的最优解来构造原问题的最优解。

## 算法的形式

动态规划算法可以分为两种主要形式：

1. `自顶向下`：也称为记忆化递归，从原问题开始，递归地解决子问题，并存储结果，避免重复计算。
2. `自底向上`：也称为表格法，从最简单的子问题开始，迭代地计算更复杂的子问题的解，直到得到原问题的解。

## 常解决的问题

动态规划常用于解决三大类问题：

1. 求`最优解`(最值问题)：如：`乘积最大子数组`、`最长回文子串`、`最长上升子序列`
2. 求`可行性`(True或False)：如：`凑零兑换问题`、`字符串交错组成问题`
3. 求`方案总数`：如：`硬币组合问题`、`路径规划问题`

**不要**用动态规划解决的问题：

1. 有些问题可以通过排序解决，如`最小的k个数`
2. 有些问题不存在重叠子问题或最优子结构，如`八皇后问题`

## 解题步骤

动态规划的步骤通常包括：

1. 确定`dp[i][j]`数组及下标的含义：即确定子问题，如何将原问题分解为子问题。
2. 确定递推公式：找出子问题之间的关系，这通常表现为一个递推公式，也称为状态转移方程。通常要求解`dp[i][j]`
   的值就要考虑它与`dp[i-1][j]`或`dp[i][j-1]`的关系
3. dp数组初始化：确定递推的起点，即最简单的子问题的解。
4. 确定遍历顺序：即确定子问题的解决顺序，确保在求解任何子问题之前，其依赖的子问题已经被解决。
5. 构建最终解：根据子问题的解构建原问题的解。

## 练习指南

### 线性问题

线性问题是动态规划中最为基础的一类动态规划问题。其主要特点就是按照我们常说的动态规划概念，即按照问题的规模从小到达进行推导，较大的子问题依赖于较小的子问题 +
当前决策得出。

| 题目                     | 难度 | 题目链接                                                                                           |
|:-----------------------|:---|:-----------------------------------------------------------------------------------------------|
| 70. 爬楼梯                | 简单 | [Link](https://leetcode.cn/problems/climbing-stairs/)                                          |
| 746. 使用最小花费爬楼梯         | 简单 | [Link](https://leetcode.cn/problems/min-cost-climbing-stairs/)                                 |
| 198. 打家劫舍              | 简单 | [Link](https://leetcode.cn/problems/house-robber/)                                             |
| 213. 打家劫舍 II           | 中等 | [Link](https://leetcode.cn/problems/house-robber-ii/)                                          |
| 337. 打家劫舍 III          | 中等 | [Link](https://leetcode.cn/problems/house-robber-iii/)                                         |
| 790. 多米诺和托米诺平铺         | 中等 | [Link](https://leetcode.cn/problems/domino-and-tromino-tiling/)                                |
| 139. 单词拆分              | 中等 | [Link](https://leetcode.cn/problems/word-break/)                                               |
| 303. 区域和检索 - 数组不可变     | 简单 | [Link](https://leetcode.cn/problems/range-sum-query-immutable/)                                |
| 304. 二维区域和检索 - 矩阵不可变   | 中等 | [Link](https://leetcode.cn/problems/range-sum-query-2d-immutable/)                             |
| 525. 连续数组              | 简单 | [Link](https://leetcode.cn/problems/contiguous-array/)                                         |
| 53. 最大子数组和             | 简单 | [Link](https://leetcode.cn/problems/maximum-subarray/)                                         |
| 560. 和为 K 的子数组         | 中等 | [Link](https://leetcode.cn/problems/subarray-sum-equals-k/)                                    |
| 152. 乘积最大子数组           | 中等 | [Link](https://leetcode.cn/problems/maximum-product-subarray/)                                 |
| 238. 除自身以外数组的乘积        | 中等 | [Link](https://leetcode.cn/problems/product-of-array-except-self/)                             |
| 724. 寻找数组的中心下标         | 简单 | [Link](https://leetcode.cn/problems/find-pivot-index/)                                         |
| 1477. 找两个和为目标值且不重叠的子数组 | 中等 | [Link](https://leetcode.cn/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/) |
| 713. 乘积小于 K 的子数组       | 中等 | [Link](https://leetcode.cn/problems/subarray-product-less-than-k/)                             |
| 1352. 最后 K 个数的乘积       | 中等 | [Link](https://leetcode.cn/problems/product-of-the-last-k-numbers/)                            |
| 801. 使序列递增的最小交换次数      | 中等 | [Link](https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/)               |
| 673. 最长递增子序列的个数        | 困难 | [Link](https://leetcode.cn/problems/number-of-longest-increasing-subsequence/)                 |
| 300. 最长递增子序列           | 困难 | [Link](https://leetcode.cn/problems/longest-increasing-subsequence/)                           |
| 1143. 最长公共子序列          | 困难 | [Link](https://leetcode.cn/problems/longest-common-subsequence/)                               |
| 115. 不同的子序列            | 困难 | [Link](https://leetcode.cn/problems/distinct-subsequences/)                                    |
| 940. 不同的子序列 II         | 困难 | [Link](https://leetcode.cn/problems/distinct-subsequences-ii/)                                 |
| 1425. 带限制的子序列和         | 困难 | [Link](https://leetcode.cn/problems/constrained-subsequence-sum/)                              |
| 121. 买卖股票的最佳时机         | 简单 | [Link](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)                          |
| 122. 买卖股票的最佳时机 II      | 中等 | [Link](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)                       |
| 309. 买卖股票的最佳时机含冷冻期     | 中等 | [Link](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)            |
| 714. 买卖股票的最佳时机含手续费     | 中等 | [Link](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)     |
| 123. 买卖股票的最佳时机 III     | 困难 | [Link](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)                      |
| 188. 买卖股票的最佳时机 IV      | 困难 | [Link](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)                       |
| 873. 最长的斐波那契子序列的长度     | 简单 | [Link](https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/)                  |
| 1027. 最长等差数列           | 中等 | [Link](https://leetcode.cn/problems/longest-arithmetic-subsequence/)                           |
| 1055. 组成字符串的最短路径       | 中等 | [无](https://leetcode.cn/problems/shortest-way-to-form-string/)                                 |
| 368. 最大整除子集            | 中等 | [Link](https://leetcode.cn/problems/largest-divisible-subset/)                                 |
| 413. 等差数列划分            | 中等 | [Link](https://leetcode.cn/problems/arithmetic-slices/)                                        |
| 91. 解码方法               | 中等 | [Link](https://leetcode.cn/problems/decode-ways/)                                              |
| 639. 解码方法 II           | 困难 | [Link](https://leetcode.cn/problems/decode-ways-ii/)                                           |
| 338. 比特位计数             | 中等 | [Link](https://leetcode.cn/problems/counting-bits/)                                            |
| 801. 使序列递增的最小交换次数      | 中等 | [Link](https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/)               |
| 583. 两个字符串的删除操作        | 中等 | [Link](https://leetcode.cn/problems/delete-operation-for-two-strings/)                         |
| 32. 最长有效括号             | 困难 | [Link](https://leetcode.cn/problems/longest-valid-parentheses/)                                |
| 132. 分割回文串 II          | 困难 | [Link](https://leetcode.cn/problems/palindrome-partitioning-ii/)                               |
| 871. 最低加油次数            | 困难 | [Link](https://leetcode.cn/problems/minimum-number-of-refueling-stops/)                        |
| 818. 赛车                | 困难 | [Link](https://leetcode.cn/problems/race-car/)                                                 |
| 120. 三角形最小路径和          | 中等 | [Link](https://leetcode.cn/problems/triangle/)                                                 |
| 64. 最小路径和              | 中等 | [Link](https://leetcode.cn/problems/minimum-path-sum/)                                         |
| 221. 最大正方形             | 中等 | [Link](https://leetcode.cn/problems/maximal-square/)                                           |
| 931. 下降路径最小和           | 中等 | [Link](https://leetcode.cn/problems/minimum-falling-path-sum/)                                 |
| 343. 整数拆分              | 中等 | [Link](https://leetcode.cn/problems/integer-break/)                                            |
| 85. 最大矩形               | 困难 | [Link](https://leetcode.cn/problems/maximal-rectangle/)                                        |
| 363. 矩形区域不超过 K 的最大数值和  | 困难 | [Link](https://leetcode.cn/problems/max-sum-of-rectangle-no-larger-than-k/)                    |

### 区间问题

除了线性问题以外，还有一种特别容易在技术面试环节考察的题目类型：区间类型问题。

| 题目                     | 难度 | 题目链接                                                                                      |
|:-----------------------|:---|:------------------------------------------------------------------------------------------|
| 5. 最长回文子串              | 简单 | [Link](https://leetcode.cn/problems/longest-palindromic-substring/)                       |
| 647. 回文子串的个数           | 一般 | [Link](https://leetcode.cn/problems/palindromic-substrings/)                              |
| 1000. 合并石头的最低成本        | 一般 | [Link](https://leetcode.cn/problems/minimum-cost-to-merge-stones/)                        |
| 516. 最长回文子序列           | 困难 | [Link](https://leetcode.cn/problems/longest-palindromic-subsequence/)                     |
| 1147. 段式回文             | 困难 | [Link](https://leetcode.cn/problems/longest-chunked-palindrome-decomposition/)            |
| 730. 统计不同回文子序列的个数      | 困难 | [Link](https://leetcode.cn/problems/count-different-palindromic-subsequences/)            |
| 1312. 让字符串成为回文串的最少插入次数 | 困难 | [Link](https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/) |
| 312. 戳气球               | 困难 | [Link](https://leetcode.cn/problems/burst-balloons/)                                      |
| 546. 移除盒子              | 困难 | [Link](https://leetcode.cn/problems/remove-boxes/)                                        |
| 1039. 多边形三角剖分的最低得分     | 困难 | [Link](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/)              |

### 背包问题

| 题目                 | 难度 | 题目链接                                                             |
|:-------------------|:---|:-----------------------------------------------------------------|
| 322. 零钱兑换          | 简单 | [Link](https://leetcode.cn/problems/coin-change/)                |
| 518. 零钱兑换 II       | 简单 | [Link](https://leetcode.cn/problems/coin-change-ii/)             |
| 1049. 最后一块石头的重量 II | 中等 | [Link](https://leetcode.cn/problems/last-stone-weight-ii/)       |
| 474. 一和零           | 中等 | [Link](https://leetcode.cn/problems/ones-and-zeroes/)            |
| 494. 目标和           | 中等 | [Link](https://leetcode.cn/problems/target-sum/)                 |
| 377. 组合总和 Ⅳ        | 中等 | [Link](https://leetcode.cn/problems/combination-sum-iv/)         |
| 416. 分割等和子集        | 中等 | [Link](https://leetcode.cn/problems/partition-equal-subset-sum/) |
| 879. 盈利计划          | 困难 | [Link](https://leetcode.cn/problems/profitable-schemes/)         |

### 方案总数问题

| 题目                 | 难度 | 题目链接                                                                       |
|:-------------------|:---|:---------------------------------------------------------------------------|
| 62. 不同路径           | 中等 | [Link](https://leetcode.cn/problems/unique-paths/)                         |
| 63. 不同路径 II        | 中等 | [Link](https://leetcode.cn/problems/unique-paths-ii/)                      |
| 96. 不同的二叉搜索树       | 中等 | [Link](https://leetcode.cn/problems/unique-binary-search-trees/)           |
| 95. 不同的二叉搜索树 II    | 中等 | [Link](https://leetcode.cn/problems/unique-binary-search-trees-ii/)        |
| 1155. 掷骰子等于目标和的方法数 | 中等 | [Link](https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/) |
| 940. 不同的子序列 II     | 困难 | [Link](https://leetcode.cn/problems/distinct-subsequences-ii/)             |

### 复杂问题

| 题目                 | 难度 | 题目链接                                                                                 |
|:-------------------|:---|:-------------------------------------------------------------------------------------|
| 887. 鸡蛋掉落          | 困难 | [Link](https://leetcode.cn/problems/super-egg-drop/)                                 |
| 1067.范围内的数字计数      | 困难 | [无](https://leetcode.cn/problems/digit-count-in-range/)                              |
| 600. 不含连续1的非负整数    | 困难 | [Link](https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones/) |
| 1012. 至少有 1 位重复的数字 | 困难 | [Link](https://leetcode.cn/problems/numbers-with-repeated-digits/)                   |

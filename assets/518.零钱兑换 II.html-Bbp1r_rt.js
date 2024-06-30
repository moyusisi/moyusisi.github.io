import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as o}from"./app-ZaGLpo4p.js";const l={},e=o(`<p><a href="https://leetcode.cn/problems/coin-change/" target="_blank" rel="noopener noreferrer">力扣题目链接</a></p><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>给你一个整数数组 <code>coins</code> 表示不同面额的硬币，以及一个整数 <code>amount</code> 表示总金额。</p><p>请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。</p><p>假设每一种面额的硬币有无限个。</p><p>题目数据保证结果符合 32 位带符号整数。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：amount = 5, coins = [1, 2, 5] 输出：4 解释：有四种方式可以凑成总金额： 5=5 5=2+2+1 5=2+1+1+1 5=1+1+1+1+1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：amount = 3, coins = [2] 输出：0 解释：只用面额 2 的硬币不能凑成总金额 3 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：amount = 10, coins = [10] 输出：1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>coins</code>中的所有值<strong>互不相同</strong></li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><ol><li>确定dp数组及下标含义</li></ol><p>用数组<code>dp[j]</code>表示凑出总金额<code>j</code>的硬币组合数。</p><ol start="2"><li>递推公式</li></ol><p>数组中的每个硬币，都可能采用也可能不采用, 采用某个硬币可记为<code>coins[i]</code>。<br><code>j - coins[i]</code>所需的硬币最少数量为<code>dp[j - coins[i]]</code>, 在此基础上再加上一个硬币<code>coins[i]</code>即<code>dp[j - coins[i]] + 1</code> 就可以得到<code>dp[j]</code>。<br> 但是采用的<code>coins[i]</code>具体为哪个，需要遍历每个元素，求最小值。</p><p>所以递推公式为：<code>dp[j] = min(dp[j - coins[i]] + 1)</code></p><ol start="3"><li>dp数组初始化</li></ol><p>当要凑出的金额为0时，很明显<code>dp[0] = 0</code>。<br> 数组中的其他元素初始值该为多少？我们要求的是最小值，所以可以初始化一个比较大的值表示无穷大，在比较过程中会把大值淘汰掉。<br> 多大合适呢？最好的办法为<code>j + 1</code>，因为要凑出<code>j</code>，不可能用<code>j + 1</code>个硬币。<br> 所以初始化<code>dp[j] = j + 1</code></p><ol start="4"><li>确定遍历顺序</li></ol><p>本题求最小个数，有无顺序都不影响最小个数。 外层循环遍历dp，问题规模从小到大；内层循环遍历数组，遍历每个元素求最小值。</p><h2 id="算法描述" tabindex="-1"><a class="header-anchor" href="#算法描述"><span>算法描述</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.util.Arrays;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> int</span><span style="color:#B392F0;"> coinChange</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">coins</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#FFAB70;"> amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 定义dp数组</span></span>
<span class="line"><span style="color:#F97583;">        int</span><span style="color:#E1E4E8;">[] dp </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#F97583;"> int</span><span style="color:#E1E4E8;">[amount </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#6A737D;">        // 初始化dp数组</span></span>
<span class="line"><span style="color:#E1E4E8;">        dp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> dp.length; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            dp[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#6A737D;">        // 外层遍历背包</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> amount; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">            // 内层遍历物品</span></span>
<span class="line"><span style="color:#F97583;">            for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> coin </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> coins) {</span></span>
<span class="line"><span style="color:#6A737D;">                // 前序有解才可以</span></span>
<span class="line"><span style="color:#F97583;">                if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> coin </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> dp[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> coin] </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> coin </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    dp[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(dp[j], dp[j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> coin] </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#6A737D;">        // dp[amount] = amount + 1 表示无解</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> dp[amount] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> amount </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> ?</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;"> :</span><span style="color:#E1E4E8;"> dp[amount];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),p=[e];function t(c,r){return a(),n("div",null,p)}const E=s(l,[["render",t],["__file","518.零钱兑换 II.html.vue"]]),y=JSON.parse('{"path":"/algorithm/leetcode/518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2%20II.html","title":"518.零钱兑换 II","lang":"zh-CN","frontmatter":{"title":"518.零钱兑换 II","date":"2023-12-03T00:00:00.000Z","category":"Algorithm","tag":["LeetCode"],"order":-20231203,"description":"力扣题目链接 题目 给你一个整数数组 coins 表示不同面额的硬币，以及一个整数 amount 表示总金额。 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。 假设每一种面额的硬币有无限个。 题目数据保证结果符合 32 位带符号整数。 示例 1： 输入：amount = 5, coins = [1, 2, 5]...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/algorithm/leetcode/518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2%20II.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"518.零钱兑换 II"}],["meta",{"property":"og:description","content":"力扣题目链接 题目 给你一个整数数组 coins 表示不同面额的硬币，以及一个整数 amount 表示总金额。 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。 假设每一种面额的硬币有无限个。 题目数据保证结果符合 32 位带符号整数。 示例 1： 输入：amount = 5, coins = [1, 2, 5]..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-25T00:38:47.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"LeetCode"}],["meta",{"property":"article:published_time","content":"2023-12-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-25T00:38:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"518.零钱兑换 II\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-25T00:38:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"算法描述","slug":"算法描述","link":"#算法描述","children":[]}],"git":{"createdTime":1719079785000,"updatedTime":1719275927000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"algorithm/leetcode/518.零钱兑换 II.md","localizedDate":"2023年12月3日","excerpt":"","autoDesc":true}');export{E as comp,y as data};

import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as e}from"./app-ZaGLpo4p.js";const l={},o=e(`<h2 id="md5简介" tabindex="-1"><a class="header-anchor" href="#md5简介"><span>MD5简介</span></a></h2><p><code>MD5</code>即<code>Message-Digest Algorithm 5</code>(信息-摘要算法5), 用于确保信息传输完整一致. 是计算机广泛使用的杂凑算法之一(又译摘要算法、哈希算法), 将数据运算为另一固定长度值，是杂凑算法的基础原理，主流编程语言普遍已有MD5实现。<code>MD5</code>的前身有<code>MD2</code>、<code>MD3</code>和<code>MD4</code>。</p><h3 id="md5算法的特点" tabindex="-1"><a class="header-anchor" href="#md5算法的特点"><span>MD5算法的特点</span></a></h3><ol><li>压缩性: 任意长度的数据，算出的MD5值的长度都是固定的</li><li>容易计算: 从原数据计算出MD5值很容易</li><li>抗修改性: 对原数据进行任何改动，修改一个字节生成的MD5值区别也会很大(雪崩效果)</li><li>强抗碰撞: 已知原数据和MD5, 想找到一个具有相同MD5值的数据(即伪造数据)是非常困难的</li></ol><h3 id="md5的作用" tabindex="-1"><a class="header-anchor" href="#md5的作用"><span>MD5的作用</span></a></h3><p>MD5的作用是让大容量信息在用数字签名软件签署私人密钥前被&quot;压缩&quot;成一种保密的格式(就是把一个任意长度的字节串变换成一个定长的十六进制数字串).</p><h3 id="md5的算法原理" tabindex="-1"><a class="header-anchor" href="#md5的算法原理"><span>MD5的算法原理</span></a></h3><p>MD5以512位分组来处理输入的信息, 且每一分组又被划分为16个32位子分组, 经过了一系列的处理后, 算法的输出由四个32位分组组成, 将这四个32位分组级联后将生成一个128位散列值.</p><h3 id="md5的工具类" tabindex="-1"><a class="header-anchor" href="#md5的工具类"><span>MD5的工具类</span></a></h3><p>在java中有很多MD5实现, 其中<code>Guava</code>和<code>JDK</code>都有, 下面是一些例子</p><ul><li>利用<code>Guava</code>中的工具</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">    Hashing.</span><span style="color:#B392F0;">md5</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">newHasher</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">putString</span><span style="color:#E1E4E8;">(source, Charsets.UTF_8).</span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用<code>JDK</code>的工具</li></ul><p>下面这个工具完全是通过<code>JDK</code>实现的, 没有使用第三方工具包</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> MD5Utils</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 对source按UTF_8编码进行md5签名</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#FFAB70;"> source</span><span style="color:#6A737D;"> 待签名的原串</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> md5签名值（(32位小写16进制字符串）</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#B392F0;"> encode</span><span style="color:#E1E4E8;">(source, </span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 对source进行md5签名</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#FFAB70;"> source</span><span style="color:#6A737D;">      待签名的原串</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#FFAB70;"> charsetName</span><span style="color:#6A737D;"> 字符编码</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> md5签名值（(32位小写16进制字符串）</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, String </span><span style="color:#FFAB70;">charsetName</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        String resultString </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            // 这里涉及SPI的相关内容</span></span>
<span class="line"><span style="color:#E1E4E8;">            MessageDigest md5 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> MessageDigest.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;MD5&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">            byte</span><span style="color:#E1E4E8;">[] bytes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> md5.</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">(source.</span><span style="color:#B392F0;">getBytes</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">            resultString </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> byteArrayToHexString</span><span style="color:#E1E4E8;">(bytes);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (Exception </span><span style="color:#FFAB70;">exception</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">            throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> RuntimeException</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;MD5签名失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> resultString;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 字节数组转换成16进制字符串</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">byteArrayToHexString</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">bytes</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        StringBuilder sb </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> StringBuilder</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;"> *</span><span style="color:#E1E4E8;"> bytes.length);</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> bytes) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            sb.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(hexDigits[(b </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#79B8FF;"> 4</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0xf</span><span style="color:#E1E4E8;">]).</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(hexDigits[b </span><span style="color:#F97583;">&amp;</span><span style="color:#79B8FF;"> 0xf</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> sb.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#F97583;"> static</span><span style="color:#F97583;"> final</span><span style="color:#F97583;"> char</span><span style="color:#E1E4E8;">[] hexDigits </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;0123456789abcdef&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">toCharArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sha1简介" tabindex="-1"><a class="header-anchor" href="#sha1简介"><span>SHA1简介</span></a></h2><p>SHA是美国国家安全局设计的，由美国国家标准和技术研究院发布的一系列密码散列函数。 安全哈希算法(<code>Secure Hash Algorithm</code>)主要适用于数字签名标准(<code>Digital Signature Standard DSS</code>)里面定义的数字签名算法(<code>Digital Signature Algorithm DSA</code>)。对于长度小于<code>2^64</code>位的消息, SHA1会产生一个160位的消息摘要。</p><h3 id="sha1的特点" tabindex="-1"><a class="header-anchor" href="#sha1的特点"><span>SHA1的特点</span></a></h3><ul><li>不可以从消息摘要中复原信息</li><li>两个不同的消息不会产生同样的消息摘要(会有<code>10^48分之一</code>的机率出现相同的消息摘要, 一般使用时忽略)</li></ul><h3 id="sha1算法流程" tabindex="-1"><a class="header-anchor" href="#sha1算法流程"><span>SHA1算法流程</span></a></h3><p>对于任意长度的明文, <code>SHA1</code>首先对其进行分组, 使得每一组的长度为512位，然后对这些明文分组反复重复处理。</p><p>对于每个明文分组的摘要生成过程如下:</p><ol><li>将512位的明文分组划分为16个子明文分组, 每个子明文分组为32位。</li><li>申请5个32位的链接变量，记为A、B、C、D、E。</li><li>16份子明文分组扩展为80份。</li><li>80份子明文分组进行4轮运算。</li><li>链接变量与初始链接变量进行求和运算。</li><li>链接变量作为下一个明文分组的输入重复进行以上操作。</li><li>最后，5个链接变量里面的数据就是SHA1摘要。</li></ol><h3 id="sha1工具类" tabindex="-1"><a class="header-anchor" href="#sha1工具类"><span>SHA1工具类</span></a></h3><p><code>Guava</code>中同样有<code>SHA1</code>的相关工具, 类似的还有<code>sha256</code>, <code>sha512</code>等散列工具</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">Hashing.</span><span style="color:#B392F0;">sha1</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">newHasher</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">putString</span><span style="color:#E1E4E8;">(source, Charsets.UTF_8).</span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="md5与sha-1的比较" tabindex="-1"><a class="header-anchor" href="#md5与sha-1的比较"><span>MD5与SHA-1的比较</span></a></h2><p><code>MD5</code>与<code>SHA-1</code>都属于哈希散列算法, 都是从<code>MD4</code>发展而来，它们的结构和强度等特性有很多相似之处, 他们的区别主要有下面这些:</p><ul><li>安全性: <code>MD5</code>摘要长度128位(16字节), <code>SHA-1</code>摘要长度160位(20字节)</li><li>速度: <code>SHA1</code>的运算步骤(80步)比<code>MD5</code>(64步)多了16步, 而且SHA1记录单元的长度比MD5多了32位, <code>SHA1</code>速度大约比<code>MD5</code>慢了<code>25％</code></li><li>简易性: 两种方法都是相当的简单，在实现上不需要很复杂的程序或是大量存储空间。总体上来讲, <code>SHA1</code>对每一步骤的操作描述比<code>MD5</code>简单</li></ul><h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接"><span>相关链接</span></a></h2><ul><li><a href="http://blog.csdn.net/woxinfeixiangliudan/article/details/50371932" target="_blank" rel="noopener noreferrer">关于MD5和SHA-1的简单的介绍</a></li><li><a href="https://www.cnblogs.com/scu-cjx/p/6878853.html" target="_blank" rel="noopener noreferrer">SHA1算法原理</a></li></ul>`,31),p=[o];function c(t,r){return n(),a("div",null,p)}const E=s(l,[["render",c],["__file","2017-11-08-MD5与SHA-1简介.html.vue"]]),y=JSON.parse('{"path":"/program/backend/2017-11-08-MD5%E4%B8%8ESHA-1%E7%AE%80%E4%BB%8B.html","title":"MD5与SHA-1简介","lang":"zh-CN","frontmatter":{"title":"MD5与SHA-1简介","date":"2017-11-08T00:00:00.000Z","tag":["MD5","SHA-1"],"order":-20171108,"description":"MD5简介 MD5即Message-Digest Algorithm 5(信息-摘要算法5), 用于确保信息传输完整一致. 是计算机广泛使用的杂凑算法之一(又译摘要算法、哈希算法), 将数据运算为另一固定长度值，是杂凑算法的基础原理，主流编程语言普遍已有MD5实现。MD5的前身有MD2、MD3和MD4。 MD5算法的特点 压缩性: 任意长度的数据，算出...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2017-11-08-MD5%E4%B8%8ESHA-1%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"MD5与SHA-1简介"}],["meta",{"property":"og:description","content":"MD5简介 MD5即Message-Digest Algorithm 5(信息-摘要算法5), 用于确保信息传输完整一致. 是计算机广泛使用的杂凑算法之一(又译摘要算法、哈希算法), 将数据运算为另一固定长度值，是杂凑算法的基础原理，主流编程语言普遍已有MD5实现。MD5的前身有MD2、MD3和MD4。 MD5算法的特点 压缩性: 任意长度的数据，算出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T16:41:59.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"MD5"}],["meta",{"property":"article:tag","content":"SHA-1"}],["meta",{"property":"article:published_time","content":"2017-11-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T16:41:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MD5与SHA-1简介\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-11-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T16:41:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"MD5简介","slug":"md5简介","link":"#md5简介","children":[{"level":3,"title":"MD5算法的特点","slug":"md5算法的特点","link":"#md5算法的特点","children":[]},{"level":3,"title":"MD5的作用","slug":"md5的作用","link":"#md5的作用","children":[]},{"level":3,"title":"MD5的算法原理","slug":"md5的算法原理","link":"#md5的算法原理","children":[]},{"level":3,"title":"MD5的工具类","slug":"md5的工具类","link":"#md5的工具类","children":[]}]},{"level":2,"title":"SHA1简介","slug":"sha1简介","link":"#sha1简介","children":[{"level":3,"title":"SHA1的特点","slug":"sha1的特点","link":"#sha1的特点","children":[]},{"level":3,"title":"SHA1算法流程","slug":"sha1算法流程","link":"#sha1算法流程","children":[]},{"level":3,"title":"SHA1工具类","slug":"sha1工具类","link":"#sha1工具类","children":[]}]},{"level":2,"title":"MD5与SHA-1的比较","slug":"md5与sha-1的比较","link":"#md5与sha-1的比较","children":[]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]}],"git":{"createdTime":1719160919000,"updatedTime":1719160919000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2017-11-08-MD5与SHA-1简介.md","localizedDate":"2017年11月8日","excerpt":"","autoDesc":true}');export{E as comp,y as data};

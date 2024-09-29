import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as l}from"./app-DQnd5bNn.js";const e="/assets/strategy-madrZHSY.png",p={},o=l(`<h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则"><span>设计原则</span></a></h2><ul><li><code>找出应用中可能需要变化之处, 把它们独立出来, 不要和那些不需要变化的代码混在一起</code></li></ul><p>把会变化的部分取出并封装起来, 以便以后可以轻易地改动或扩充此部分, 而不影响不需要变化的其他部分</p><ul><li><code>针对接口编程, 而不是针对实现编程</code></li></ul><p>针对接口编程的真正意思是: 针对超类型(<code>supertype</code>)编程。<br> 接口这个词有多个含义, 既是一个概念, 也<code>Java中的interface</code>, 我们可以在不涉及<code>Java interface</code>的情况下针对接口编程, 关键就在于利用<code>多态</code>。<br> 利用<code>多态</code>可以<code>针对超类型编程</code>, 可以更明确的说成变量的声明类型应该是超类型, 通常是一个抽象类或者一个接口, 这也意味着声明类时不用理会执行时的真正对象类型。 例如, 有一个抽象类<code>Animal</code>, 有两个实现类Dog与Cat继承了<code>Animal</code>:</p><ul><li><code>为了交互对象之间的松耦合设计而努力</code></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 针对实现编程</span></span>
<span class="line"><span style="color:#E1E4E8;">Dog d </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Dog</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">d.</span><span style="color:#B392F0;">bark</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 针对实现(超类型)编程</span></span>
<span class="line"><span style="color:#E1E4E8;">Animal animal </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Dog</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">animal.</span><span style="color:#B392F0;">makeSound</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>多用组合, 少用继承</code></li></ul><p><code>有一个</code>比<code>是一个</code>更好, 组合建立的系统比继承往往具有更大的弹性</p><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式"><span>策略模式</span></a></h2><ul><li>定义</li></ul><blockquote><p>定义了算法族, 分别封装起来, 让他们之间可以相互替换, 此模式让算法的变化独立于使用算法的客户。</p></blockquote><ul><li>类图</li></ul><figure><img src="`+e+`" alt="策略模式" tabindex="0" loading="lazy"><figcaption>策略模式</figcaption></figure><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式"><span>观察者模式</span></a></h2><p>观察者模式需要有一个<code>主题(Subject)</code>和许多<code>观察者(Observer)</code>, Java内置了观察者模式: 类<code>Observable</code>和接口<code>Observer</code></p><ul><li>定义</li></ul><blockquote><p>定义了对象之间的一对多依赖, 这样一来, 当一个对象改变状态时, 它的所有依赖者都会受到通知并自动更新</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 可观察者</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Observable</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#F97583;"> boolean</span><span style="color:#E1E4E8;"> changed </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> Vector&lt;</span><span style="color:#F97583;">Observer</span><span style="color:#E1E4E8;">&gt; obs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 无参构造器, 初始化存放观察者的列表 */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#B392F0;"> Observable</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        obs </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> Vector&lt;&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 添加观察者</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> addObserver</span><span style="color:#E1E4E8;">(Observer </span><span style="color:#FFAB70;">o</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (o </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">            throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NullPointerException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">obs.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(o)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            obs.</span><span style="color:#B392F0;">addElement</span><span style="color:#E1E4E8;">(o);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 删除观察者</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> deleteObserver</span><span style="color:#E1E4E8;">(Observer </span><span style="color:#FFAB70;">o</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        obs.</span><span style="color:#B392F0;">removeElement</span><span style="color:#E1E4E8;">(o);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 变化通知观察者</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> notifyObservers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">        notifyObservers</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 变化通知观察者, 可携带参数</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> notifyObservers</span><span style="color:#E1E4E8;">(Object </span><span style="color:#FFAB70;">arg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">        /*</span></span>
<span class="line"><span style="color:#6A737D;">         * 用于存放当前观察者的快照</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#F97583;">        Object</span><span style="color:#E1E4E8;">[] arrLocal;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">        synchronized</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">             // 无变化则不通知</span></span>
<span class="line"><span style="color:#F97583;">            if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">changed)</span></span>
<span class="line"><span style="color:#F97583;">                return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">            /* 使用快照这种方式的极端情况</span></span>
<span class="line"><span style="color:#6A737D;">            * 1) 新添加的观察者可能错过本次通知</span></span>
<span class="line"><span style="color:#6A737D;">            * 2) 新删除的观察者可能会被误通知到</span></span>
<span class="line"><span style="color:#6A737D;">            */</span></span>
<span class="line"><span style="color:#E1E4E8;">            arrLocal </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obs.</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">            // 保存了要通知的观察者之后, 修改变化状态</span></span>
<span class="line"><span style="color:#B392F0;">            clearChanged</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#6A737D;">        // 挨个通知</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arrLocal.length</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            ((Observer)arrLocal[i]).</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, arg);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 删除所有观察者</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> deleteObservers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        obs.</span><span style="color:#B392F0;">removeAllElements</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 标记有数据变化</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    protected</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> setChanged</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        changed </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 清除数据变化标记</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    protected</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> clearChanged</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        changed </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 判断是否有变化</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> boolean</span><span style="color:#B392F0;"> hasChanged</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> changed;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 返回观察者的数量</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#F97583;"> synchronized</span><span style="color:#F97583;"> int</span><span style="color:#B392F0;"> countObservers</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> obs.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 观察者</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> interface</span><span style="color:#B392F0;"> Observer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 被观察的对象变化时, 该方法会被调用</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#F97583;">    void</span><span style="color:#B392F0;"> update</span><span style="color:#E1E4E8;">(Observable </span><span style="color:#FFAB70;">o</span><span style="color:#E1E4E8;">, Object </span><span style="color:#FFAB70;">arg</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),i=[o];function c(r,t){return n(),a("div",null,i)}const v=s(p,[["render",c],["__file","2017-12-30-设计模式一.html.vue"]]),y=JSON.parse('{"path":"/program/spring/2017-12-30-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%80.html","title":"设计模式一","lang":"zh-CN","frontmatter":{"title":"设计模式一","date":"2017-12-30T00:00:00.000Z","category":"Java","order":-20171230,"description":"设计原则 找出应用中可能需要变化之处, 把它们独立出来, 不要和那些不需要变化的代码混在一起 把会变化的部分取出并封装起来, 以便以后可以轻易地改动或扩充此部分, 而不影响不需要变化的其他部分 针对接口编程, 而不是针对实现编程 针对接口编程的真正意思是: 针对超类型(supertype)编程。 接口这个词有多个含义, 既是一个概念, 也Java中的i...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/spring/2017-12-30-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%80.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"设计模式一"}],["meta",{"property":"og:description","content":"设计原则 找出应用中可能需要变化之处, 把它们独立出来, 不要和那些不需要变化的代码混在一起 把会变化的部分取出并封装起来, 以便以后可以轻易地改动或扩充此部分, 而不影响不需要变化的其他部分 针对接口编程, 而不是针对实现编程 针对接口编程的真正意思是: 针对超类型(supertype)编程。 接口这个词有多个含义, 既是一个概念, 也Java中的i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T09:40:25.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:published_time","content":"2017-12-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T09:40:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式一\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-12-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T09:40:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"设计原则","slug":"设计原则","link":"#设计原则","children":[]},{"level":2,"title":"策略模式","slug":"策略模式","link":"#策略模式","children":[]},{"level":2,"title":"观察者模式","slug":"观察者模式","link":"#观察者模式","children":[]}],"git":{"createdTime":1719160919000,"updatedTime":1725874825000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/spring/2017-12-30-设计模式一.md","localizedDate":"2017年12月30日","excerpt":"","autoDesc":true}');export{v as comp,y as data};

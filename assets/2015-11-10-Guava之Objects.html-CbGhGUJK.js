import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,d as n}from"./app-ZaGLpo4p.js";const l={},o=n(`<p><code>Objects</code>在Guava的<code>com.google.common.base</code>包中<br> JDK7已经把Objects收录在了<code>java.util.Objects</code>里, 可以直接用</p><h2 id="equals" tabindex="-1"><a class="header-anchor" href="#equals"><span>equals</span></a></h2><p>看实现代码， 不用担心空指针了</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> static</span><span style="color:#F97583;"> boolean</span><span style="color:#B392F0;"> equals</span><span style="color:#E1E4E8;">(Object a, Object b) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> &amp;&amp;</span><span style="color:#E1E4E8;"> a.</span><span style="color:#B392F0;">equals</span><span style="color:#E1E4E8;">(b));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashcode和hash" tabindex="-1"><a class="header-anchor" href="#hashcode和hash"><span>hashCode和hash</span></a></h2><p>首先<code>hashCode(Object o)</code>不用担心空指针</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> static</span><span style="color:#F97583;"> int</span><span style="color:#B392F0;"> hashCode</span><span style="color:#E1E4E8;">(Object o) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> o </span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;"> null</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> o.</span><span style="color:#B392F0;">hashCode</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还有个<code>hash(Object... values)</code>方法非常好用，可以传多个对象进去得到hash值, 比如可以这样用:<br><code>Objects.hashCode(field1, field2, ..., fieldn)</code><br> 来个例子:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">    Objects.</span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 4066</span></span>
<span class="line"><span style="color:#E1E4E8;">    Objects.</span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 4096</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring"><span>toString</span></a></h2><p>有两个方法<code>toString(Object o)</code>和<code>toString(Object o, String nullDefault)</code>, 代码如下:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 如果传null则返回字符串&quot;null&quot;</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(Object o) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> String.</span><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">(o);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 这个可以自己指定为null时返回什么</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> static</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(Object o, String nullDefault) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (o </span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> o.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> nullDefault;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="requirenonnull" tabindex="-1"><a class="header-anchor" href="#requirenonnull"><span>requireNonNull</span></a></h2><p>还有两个判空方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 直接抛空指针异常</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> static</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;">T</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> T </span><span style="color:#B392F0;">requireNonNull</span><span style="color:#E1E4E8;">(T obj) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NullPointerException</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 可以自定义异常描述</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> static</span><span style="color:#F97583;"> &lt;</span><span style="color:#E1E4E8;">T</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> T </span><span style="color:#B392F0;">requireNonNull</span><span style="color:#E1E4E8;">(T obj, String message) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> NullPointerException</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[o];function p(c,r){return e(),a("div",null,t)}const u=s(l,[["render",p],["__file","2015-11-10-Guava之Objects.html.vue"]]),E=JSON.parse('{"path":"/program/backend/2015-11-10-Guava%E4%B9%8BObjects.html","title":"Guava之Objects","lang":"zh-CN","frontmatter":{"title":"Guava之Objects","date":"2015-11-10T00:00:00.000Z","category":"Java","tag":["Guava"],"order":-20151110,"description":"Objects在Guava的com.google.common.base包中 JDK7已经把Objects收录在了java.util.Objects里, 可以直接用 equals 看实现代码， 不用担心空指针了 hashCode和hash 首先hashCode(Object o)不用担心空指针 另外还有个hash(Object... values)方法...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2015-11-10-Guava%E4%B9%8BObjects.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"Guava之Objects"}],["meta",{"property":"og:description","content":"Objects在Guava的com.google.common.base包中 JDK7已经把Objects收录在了java.util.Objects里, 可以直接用 equals 看实现代码， 不用担心空指针了 hashCode和hash 首先hashCode(Object o)不用担心空指针 另外还有个hash(Object... values)方法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T15:13:58.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"Guava"}],["meta",{"property":"article:published_time","content":"2015-11-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T15:13:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Guava之Objects\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-11-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T15:13:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"equals","slug":"equals","link":"#equals","children":[]},{"level":2,"title":"hashCode和hash","slug":"hashcode和hash","link":"#hashcode和hash","children":[]},{"level":2,"title":"toString","slug":"tostring","link":"#tostring","children":[]},{"level":2,"title":"requireNonNull","slug":"requirenonnull","link":"#requirenonnull","children":[]}],"git":{"createdTime":1719155638000,"updatedTime":1719155638000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2015-11-10-Guava之Objects.md","localizedDate":"2015年11月10日","excerpt":"","autoDesc":true}');export{u as comp,E as data};

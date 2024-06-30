import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as d,d as l}from"./app-ZaGLpo4p.js";const o={},a=l(`<p>CSS 选择器用法收集整理, 参考<a href="http://www.w3.org/TR/css3-selectors/#selectors" target="_blank" rel="noopener noreferrer">文档</a></p><h2 id="常见的选择器" tabindex="-1"><a class="header-anchor" href="#常见的选择器"><span>常见的选择器</span></a></h2><table><thead><tr><th>选择器</th><th>说明</th></tr></thead><tbody><tr><td><code>*</code></td><td>用于所有元素, 少用, 很慢</td></tr><tr><td><code>.X</code></td><td>class选择器, <code>class=&quot;X&quot;</code></td></tr><tr><td><code>#X</code></td><td>id选择器, <code>id=&quot;X&quot;</code></td></tr><tr><td><code>X</code></td><td>标签选择器, 用语渲染html标签</td></tr></tbody></table><h2 id="xy" tabindex="-1"><a class="header-anchor" href="#xy"><span><code>XY</code></span></a></h2><p>组合选择器, 会有下面这几种:</p><table><thead><tr><th>选择器</th><th>说明</th></tr></thead><tbody><tr><td><code>X.Y</code></td><td><code>class=&quot;Y&quot;</code>的元素</td></tr><tr><td><code>X#Y</code></td><td><code>id=&quot;Y&quot;</code>的元素</td></tr><tr><td><code>#X.Y</code></td><td><code>id=&quot;X&quot; class=&quot;Y&quot;</code>的元素</td></tr><tr><td><code>.X#Y</code></td><td><code>class=&quot;X&quot; id=&quot;Y&quot;</code>的元素, 跟上面一样</td></tr></tbody></table><h2 id="x-y-z" tabindex="-1"><a class="header-anchor" href="#x-y-z"><span><code>X, Y, Z</code></span></a></h2><p>批量选择器, 即多个选择器用 <code>,</code> 隔开，中间有无空格都可以，表示适用于每个被隔开的选择器</p><h2 id="x-y" tabindex="-1"><a class="header-anchor" href="#x-y"><span><code>X Y</code></span></a></h2><p>后代选择器(中间用空格隔开), 选取 <code>X</code> 元素内的所有 <code>Y</code> 元素</p><h2 id="x-y-1" tabindex="-1"><a class="header-anchor" href="#x-y-1"><span><code>X &gt; Y</code></span></a></h2><p>子元素选择器(直接后代选择器), 选取 <code>X</code> 元素内的所有 <strong>直接出现</strong> 的<code>Y</code> 元素 相当于所有第一代子元素，而第二代子元素不会选中</p><h2 id="x-y-2" tabindex="-1"><a class="header-anchor" href="#x-y-2"><span><code>X + Y</code></span></a></h2><p>临近选择器, 选取<strong>紧邻</strong>着 <code>X</code> 元素后面出现的<strong>第一个</strong> <code>Y</code> 元素<br><code>X</code>和<code>Y</code>必须是同级且中间不隔着其他元素，否则不会选中</p><h2 id="x-y-3" tabindex="-1"><a class="header-anchor" href="#x-y-3"><span><code>X ~ Y</code></span></a></h2><p>也是临近选择器, 选取 <code>X</code> 元素后面出现的<strong>所有与<code>X</code>同级</strong>的 <code>Y</code> 元素</p><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器"><span>属性选择器</span></a></h2><table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>X[foo]</code></td><td style="text-align:left;">选取具有属性<code>foo</code>的<code>X</code>元素</td></tr><tr><td style="text-align:left;"><code>X[foo=&quot;bar&quot;]</code></td><td style="text-align:left;">选取具有属性<code>foo</code>且属性值为<code>bar</code>的<code>X</code>元素</td></tr><tr><td style="text-align:left;"><code>X[foo*=&quot;bar&quot;]</code></td><td style="text-align:left;"><code>X</code>元素的&#39;foo&#39;属性值中包含子串&#39;bar&#39;即可</td></tr><tr><td style="text-align:left;"><code>X[foo^=&quot;bar&quot;]</code></td><td style="text-align:left;"><code>X</code>元素的&#39;foo&#39;属性值必须以<code>bar</code>开头</td></tr><tr><td style="text-align:left;"><code>X[foo$=&quot;bar&quot;]</code></td><td style="text-align:left;"><code>X</code>元素的&#39;foo&#39;属性值必须以<code>bar</code>结尾</td></tr><tr><td style="text-align:left;"><code>X[foo~=&quot;bar&quot;]</code></td><td style="text-align:left;"><code>X</code>元素的有个&#39;foo&#39;属性, 属性值是空白隔开的值列表, 值列表中有一个是<code>bar</code>即可</td></tr></tbody></table><h2 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器"><span>伪类选择器</span></a></h2><table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:left;">示例</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>X:link</code></td><td style="text-align:left;"><code>a:link</code></td><td style="text-align:left;">未点击过的链接</td></tr><tr><td style="text-align:left;"><code>X:visited</code></td><td style="text-align:left;"><code>a:visited</code></td><td style="text-align:left;">已访问过的链接</td></tr><tr><td style="text-align:left;"><code>X:active</code></td><td style="text-align:left;"><code>button:active</code></td><td style="text-align:left;">获取到用户焦点时</td></tr><tr><td style="text-align:left;"><code>X:hover</code></td><td style="text-align:left;"><code>div:hover</code></td><td style="text-align:left;">鼠标移到元素上面时</td></tr><tr><td style="text-align:left;"><code>X:checked</code></td><td style="text-align:left;"><code>input[type=radio]:checked</code></td><td style="text-align:left;">被选中的元素单选框、复选框等</td></tr><tr><td style="text-align:left;"><code>X:not(Y)</code></td><td style="text-align:left;"><code>div:not(#container)</code></td><td style="text-align:left;">除 <code>#contaienr</code> 外的所有 <code>div</code> 元素</td></tr></tbody></table><h2 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器"><span>结构伪类选择器</span></a></h2><table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>X:nth-child(n)</code></td><td style="text-align:left;"><code>X</code>元素且是父元素的第n个子元素</td></tr><tr><td style="text-align:left;"><code>X:nth-last-child(n)</code></td><td style="text-align:left;"><code>X</code>元素且是父元素的倒数第n个子元素</td></tr><tr><td style="text-align:left;"><code>X:nth-of-type(n)</code></td><td style="text-align:left;">第n个兄弟<code>X</code>元素</td></tr><tr><td style="text-align:left;"><code>X:nth-last-of-type(n)</code></td><td style="text-align:left;">倒数第n个兄弟<code>X</code>元素</td></tr><tr><td style="text-align:left;"><code>X:first-child</code></td><td style="text-align:left;"><code>X</code>元素且是父元素的第1个子元素</td></tr><tr><td style="text-align:left;"><code>X:last-child</code></td><td style="text-align:left;"><code>X</code>元素且是父元素的倒数第1个子元素</td></tr><tr><td style="text-align:left;"><code>X:first-of-type</code></td><td style="text-align:left;"><code>X</code>兄弟元素中的第1个</td></tr><tr><td style="text-align:left;"><code>X:last-of-type</code></td><td style="text-align:left;"><code>X</code>兄弟元素中的倒数第1个</td></tr><tr><td style="text-align:left;"><code>X:only-child</code></td><td style="text-align:left;"><code>X</code>元素且是父元素的唯一一个子元素</td></tr><tr><td style="text-align:left;"><code>X:only-of-type</code></td><td style="text-align:left;"><code>X</code>兄弟元素中的唯一一个(即同级别中就一个<code>X</code>)</td></tr></tbody></table><p>最常用的方式是这样的:</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#85E89D;">tbody</span><span style="color:#85E89D;"> tr</span><span style="color:#B392F0;">:nth-of-type</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">odd</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">/* 奇数行 */</span></span>
<span class="line"><span style="color:#85E89D;">tbody</span><span style="color:#85E89D;"> tr</span><span style="color:#B392F0;">:nth-of-type</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">even</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">/* 偶数行 */</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器"><span>伪元素选择器</span></a></h2><p>只对块级元素生效</p><table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:left;">示例</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>X::first-line</code></td><td style="text-align:left;"><code>p::first-line</code></td><td style="text-align:left;">第一行</td></tr><tr><td style="text-align:left;"><code>X::first-letter</code></td><td style="text-align:left;"><code>p::first-letter</code></td><td style="text-align:left;">第一个字母</td></tr><tr><td style="text-align:left;"><code>X::before</code></td><td style="text-align:left;"></td><td style="text-align:left;">在<code>X</code>元素之前声称某些内容</td></tr><tr><td style="text-align:left;"><code>X::after</code></td><td style="text-align:left;"></td><td style="text-align:left;">在<code>X</code>元素之后声称某些内容</td></tr></tbody></table>`,27),c=[a];function n(s,r){return d(),e("div",null,c)}const h=t(o,[["render",n],["__file","2015-10-22-CSS选择器.html.vue"]]),p=JSON.parse('{"path":"/program/frontend/2015-10-22-CSS%E9%80%89%E6%8B%A9%E5%99%A8.html","title":"CSS选择器","lang":"zh-CN","frontmatter":{"title":"CSS选择器","date":"2015-10-22T00:00:00.000Z","category":"Web","tag":["CSS"],"order":-20151022,"description":"CSS 选择器用法收集整理, 参考文档 常见的选择器 XY 组合选择器, 会有下面这几种: X, Y, Z 批量选择器, 即多个选择器用 , 隔开，中间有无空格都可以，表示适用于每个被隔开的选择器 X Y 后代选择器(中间用空格隔开), 选取 X 元素内的所有 Y 元素 X > Y 子元素选择器(直接后代选择器), 选取 X 元素内的所有 直接出现 的...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/frontend/2015-10-22-CSS%E9%80%89%E6%8B%A9%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"CSS选择器"}],["meta",{"property":"og:description","content":"CSS 选择器用法收集整理, 参考文档 常见的选择器 XY 组合选择器, 会有下面这几种: X, Y, Z 批量选择器, 即多个选择器用 , 隔开，中间有无空格都可以，表示适用于每个被隔开的选择器 X Y 后代选择器(中间用空格隔开), 选取 X 元素内的所有 Y 元素 X > Y 子元素选择器(直接后代选择器), 选取 X 元素内的所有 直接出现 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:41:23.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:published_time","content":"2015-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:41:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS选择器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T14:41:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"常见的选择器","slug":"常见的选择器","link":"#常见的选择器","children":[]},{"level":2,"title":"XY","slug":"xy","link":"#xy","children":[]},{"level":2,"title":"X, Y, Z","slug":"x-y-z","link":"#x-y-z","children":[]},{"level":2,"title":"X Y","slug":"x-y","link":"#x-y","children":[]},{"level":2,"title":"X > Y","slug":"x-y-1","link":"#x-y-1","children":[]},{"level":2,"title":"X + Y","slug":"x-y-2","link":"#x-y-2","children":[]},{"level":2,"title":"X ~ Y","slug":"x-y-3","link":"#x-y-3","children":[]},{"level":2,"title":"属性选择器","slug":"属性选择器","link":"#属性选择器","children":[]},{"level":2,"title":"伪类选择器","slug":"伪类选择器","link":"#伪类选择器","children":[]},{"level":2,"title":"结构伪类选择器","slug":"结构伪类选择器","link":"#结构伪类选择器","children":[]},{"level":2,"title":"伪元素选择器","slug":"伪元素选择器","link":"#伪元素选择器","children":[]}],"git":{"createdTime":1719153683000,"updatedTime":1719153683000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/frontend/2015-10-22-CSS选择器.md","localizedDate":"2015年10月22日","excerpt":"","autoDesc":true}');export{h as comp,p as data};

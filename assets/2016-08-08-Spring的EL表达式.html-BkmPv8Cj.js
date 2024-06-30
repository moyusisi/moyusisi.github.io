import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as e}from"./app-ZaGLpo4p.js";const l={},o=e(`<p>在学习Spring的EL表达式时参考了<a href="http://iyiguo.net/blog/2011/06/19/spring-expression-language/" target="_blank" rel="noopener noreferrer">这篇文章</a></p><h2 id="spel简介" tabindex="-1"><a class="header-anchor" href="#spel简介"><span>SpEL简介</span></a></h2><p>在Spring3中就已经支持EL表达式了, <code>Spring Expression Language(SpEL)</code>是类似于<code>OGNL</code>和<code>JSF EL</code>的表达式语言, 能够在运行时构建复杂表达式, 存取对象属性、调用对象方法等, 而且所有的<code>SpEL</code>都支持<code>XML</code>和<code>Annotation</code>两种方式, 使用的格式均为:<code>#{SpEL expression}</code>. 比如在<code>XML</code>中使用的例子:</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">bean</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;helloBean&quot;</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;com.***.Hello&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">property</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#B392F0;"> value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#{otherBean}&quot;</span><span style="color:#E1E4E8;"> /&gt;  </span><span style="color:#6A737D;">&lt;!-- 把otherBean注入到helloBean的item属性中 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">property</span><span style="color:#B392F0;"> name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;itemName&quot;</span><span style="color:#B392F0;"> value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#{otherBean.name}&quot;</span><span style="color:#E1E4E8;"> /&gt; </span><span style="color:#6A737D;">&lt;!-- 把otherBean的name注入到helloBean的itemName属性中 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>Annotation</code>中使用的例子:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Component</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> Test</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Value</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#{&#39;Tom&#39;.toUpperCase()}&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    private</span><span style="color:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子可以看出, 在使用Spring时, 我们已经在不知不觉中使用了<code>SpEL</code>表达式了. 另外我们自己使用<code>SpEL</code>表达式时, 大体可分三个步骤:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 1. 构建解析器</span></span>
<span class="line"><span style="color:#E1E4E8;">ExpressionParser parser </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SpelExpressionParser</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 解析表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">Expression exp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(SpEl);</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 获取结果</span></span>
<span class="line"><span style="color:#E1E4E8;">exp.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是使用<code>SpEL</code>的基本方式, 还有许多功能, 下文将举例列举</p><h2 id="文本表达式" tabindex="-1"><a class="header-anchor" href="#文本表达式"><span>文本表达式</span></a></h2><p>文本表达式支持: 字符串(需要用单引号声明)、日期、数字、布尔类型及<code>null</code>,对数字支持负数、指数及小数, 默认情况下实数使用<code>Double.parseDouble()</code>进行表达式类型转换.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&#39;hello&#39;&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(String.class); </span><span style="color:#6A737D;">// hello , 注意单引号</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1.024E+3&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Long.class);  </span><span style="color:#6A737D;">// 1024  , 指数形式</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;0xFFFF&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Integer.class); </span><span style="color:#6A737D;">// 65535 , 十六进制</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class);   </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;null&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">();                </span><span style="color:#6A737D;">// null</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>变量可以通过<code>StandardEvaluationContext</code>的<code>setVariable</code>方法设置到上下文中, 表达式中可以通过<code>#变量名</code>使用变量;<br> 另外, 还可以直接使用构造方法创建对象.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 定义变量</span></span>
<span class="line"><span style="color:#E1E4E8;">String name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;Tom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">EvaluationContext context </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> StandardEvaluationContext</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 表达式的上下文,</span></span>
<span class="line"><span style="color:#E1E4E8;">context.</span><span style="color:#B392F0;">setVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;myName&quot;</span><span style="color:#E1E4E8;">, name);                        </span><span style="color:#6A737D;">// 为了让表达式可以访问该对象, 先把对象放到上下文中</span></span>
<span class="line"><span style="color:#E1E4E8;">ExpressionParser parser </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SpelExpressionParser</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 访问变量</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#myName&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class);   </span><span style="color:#6A737D;">// Tom , 使用变量</span></span>
<span class="line"><span style="color:#6A737D;">// 直接使用构造方法创建对象</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;new String(&#39;aaa&#39;)&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(String.class);   </span><span style="color:#6A737D;">// aaa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性和方法调用" tabindex="-1"><a class="header-anchor" href="#属性和方法调用"><span>属性和方法调用</span></a></h2><ul><li>属性可直接使用属性名,属性名首字母大小写均可(只有首字母可不区分大小写);</li><li>数组、列表可直接通过下表形式(<code>list[index]</code>)访问;</li><li>map可以直接把key当成索引来访问(<code>map[key]</code>);</li><li>方法可以直接访问;</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 准备工作</span></span>
<span class="line"><span style="color:#E1E4E8;">Person person </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Person</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Tom&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 一个普通的POJO</span></span>
<span class="line"><span style="color:#E1E4E8;">List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Lists.</span><span style="color:#B392F0;">newArrayList</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">Map&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Maps.</span><span style="color:#B392F0;">newHashMap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">EvaluationContext context </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> StandardEvaluationContext</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 表达式的上下文,</span></span>
<span class="line"><span style="color:#E1E4E8;">context.</span><span style="color:#B392F0;">setVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;person&quot;</span><span style="color:#E1E4E8;">, person);                        </span><span style="color:#6A737D;">// 为了让表达式可以访问该对象, 先把对象放到上下文中</span></span>
<span class="line"><span style="color:#E1E4E8;">context.</span><span style="color:#B392F0;">setVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map&quot;</span><span style="color:#E1E4E8;">, map);</span></span>
<span class="line"><span style="color:#E1E4E8;">context.</span><span style="color:#B392F0;">setVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;">, list);</span></span>
<span class="line"><span style="color:#E1E4E8;">ExpressionParser parser </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SpelExpressionParser</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 属性</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#person.name&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class);       </span><span style="color:#6A737D;">// Tom , 属性访问</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#person.Name&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class);       </span><span style="color:#6A737D;">// Tom , 属性访问, 但是首字母大写了</span></span>
<span class="line"><span style="color:#6A737D;">// 列表</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#list[0]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class)           </span><span style="color:#6A737D;">// a , 下标</span></span>
<span class="line"><span style="color:#6A737D;">// map</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#map[A]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class);           </span><span style="color:#6A737D;">// 1 , key</span></span>
<span class="line"><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#person.getAge()&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, Integer.class); </span><span style="color:#6A737D;">// 18 , 方法访问</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外列表可以直接写在表达式中, <code>{}</code>表示一个空列表, 比如:<code>parser.parseExpression(&quot;{&#39;A&#39;, &#39;B&#39;, &#39;C&#39;}[0]&quot;).getValue(String.class)</code>跟上面效果一样, 同样会访问列表的第一个元素, 得到<code>&quot;A&quot;</code></p><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h2><p><code>T</code>操作符可以获取类型, 可以调用对象的静态方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 获取类型</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;T(java.util.Date)&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Class.class); </span><span style="color:#6A737D;">// class java.util.Date</span></span>
<span class="line"><span style="color:#6A737D;">// 访问静态成员(方法或属性)</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;T(Math).abs(-1)&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Integer.class); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6A737D;">// 判断类型</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&#39;asdf&#39; instanceof T(String)&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class); </span><span style="color:#6A737D;">// true;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符"><span>操作符</span></a></h2><p>Spring EL 支持大多数的数学操作符、逻辑操作符、关系操作符.</p><ul><li>关系操作符, 包括: <code>eq(==)</code>, <code>ne(!=)</code>, <code>lt()&lt;</code>, <code>le(&lt;=)</code>, <code>gt(&gt;)</code>, <code>ge(&gt;=)</code></li><li>逻辑运算符, 包括: <code>and(&amp;&amp;)</code>, <code>or(||)</code>, <code>not(!)</code></li><li>数学操作符, 包括: 加(<code>+</code>), 减(<code>-</code>), 乘(<code>*</code>), 除(<code>/</code>), 取模(<code>%</code>), 幂指数(<code>^</code>)</li><li>其他操作符, 如: 三元操作符, <code>instanceof</code>, 赋值(<code>=</code>), 正则匹配</li></ul><p>另外三元操作符有个特殊的用法, 一般用于赋默认值, 比如: <code>parseExpression(&quot;#name?:&#39;defaultName&#39;&quot;)</code>, 如果变量<code>name</code>为空时设置默认值.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1 &gt; -1&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class);         </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1 gt -1&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class);        </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;true or true&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class);   </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;true || true&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class);   </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2 ^ 3&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Integer.class);          </span><span style="color:#6A737D;">// 8</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;true ? true : false&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#name ?: &#39;default&#39;&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class); </span><span style="color:#6A737D;">// default</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1 instanceof T(Integer)&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&#39;5.00&#39; matches &#39;^-?</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">d+(</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">d{2})?$&#39;&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(Boolean.class); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#person.name&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class);  </span><span style="color:#6A737D;">// Tom , 原来的值</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#person.name = &#39;Jim&#39;&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class); </span><span style="color:#6A737D;">// Jim , 赋值之后</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#person.name&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class);  </span><span style="color:#6A737D;">// Jim, 赋值起了作用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="避免空指针" tabindex="-1"><a class="header-anchor" href="#避免空指针"><span>避免空指针</span></a></h2><p>当访问一个对象的属性或方法时, 若该对象为<code>null</code>, 就会出现空指针异常. 安全导航会判断对象是否为<code>null</code>,如果是的话, 就返回<code>null</code>而不是抛出空指针异常. 使用方式就是在对象后面加个<code>?</code>. 如下:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 使用这种表达式可以避免抛出空指针异常</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#name?.toUpperCase()&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context, String.class); </span><span style="color:#6A737D;">// null</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this变量" tabindex="-1"><a class="header-anchor" href="#this变量"><span><code>#this</code>变量</span></a></h2><p>有个特殊的变量<code>#this</code>来表示当前的对象. 常用于集合的过滤</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// this 使用示例</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{1, 3, 5, 7}.?[#this &gt; 3]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [5, 7]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合选择" tabindex="-1"><a class="header-anchor" href="#集合选择"><span>集合选择</span></a></h2><p>可以使用选择表达式对集合进行过滤或一些操作，从而生成一个新的符合选择条件的集合, 有如下一些形式:</p><ul><li><code>?[expression]</code>: 选择符合条件的元素</li><li><code>^[expression]</code>: 选择符合条件的第一个元素</li><li><code>$[expression]</code>: 选择符合条件的最后一个元素</li><li><code>![expression]</code>: 可对集合中的元素挨个进行处理</li></ul><p>对于集合可以配合<code>#this</code>变量进行过滤, 对于map, 可分别对<code>keySet</code>及<code>valueSet</code>分别使用<code>key</code>和<code>value</code>关键字;</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">// 集合</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{1, 3, 5, 7}.?[#this &gt; 3]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [5, 7] , 选择元素</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{1, 3, 5, 7}.^[#this &gt; 3]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 5 , 第一个</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{1, 3, 5, 7}.$[#this &gt; 3]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 7 , 最后一个</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{1, 3, 5, 7}.![#this + 1]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [2, 4, 6, 8] ,每个元素都加1</span></span>
<span class="line"><span style="color:#6A737D;">// map</span></span>
<span class="line"><span style="color:#E1E4E8;">Map&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Maps.</span><span style="color:#B392F0;">newHashMap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;D&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">EvaluationContext context </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> StandardEvaluationContext</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">context.</span><span style="color:#B392F0;">setVariable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;map&quot;</span><span style="color:#E1E4E8;">, map);</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#map.?[key &gt; 3]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context);             </span><span style="color:#6A737D;">// {4=D}</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#map.?[value == &#39;A&#39;]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context);        </span><span style="color:#6A737D;">// {1=A}</span></span>
<span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#map.?[key &gt; 2 and key &lt; 4]&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context); </span><span style="color:#6A737D;">// {3=C}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板表达式" tabindex="-1"><a class="header-anchor" href="#模板表达式"><span>模板表达式</span></a></h2><p>模板表达式允许文字和表达式混合使用, 一般选择使用<code>#{}</code>作为一个定界符:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parseExpression</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;他的名字为#{#person.name}&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> TemplateParserContext</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(context); </span><span style="color:#6A737D;">// 他的名字为Tom</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,41),p=[o];function t(r,c){return n(),a("div",null,p)}const y=s(l,[["render",t],["__file","2016-08-08-Spring的EL表达式.html.vue"]]),d=JSON.parse('{"path":"/program/backend/2016-08-08-Spring%E7%9A%84EL%E8%A1%A8%E8%BE%BE%E5%BC%8F.html","title":"Spring的EL表达式","lang":"zh-CN","frontmatter":{"title":"Spring的EL表达式","date":"2016-08-08T00:00:00.000Z","category":"Spring","tag":["SpringEL"],"order":-20160808,"description":"在学习Spring的EL表达式时参考了这篇文章 SpEL简介 在Spring3中就已经支持EL表达式了, Spring Expression Language(SpEL)是类似于OGNL和JSF EL的表达式语言, 能够在运行时构建复杂表达式, 存取对象属性、调用对象方法等, 而且所有的SpEL都支持XML和Annotation两种方式, 使用的格式均...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2016-08-08-Spring%E7%9A%84EL%E8%A1%A8%E8%BE%BE%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"Spring的EL表达式"}],["meta",{"property":"og:description","content":"在学习Spring的EL表达式时参考了这篇文章 SpEL简介 在Spring3中就已经支持EL表达式了, Spring Expression Language(SpEL)是类似于OGNL和JSF EL的表达式语言, 能够在运行时构建复杂表达式, 存取对象属性、调用对象方法等, 而且所有的SpEL都支持XML和Annotation两种方式, 使用的格式均..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T16:05:57.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"SpringEL"}],["meta",{"property":"article:published_time","content":"2016-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T16:05:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring的EL表达式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T16:05:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"SpEL简介","slug":"spel简介","link":"#spel简介","children":[]},{"level":2,"title":"文本表达式","slug":"文本表达式","link":"#文本表达式","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"属性和方法调用","slug":"属性和方法调用","link":"#属性和方法调用","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"操作符","slug":"操作符","link":"#操作符","children":[]},{"level":2,"title":"避免空指针","slug":"避免空指针","link":"#避免空指针","children":[]},{"level":2,"title":"#this变量","slug":"this变量","link":"#this变量","children":[]},{"level":2,"title":"集合选择","slug":"集合选择","link":"#集合选择","children":[]},{"level":2,"title":"模板表达式","slug":"模板表达式","link":"#模板表达式","children":[]}],"git":{"createdTime":1719158757000,"updatedTime":1719158757000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2016-08-08-Spring的EL表达式.md","localizedDate":"2016年8月8日","excerpt":"","autoDesc":true}');export{y as comp,d as data};

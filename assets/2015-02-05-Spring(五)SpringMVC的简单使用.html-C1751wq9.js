import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,d as l}from"./app-ZaGLpo4p.js";const a={},p=l(`<p><code>SpringMVC</code>是在Spring基础上的一个MVC框架，可以很方便地进行web项目开发。</p><h2 id="传统的servlet" tabindex="-1"><a class="header-anchor" href="#传统的servlet"><span>传统的servlet</span></a></h2><p>传统的Java Web项目是通过<code>Servlet</code>进行控制转发的（其实<code>SpringMVC</code>也是基于<code>servlet</code>的），在不使用其他框架的情况下，一个单纯使用<code>servlet</code>的web项目应该是这样子的：<br> 定义一个类(如<code>LoginServlet</code>)继承<code>HttpServlet</code>，重写其中的<code>doGet</code>方法和<code>doPost</code>方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">//LoginServlet.java</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> LoginServlet</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> HttpServlet</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">    protected</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> doGet</span><span style="color:#E1E4E8;">(HttpServletRequest </span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, HttpServletResponse </span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> ServletException, IOException {</span></span>
<span class="line"><span style="color:#E1E4E8;">        req.</span><span style="color:#B392F0;">getRequestDispatcher</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/login.jsp&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">forward</span><span style="color:#E1E4E8;">(req, resp);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">    protected</span><span style="color:#F97583;"> void</span><span style="color:#B392F0;"> doPost</span><span style="color:#E1E4E8;">(HttpServletRequest </span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, HttpServletResponse </span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> ServletException, IOException {</span></span>
<span class="line"><span style="color:#79B8FF;">        super</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">doPost</span><span style="color:#E1E4E8;">(req, resp);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在web项目的配置文件<code>web.xml</code>中添加servlet的配置：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">servlet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;LoginServlet&lt;/</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">servlet-class</span><span style="color:#E1E4E8;">&gt;com.test.servlet.LoginServlet&lt;/</span><span style="color:#85E89D;">servlet-class</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">servlet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">servlet-mapping</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- 要与之前定义的 servlet-name 一致 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;LoginServlet&lt;/</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- http请求的url --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">url-pattern</span><span style="color:#E1E4E8;">&gt;/login&lt;/</span><span style="color:#85E89D;">url-pattern</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">servlet-mapping</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="springmvc的控制转发" tabindex="-1"><a class="header-anchor" href="#springmvc的控制转发"><span>SpringMVC的控制转发</span></a></h2><p><code>SpringMVC</code>是基于<code>DispatcherServlet</code>的MVC框架，<code>DispatcherServlet</code>的继承关系为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span>HttpServlet &lt;-- HttpServletBean &lt;-- FrameworkServlet &lt;-- DispatcherServlet</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>每一个请求最先访问的都是<code>DispatcherServlet</code>，<code>DispatcherServlet</code>负责转发<code>Request</code>请求给相应的<code>Handler</code>，<code>Handler</code>处理以后再返回相应的视图(View)或模型(Model)或都不返回。<br> 在使用注解的<code>SpringMVC</code>中，处理器<code>Handler</code>是基于<code>@Controller</code>和<code>@RequestMapping</code>这两个注解的，<code>@Controller</code>声明一个处理器类，<code>@RequestMapping</code>声明对应请求的映射关系，这样就可以提供一个非常灵活的匹配和处理方式。</p><h3 id="web配置" tabindex="-1"><a class="header-anchor" href="#web配置"><span>web配置</span></a></h3><p>要想使用<code>SpringMVC</code>，就得在<code>web.xml</code>文件中像配置普通<code>servlet</code>那样对<code>DispatcherServlet</code>进行配置：</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">servlet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;web&lt;/</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">servlet-class</span><span style="color:#E1E4E8;">&gt;org.springframework.web.servlet.DispatcherServlet&lt;/</span><span style="color:#85E89D;">servlet-class</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">init-param</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">param-name</span><span style="color:#E1E4E8;">&gt;contextConfigLocation&lt;/</span><span style="color:#85E89D;">param-name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">param-value</span><span style="color:#E1E4E8;">&gt;classpath*:spring.xml&lt;/</span><span style="color:#85E89D;">param-value</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">init-param</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">servlet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">servlet-mapping</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;web&lt;/</span><span style="color:#85E89D;">servlet-name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">url-pattern</span><span style="color:#E1E4E8;">&gt;/&lt;/</span><span style="color:#85E89D;">url-pattern</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">servlet-mapping</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>servlet</code>配置中直接通过初始化参数设置了<code>contextConfigLocation</code>，这样就会去指定的位置加载spring配置；如果设置的话，则<code>SpringMVC</code>会自动到<code>/WEB-INF</code>目录下寻找一个叫<code>[servlet-name]-servlet.xml</code>的配置文件，像上面的例子就会找<code>/WEB-INF/web-servlet.xml</code>进行加载。</p><ul><li><code>classpath*:spring.xml</code>与<code>classpath:spring.xml</code>的区别</li></ul><p><code>classpath:spring.xml</code>表示仅加载<code>classpath</code>目录下的<code>spring.xml</code><br><code>classpath*:spring.xml</code>表示加载<code>classpath</code>目录及其子目录下，还有jar包中所有名为的<code>spring.xml</code>的文件</p><h3 id="类控制器" tabindex="-1"><a class="header-anchor" href="#类控制器"><span>类控制器</span></a></h3><p>类控制器是真正做事情的<code>Handler</code>，web配置好了之后，来看看处理器类是怎么写的：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">//LoginController.java</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Controller</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">RequestMapping</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/admin&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#F97583;"> class</span><span style="color:#B392F0;"> LoginController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">RequestMapping</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">value</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &quot;/login&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">method</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> RequestMethod.GET)</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">ResponseBody</span></span>
<span class="line"><span style="color:#F97583;">    public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#9ECBFF;"> &quot;login success&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中请求的URL后面的路径为：<code>/admin/login</code>，即方法上的<code>@RequestMapping</code>注解是在类的注解基础上的，如果类上没有<code>@RequestMapping</code>注解，则方法上注解的路径就是绝对路径了。<br> 另外注解<code>@ResponseBody</code>表示直接返回结果，否则，返回的字符串会被当成一个模板文件(如jsp)，具体内容后续文章再说。</p><h3 id="spring的配置" tabindex="-1"><a class="header-anchor" href="#spring的配置"><span>spring的配置</span></a></h3><p>通过web配置，可以把请求转发到我们定义的类控制器中处理，前提是web项目能够找到我们定义的类控制器，这就需要在spring配置文件中来指定。<br> 这里的spring配置跟之前的差不多，无非就是让Spring能够找到我们用<code>@Controller</code>注解的Bean，另外还需要添加<code>&lt;mvc:annotation-driven /&gt;</code>来支持SpringMVC注解</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 支持SpringMVC注解 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mvc:annotation-driven</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 扫描 LoginController 所在的包 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">context:component-scan</span><span style="color:#B392F0;"> base-package</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;com.test.springMVC&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,25),o=[p];function t(r,c){return n(),e("div",null,o)}const E=s(a,[["render",t],["__file","2015-02-05-Spring(五)SpringMVC的简单使用.html.vue"]]),v=JSON.parse('{"path":"/program/backend/2015-02-05-Spring(%E4%BA%94)SpringMVC%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.html","title":"Spring(五): SpringMVC的简单使用","lang":"zh-CN","frontmatter":{"title":"Spring(五): SpringMVC的简单使用","date":"2015-02-05T00:00:00.000Z","category":"Spring","tag":"Spring","order":-20150205,"description":"SpringMVC是在Spring基础上的一个MVC框架，可以很方便地进行web项目开发。 传统的servlet 传统的Java Web项目是通过Servlet进行控制转发的（其实SpringMVC也是基于servlet的），在不使用其他框架的情况下，一个单纯使用servlet的web项目应该是这样子的： 定义一个类(如LoginServlet)继承H...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2015-02-05-Spring(%E4%BA%94)SpringMVC%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"Spring(五): SpringMVC的简单使用"}],["meta",{"property":"og:description","content":"SpringMVC是在Spring基础上的一个MVC框架，可以很方便地进行web项目开发。 传统的servlet 传统的Java Web项目是通过Servlet进行控制转发的（其实SpringMVC也是基于servlet的），在不使用其他框架的情况下，一个单纯使用servlet的web项目应该是这样子的： 定义一个类(如LoginServlet)继承H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:41:23.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2015-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:41:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring(五): SpringMVC的简单使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T14:41:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"传统的servlet","slug":"传统的servlet","link":"#传统的servlet","children":[]},{"level":2,"title":"SpringMVC的控制转发","slug":"springmvc的控制转发","link":"#springmvc的控制转发","children":[{"level":3,"title":"web配置","slug":"web配置","link":"#web配置","children":[]},{"level":3,"title":"类控制器","slug":"类控制器","link":"#类控制器","children":[]},{"level":3,"title":"spring的配置","slug":"spring的配置","link":"#spring的配置","children":[]}]}],"git":{"createdTime":1719153683000,"updatedTime":1719153683000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2015-02-05-Spring(五)SpringMVC的简单使用.md","localizedDate":"2015年2月5日","excerpt":"","autoDesc":true}');export{E as comp,v as data};

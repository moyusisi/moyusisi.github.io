import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as i}from"./app-C1gc-gHM.js";const r={},n=i(`<h2 id="更新homebrew" tabindex="-1"><a class="header-anchor" href="#更新homebrew"><span>更新Homebrew</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装Redis</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="启动redis服务" tabindex="-1"><a class="header-anchor" href="#启动redis服务"><span>启动redis服务</span></a></h2><p>默认端口号为 6379</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;"># 后台启动</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> services</span><span style="color:#9ECBFF;"> start</span><span style="color:#9ECBFF;"> redis</span></span>
<span class="line"><span style="color:#6A737D;"># 前台启动</span></span>
<span class="line"><span style="color:#B392F0;">redis-server</span></span>
<span class="line"><span style="color:#6A737D;"># 重启</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> services</span><span style="color:#9ECBFF;"> restart</span><span style="color:#9ECBFF;"> redis</span></span>
<span class="line"><span style="color:#6A737D;"># 关闭</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#9ECBFF;"> services</span><span style="color:#9ECBFF;"> stop</span><span style="color:#9ECBFF;"> redis</span></span>
<span class="line"><span style="color:#6A737D;"># 命令关闭</span></span>
<span class="line"><span style="color:#B392F0;">redis-cli</span><span style="color:#9ECBFF;"> shutdown</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试redis" tabindex="-1"><a class="header-anchor" href="#测试redis"><span>测试Redis</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">redis-cli</span><span style="color:#9ECBFF;"> ping</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果Redis已正确安装并正在运行，你会看到回复 &quot;PONG&quot;。</p><h2 id="设置redis密码" tabindex="-1"><a class="header-anchor" href="#设置redis密码"><span>设置Redis密码</span></a></h2><p>Redis的配置文件位于<code>/usr/local/etc/redis.conf</code><br> 打开的配置文件，找到<code># requirepass foobared</code>这一行将其修改为：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">requirepass</span><span style="color:#9ECBFF;"> your_password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用redis" tabindex="-1"><a class="header-anchor" href="#使用redis"><span>使用redis</span></a></h2><p>要使用Redis客户端连接到服务器并验证密码，可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">redis-cli</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在Redis命令行提示符下，输入<code>AUTH your_password</code>并按下回车键</p><ul><li>命令行客户端 <a href="https://redis.io/docs/latest/develop/tools/cli/" target="_blank" rel="noopener noreferrer">Redis CLI</a></li></ul>`,18),l=[n];function t(d,o){return s(),a("div",null,l)}const h=e(r,[["render",t],["__file","2024-11-21-MacOS使用HomeBrew安装Redis.html.vue"]]),m=JSON.parse('{"path":"/program/macos/2024-11-21-MacOS%E4%BD%BF%E7%94%A8HomeBrew%E5%AE%89%E8%A3%85Redis.html","title":"MacOS使用HomeBrew安装Redis","lang":"zh-CN","frontmatter":{"title":"MacOS使用HomeBrew安装Redis","date":"2024-11-21T00:00:00.000Z","category":"Mac","tag":["HomeBrew"],"order":-20241121,"description":"更新Homebrew 安装Redis 启动redis服务 默认端口号为 6379 测试Redis 如果Redis已正确安装并正在运行，你会看到回复 \\"PONG\\"。 设置Redis密码 Redis的配置文件位于/usr/local/etc/redis.conf 打开的配置文件，找到# requirepass foobared这一行将其修改为： 使用red...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/macos/2024-11-21-MacOS%E4%BD%BF%E7%94%A8HomeBrew%E5%AE%89%E8%A3%85Redis.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"MacOS使用HomeBrew安装Redis"}],["meta",{"property":"og:description","content":"更新Homebrew 安装Redis 启动redis服务 默认端口号为 6379 测试Redis 如果Redis已正确安装并正在运行，你会看到回复 \\"PONG\\"。 设置Redis密码 Redis的配置文件位于/usr/local/etc/redis.conf 打开的配置文件，找到# requirepass foobared这一行将其修改为： 使用red..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T06:54:25.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"HomeBrew"}],["meta",{"property":"article:published_time","content":"2024-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T06:54:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MacOS使用HomeBrew安装Redis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T06:54:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"更新Homebrew","slug":"更新homebrew","link":"#更新homebrew","children":[]},{"level":2,"title":"安装Redis","slug":"安装redis","link":"#安装redis","children":[]},{"level":2,"title":"启动redis服务","slug":"启动redis服务","link":"#启动redis服务","children":[]},{"level":2,"title":"测试Redis","slug":"测试redis","link":"#测试redis","children":[]},{"level":2,"title":"设置Redis密码","slug":"设置redis密码","link":"#设置redis密码","children":[]},{"level":2,"title":"使用redis","slug":"使用redis","link":"#使用redis","children":[]}],"git":{"createdTime":1732172065000,"updatedTime":1732172065000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/macos/2024-11-21-MacOS使用HomeBrew安装Redis.md","localizedDate":"2024年11月21日","excerpt":"","autoDesc":true}');export{h as comp,m as data};

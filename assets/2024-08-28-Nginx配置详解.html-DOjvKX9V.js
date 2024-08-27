import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as l}from"./app-C2hPYPQ7.js";const e={},p=l(`<p>Nginx是一款轻量级的高性能的Web服务器和反向代理服务器，是由俄罗斯的程序设计师开发。 Nginx处理高并发能力十分强大，能经受高负载的考验。</p><h2 id="nginx特点" tabindex="-1"><a class="header-anchor" href="#nginx特点"><span>Nginx特点</span></a></h2><p>由于以下这几点，所以使用Nginx非常火，在互联网项目中广泛应用。</p><ul><li>相较于 Apache具有占有内存少、稳定性高、并发能力强等优势；</li><li>Nginx 使用基于事件驱动架构，使得其可以支持数以百万级别的 TCP 连接；</li><li>高度的模块化、扩展性好、和自由软件许可证、使得第三方模块层出不穷；</li><li>Nginx是一个跨平台服务器，可以运行在 Linux、Windows、Mac OS 等操作系统上。</li></ul><h2 id="nginx目录结构" tabindex="-1"><a class="header-anchor" href="#nginx目录结构"><span>Nginx目录结构</span></a></h2><p>在Linux中，Nginx默认站点目录通常位于<code>/usr/share/nginx/html</code><br> nginx的配置文件通常在<code>/etc/nginx</code>目录下，配置文件名称为<code>nginx.conf</code>。<br><code>nginx.conf.default</code>为nginx的默认配置文件，相当于一个初始文件的备份文件。</p><p>nginx的目录结构及作用如下</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> conf</span><span style="color:#6A737D;">                             # Nginx所有配置文件的目录</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> fastcgi.conf</span><span style="color:#6A737D;">                 # fastcgi相关参数的配置文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> fastcgi.conf.default</span><span style="color:#6A737D;">         # fastcgi.conf的原始备份文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> fastcgi_params</span><span style="color:#6A737D;">               # fastcgi的参数文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> fastcgi_params.default</span><span style="color:#E1E4E8;">       </span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> koi-utf</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> koi-win</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> mime.types</span><span style="color:#6A737D;">                   # 媒体类型</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> mime.types.default</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> nginx.conf</span><span style="color:#6A737D;">                   # Nginx主配置文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> nginx.conf.default</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> scgi_params</span><span style="color:#6A737D;">                  # scgi相关参数文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> scgi_params.default</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> uwsgi_params</span><span style="color:#6A737D;">                 # uwsgi相关参数文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> uwsgi_params.default</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   └──</span><span style="color:#9ECBFF;"> win-utf</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> fastcgi_temp</span><span style="color:#6A737D;">                     # fastcgi临时数据目录</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> html</span><span style="color:#6A737D;">                             # Nginx默认站点目录</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> 50x.html</span><span style="color:#6A737D;">                     # 错误页面优雅替代显示文件，例如当出现502错误时会调用此页面</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   └──</span><span style="color:#9ECBFF;"> index.html</span><span style="color:#6A737D;">                   # 默认的首页文件</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> logs</span><span style="color:#6A737D;">                             # Nginx日志目录</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> access.log</span><span style="color:#6A737D;">                   # 访问日志文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> error.log</span><span style="color:#6A737D;">                    # 错误日志文件</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   └──</span><span style="color:#9ECBFF;"> nginx.pid</span><span style="color:#6A737D;">                    # pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> proxy_temp</span><span style="color:#6A737D;">                       # 临时目录</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> sbin</span><span style="color:#6A737D;">                             # Nginx命令目录</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   └──</span><span style="color:#9ECBFF;"> nginx</span><span style="color:#6A737D;">                        # Nginx的启动命令</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> scgi_temp</span><span style="color:#6A737D;">                        # 临时目录</span></span>
<span class="line"><span style="color:#B392F0;">└──</span><span style="color:#9ECBFF;"> uwsgi_temp</span><span style="color:#6A737D;">                       # 临时目录</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置文件结构" tabindex="-1"><a class="header-anchor" href="#nginx配置文件结构"><span>Nginx配置文件结构</span></a></h2><p>Nginx配置文件所在位置为：<code>nginx/conf/nginx.conf</code>。其配置文件的内容结构如下</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">main</span><span style="color:#6A737D;">                    # 全局配置，对全局生效</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> events</span><span style="color:#6A737D;">              # 配置影响 nginx 服务器或与用户的网络连接</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#9ECBFF;"> http</span><span style="color:#6A737D;">                # 可以嵌套多个 server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> upstream</span><span style="color:#6A737D;">        # 配置后端服务器具体地址，负载均衡配置不可或缺的部分</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> server</span><span style="color:#6A737D;">          # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> server</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   │</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> location</span><span style="color:#6A737D;">    # server 块可以包含多个 location 块，location 指令用于匹配 uri</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   │</span><span style="color:#9ECBFF;">   ├──</span><span style="color:#9ECBFF;"> location</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   │</span><span style="color:#9ECBFF;">   └──</span><span style="color:#9ECBFF;"> ...</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#9ECBFF;">   └──</span><span style="color:#9ECBFF;"> ...</span></span>
<span class="line"><span style="color:#B392F0;">└──</span><span style="color:#9ECBFF;"> ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置文件详解" tabindex="-1"><a class="header-anchor" href="#nginx配置文件详解"><span>Nginx配置文件详解</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#6A737D;"># nginx进程数，建议设置为等于CPU总核心数。</span></span>
<span class="line"><span style="color:#B392F0;">worker_processes</span><span style="color:#79B8FF;">  1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;"># 事件区块</span></span>
<span class="line"><span style="color:#B392F0;">events</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    # 每个worker进程的最大连接数。一般就保持默认，1024。</span></span>
<span class="line"><span style="color:#B392F0;">    worker_connections</span><span style="color:#79B8FF;">  1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># HTTP区块 设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="color:#B392F0;">http</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    # Nginx支持的媒体类型库文件，默认为nginx.conf同一目录下的mime.types文件。</span></span>
<span class="line"><span style="color:#B392F0;">    include</span><span style="color:#9ECBFF;">       mime.types</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">    # 默认的媒体类型，一般默认即可。application/octet-stream指nginx以8进制数据流的方式将数据返回给浏览器。</span></span>
<span class="line"><span style="color:#B392F0;">    default_type</span><span style="color:#9ECBFF;">  application/octet-stream</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">    # 开启高效传输模式</span></span>
<span class="line"><span style="color:#B392F0;">    sendfile</span><span style="color:#9ECBFF;">        on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">    # 长连接超时时间，单位是秒                              </span></span>
<span class="line"><span style="color:#B392F0;">    keepalive_timeout</span><span style="color:#79B8FF;">  65</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">    # 第一个Server区块开始，表示一个独立的虚拟主机站点（可以配置多个server）</span></span>
<span class="line"><span style="color:#B392F0;">    server</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        # 提供服务的端口，默认80</span></span>
<span class="line"><span style="color:#B392F0;">        listen</span><span style="color:#79B8FF;">       80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">        # 提供服务的域名</span></span>
<span class="line"><span style="color:#B392F0;">        server_name</span><span style="color:#9ECBFF;">  localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">        # 第一个location区块</span></span>
<span class="line"><span style="color:#6A737D;">        # 匹配以什么开头的URI，默认为/，表示匹配所有请求。如配置了/user，那么请求ip:端口/user/xx就会匹配到该路由。</span></span>
<span class="line"><span style="color:#B392F0;">        location</span><span style="color:#9ECBFF;"> /</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            # 指定服务的目录。填写相对路径时的默认根路径为/usr/share/nginx。</span></span>
<span class="line"><span style="color:#B392F0;">            root</span><span style="color:#9ECBFF;">   html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">            # 指定当请求是一个目录时，应该返回哪个文件作为默认的首页文件，多个用空格分开</span></span>
<span class="line"><span style="color:#B392F0;">            index</span><span style="color:#9ECBFF;">  index.html</span><span style="color:#9ECBFF;"> index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">            # 指定请求转发到后端的路径。</span></span>
<span class="line"><span style="color:#B392F0;">            proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8089/test/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#6A737D;">        # 出现对应的http状态码时，使用50x.html回应客户</span></span>
<span class="line"><span style="color:#B392F0;">        error_page</span><span style="color:#79B8FF;">   500</span><span style="color:#79B8FF;"> 502</span><span style="color:#79B8FF;"> 503</span><span style="color:#79B8FF;"> 504</span><span style="color:#9ECBFF;">  /50x.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">        # location区块开始，访问50x.html</span></span>
<span class="line"><span style="color:#B392F0;">        location</span><span style="color:#9ECBFF;"> =</span><span style="color:#9ECBFF;"> /50x.html</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            # 指定对应的站点目录为html</span></span>
<span class="line"><span style="color:#B392F0;">            root</span><span style="color:#9ECBFF;">   html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx代理配置示例" tabindex="-1"><a class="header-anchor" href="#nginx代理配置示例"><span>Nginx代理配置示例</span></a></h2><h3 id="强制http转https" tabindex="-1"><a class="header-anchor" href="#强制http转https"><span>强制http转https</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  listen</span><span style="color:#79B8FF;"> 80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">  server_name</span><span style="color:#9ECBFF;"> test.com</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  # http强制跳转到https</span></span>
<span class="line"><span style="color:#B392F0;">  rewrite</span><span style="color:#9ECBFF;"> ^</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.</span><span style="color:#9ECBFF;">*</span><span style="color:#E1E4E8;">)$ </span><span style="color:#9ECBFF;">https://</span><span style="color:#E1E4E8;">$server_name</span><span style="color:#FFAB70;">$1</span><span style="color:#9ECBFF;"> permanent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端history模式404问题" tabindex="-1"><a class="header-anchor" href="#前端history模式404问题"><span>前端history模式404问题</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">location</span><span style="color:#9ECBFF;"> /</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#9ECBFF;"> /index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="root和alias两种配置静态资源的区别" tabindex="-1"><a class="header-anchor" href="#root和alias两种配置静态资源的区别"><span>root和alias两种配置静态资源的区别</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  listen</span><span style="color:#79B8FF;"> 80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">  server_name</span><span style="color:#9ECBFF;"> localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">  # 用root方式，location中的路径会拼加到root的地址后面</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://localhost:8080/files/index.jpg    实际访问为：/home/files/index.jpg</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ~^/files/</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    root</span><span style="color:#9ECBFF;"> /home/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    index</span><span style="color:#9ECBFF;"> index.html</span><span style="color:#9ECBFF;"> index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  # 用alias方式，location中的路径不会拼加到alias的地址后面</span></span>
<span class="line"><span style="color:#6A737D;">  # 这请求路径为：http://localhost:8080/files/index.jpg    实际访问为：/home/index.jpg</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ~^/files/</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    alias</span><span style="color:#9ECBFF;"> /home/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    index</span><span style="color:#9ECBFF;"> index.html</span><span style="color:#9ECBFF;"> index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后台接口代理配置" tabindex="-1"><a class="header-anchor" href="#后台接口代理配置"><span>后台接口代理配置</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#24292e;color:#e1e4e8;"><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  listen</span><span style="color:#79B8FF;"> 8080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">  server_name</span><span style="color:#9ECBFF;"> localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">#################### 第一种场景（代理地址不加斜杠） ####################</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000/api/getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api/</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host;           </span><span style="color:#6A737D;"># 后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr;    </span><span style="color:#6A737D;"># 后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际指向为：http://127.0.0.1:8000/api/getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host;           </span><span style="color:#6A737D;"># 后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr;    </span><span style="color:#6A737D;"># 后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">#################### 第二种场景（代理地址+斜杠） ####################</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000/getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api/</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host; </span><span style="color:#6A737D;">#后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr; </span><span style="color:#6A737D;">#后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000//getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host; </span><span style="color:#6A737D;">#后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr; </span><span style="color:#6A737D;">#后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">#################### 第三种场景（代理地址+后缀） ####################</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000/user/getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000/user</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host; </span><span style="color:#6A737D;">#后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr; </span><span style="color:#6A737D;">#后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000/usergetUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api/</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000/user</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host; </span><span style="color:#6A737D;">#后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr; </span><span style="color:#6A737D;">#后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">#################### 第四种场景（代理地址+后缀+斜杠） ####################</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000/user/getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api/</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000/user/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host; </span><span style="color:#6A737D;">#后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr; </span><span style="color:#6A737D;">#后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  # 请求路径为：http://127.0.0.1:8080/api/getUser   实际代理为：http://127.0.0.1:8000/user//getUser</span></span>
<span class="line"><span style="color:#B392F0;">  location</span><span style="color:#9ECBFF;"> ^~/api</span><span style="color:#9ECBFF;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_pass</span><span style="color:#9ECBFF;"> http://127.0.0.1:8000/user/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> Host</span><span style="color:#E1E4E8;"> $http_host; </span><span style="color:#6A737D;">#后台可以获取到完整的ip+端口号</span></span>
<span class="line"><span style="color:#B392F0;">    proxy_set_header</span><span style="color:#9ECBFF;"> X-Real-IP</span><span style="color:#E1E4E8;"> $remote_addr; </span><span style="color:#6A737D;">#后台可以获取到用户访问的真实ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[p];function i(c,r){return n(),a("div",null,o)}const y=s(e,[["render",i],["__file","2024-08-28-Nginx配置详解.html.vue"]]),F=JSON.parse('{"path":"/program/ops/linux/2024-08-28-Nginx%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3.html","title":"Nginx配置详解","lang":"zh-CN","frontmatter":{"title":"Nginx配置详解","date":"2024-08-28T00:00:00.000Z","category":"Web","tag":["Nginx"],"order":-20240828,"description":"Nginx是一款轻量级的高性能的Web服务器和反向代理服务器，是由俄罗斯的程序设计师开发。 Nginx处理高并发能力十分强大，能经受高负载的考验。 Nginx特点 由于以下这几点，所以使用Nginx非常火，在互联网项目中广泛应用。 相较于 Apache具有占有内存少、稳定性高、并发能力强等优势； Nginx 使用基于事件驱动架构，使得其可以支持数以百万...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/ops/linux/2024-08-28-Nginx%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"Nginx配置详解"}],["meta",{"property":"og:description","content":"Nginx是一款轻量级的高性能的Web服务器和反向代理服务器，是由俄罗斯的程序设计师开发。 Nginx处理高并发能力十分强大，能经受高负载的考验。 Nginx特点 由于以下这几点，所以使用Nginx非常火，在互联网项目中广泛应用。 相较于 Apache具有占有内存少、稳定性高、并发能力强等优势； Nginx 使用基于事件驱动架构，使得其可以支持数以百万..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-27T12:17:02.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:published_time","content":"2024-08-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-27T12:17:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx配置详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-27T12:17:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"Nginx特点","slug":"nginx特点","link":"#nginx特点","children":[]},{"level":2,"title":"Nginx目录结构","slug":"nginx目录结构","link":"#nginx目录结构","children":[]},{"level":2,"title":"Nginx配置文件结构","slug":"nginx配置文件结构","link":"#nginx配置文件结构","children":[]},{"level":2,"title":"Nginx配置文件详解","slug":"nginx配置文件详解","link":"#nginx配置文件详解","children":[]},{"level":2,"title":"Nginx代理配置示例","slug":"nginx代理配置示例","link":"#nginx代理配置示例","children":[{"level":3,"title":"强制http转https","slug":"强制http转https","link":"#强制http转https","children":[]},{"level":3,"title":"前端history模式404问题","slug":"前端history模式404问题","link":"#前端history模式404问题","children":[]},{"level":3,"title":"root和alias两种配置静态资源的区别","slug":"root和alias两种配置静态资源的区别","link":"#root和alias两种配置静态资源的区别","children":[]},{"level":3,"title":"后台接口代理配置","slug":"后台接口代理配置","link":"#后台接口代理配置","children":[]}]}],"git":{"createdTime":1724761022000,"updatedTime":1724761022000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/ops/linux/2024-08-28-Nginx配置详解.md","localizedDate":"2024年8月28日","excerpt":"","autoDesc":true}');export{y as comp,F as data};

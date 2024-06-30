import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o,d as r}from"./app-ZaGLpo4p.js";const n={},a=r('<p>SpringMVC项目中通过GET方式传递的参数中有中文时, 有可能产生乱码.</p><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2><p>在URL中通过GET方式传递参数, 有中文会乱码, 在<code>web.xml</code>文件中设置了编码过滤器, 但对于GET方式传过来的参数仍然没有作用</p><h2 id="乱码的原因" tabindex="-1"><a class="header-anchor" href="#乱码的原因"><span>乱码的原因</span></a></h2><p>HTTP请求到达Spring的Servlet程序之前, 先经过了Tomcat, 而对于GET方式的URL, Tomcat先做了一次URLDecode. Tomcat对GET方式的URL默认是以iso-8859-1解码, 所以等请求到达我们的程序时, 就已经乱码了.</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>解决办法就是让Tomcat对GET请求解码时, 按照UTF-8解码. 方法是修改Tomcat的配置文件<code>conf/server.xml</code>, 将其中的<br><code>&lt;Connector port=&quot;8080&quot; protocol=&quot;HTTP/1.1&quot; connectionTimeout=&quot;20000&quot; redirectPort=&quot;8443&quot; /&gt;</code><br> 改为:<br><code>&lt;Connector port=&quot;8080&quot; protocol=&quot;HTTP/1.1&quot; connectionTimeout=&quot;20000&quot; redirectPort=&quot;8443&quot; URIEncoding=&quot;UTF-8&quot; /&gt;</code></p>',7),i=[a];function c(p,l){return o(),e("div",null,i)}const s=t(n,[["render",c],["__file","2016-04-11-SpringMVC解决GET参数乱码.html.vue"]]),T=JSON.parse('{"path":"/program/backend/2016-04-11-SpringMVC%E8%A7%A3%E5%86%B3GET%E5%8F%82%E6%95%B0%E4%B9%B1%E7%A0%81.html","title":"SpringMVC解决GET参数乱码","lang":"zh-CN","frontmatter":{"title":"SpringMVC解决GET参数乱码","date":"2016-04-11T00:00:00.000Z","category":"Spring","tag":["Spring"],"order":-20160411,"description":"SpringMVC项目中通过GET方式传递的参数中有中文时, 有可能产生乱码. 问题描述 在URL中通过GET方式传递参数, 有中文会乱码, 在web.xml文件中设置了编码过滤器, 但对于GET方式传过来的参数仍然没有作用 乱码的原因 HTTP请求到达Spring的Servlet程序之前, 先经过了Tomcat, 而对于GET方式的URL, Tomc...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2016-04-11-SpringMVC%E8%A7%A3%E5%86%B3GET%E5%8F%82%E6%95%B0%E4%B9%B1%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"SpringMVC解决GET参数乱码"}],["meta",{"property":"og:description","content":"SpringMVC项目中通过GET方式传递的参数中有中文时, 有可能产生乱码. 问题描述 在URL中通过GET方式传递参数, 有中文会乱码, 在web.xml文件中设置了编码过滤器, 但对于GET方式传过来的参数仍然没有作用 乱码的原因 HTTP请求到达Spring的Servlet程序之前, 先经过了Tomcat, 而对于GET方式的URL, Tomc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T16:05:57.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2016-04-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T16:05:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringMVC解决GET参数乱码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-04-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T16:05:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"乱码的原因","slug":"乱码的原因","link":"#乱码的原因","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1719158757000,"updatedTime":1719158757000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2016-04-11-SpringMVC解决GET参数乱码.md","localizedDate":"2016年4月11日","excerpt":"","autoDesc":true}');export{s as comp,T as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as t,d as a}from"./app-DJRQkAjL.js";const l={},n=a('<p><code>Optional</code>用于处理有可能为<code>null</code>的情况,在Guava的<code>com.google.common.base</code>包中<br><code>Optional</code>是一个抽象类，有两个<code>final</code>的子类:<code>Present</code>和<code>Absent</code><br> 使用的时候直接用<code>Optional</code>即可, 不用关心<code>Present</code>和<code>Absent</code></p><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法"><span>静态方法</span></a></h2><p><code>Optional</code>有三个常用的静态方法:</p><ol><li>Optional.of(T reference): 返回的是一个<code>Present</code>对象, 表示不能为<code>null</code>, 当<code>reference</code>为<code>null</code>时直接抛<code>NullPointerException</code></li><li>Optional.absent(): 返回的是一个<code>final</code>的<code>Absent</code>对象, 表示<code>null</code></li><li>Optional.fromNullable(T nullableReference): 返回的可能是<code>Present</code>或者<code>Absent</code>, 表示对象肯能为<code>null</code>, 即参数为<code>null</code>时等同于<code>absent()</code></li></ol><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h2><ol><li>boolean isPresent( ): Optional包含的T实例不为<code>null</code>，则返回true</li><li>T get( ): 返回包含实例, 若包含的实例为<code>null</code>则抛出<code>IllegalStateException</code>异常</li><li>T or(T defaultValue): <code>a.or(b)</code>a不为null返回a, 否则返回b, b为<code>null</code>时抛出<code>NullPointerException</code></li><li>T orNull( ): <code>a.orNull()</code>a不为null返回a, 否则返回null, 逆操作是<code>fromNullable()</code></li></ol>',6),c=[n];function i(d,r){return o(),t("div",null,c)}const m=e(l,[["render",i],["__file","2015-11-11-Guava之Optional.html.vue"]]),u=JSON.parse('{"path":"/program/backend/2015-11-11-Guava%E4%B9%8BOptional.html","title":"Guava之Optional","lang":"zh-CN","frontmatter":{"title":"Guava之Optional","date":"2015-11-11T00:00:00.000Z","category":"Java","tag":["Guava"],"order":-20151111,"description":"Optional用于处理有可能为null的情况,在Guava的com.google.common.base包中 Optional是一个抽象类，有两个final的子类:Present和Absent 使用的时候直接用Optional即可, 不用关心Present和Absent 静态方法 Optional有三个常用的静态方法: Optional.of(T r...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2015-11-11-Guava%E4%B9%8BOptional.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"Guava之Optional"}],["meta",{"property":"og:description","content":"Optional用于处理有可能为null的情况,在Guava的com.google.common.base包中 Optional是一个抽象类，有两个final的子类:Present和Absent 使用的时候直接用Optional即可, 不用关心Present和Absent 静态方法 Optional有三个常用的静态方法: Optional.of(T r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T15:13:58.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"Guava"}],["meta",{"property":"article:published_time","content":"2015-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T15:13:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Guava之Optional\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T15:13:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"静态方法","slug":"静态方法","link":"#静态方法","children":[]},{"level":2,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[]}],"git":{"createdTime":1719155638000,"updatedTime":1719155638000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2015-11-11-Guava之Optional.md","localizedDate":"2015年11月11日","excerpt":"","autoDesc":true}');export{m as comp,u as data};

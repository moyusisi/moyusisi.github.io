import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,d as c}from"./app-DJRQkAjL.js";const d="/assets/isolation-CwZ6eiZV.png",a={},r=c('<p>在标准的SQL规范中，定义了4个事务隔离级别。</p><figure><img src="'+d+'" alt="隔离级别" tabindex="0" loading="lazy"><figcaption>隔离级别</figcaption></figure><h2 id="未授权读取-ru" tabindex="-1"><a class="header-anchor" href="#未授权读取-ru"><span>未授权读取(RU)</span></a></h2><p>未授权读取也被称作读未提交(<code>Read Uncommitted</code>)，这种隔离级别允许读取未提交的数据，隔离级别最低。<br><code>RU</code>这种隔离级别中，允许<code>脏读</code>, 但不允许出现<code>丢失更新</code>。</p><p><code>丢失更新</code>: 两个事务同时更新统一数据时, 会发生更新丢失。<br><code>脏读</code>: 一个事务读取到另一个事务未提交的修改时, 会产生脏读。如:事务A把一数据从1<code>update</code>成2,<code>update</code>成3直到<code>update</code>成9, 事务B每次<code>select</code>都能看到事务A的中间值(比如2,3或7)，对B来说这些就是脏数据。</p><h2 id="授权读取-rc" tabindex="-1"><a class="header-anchor" href="#授权读取-rc"><span>授权读取(RC)</span></a></h2><p>授权读取也被称为读已提交(<code>Read Committed</code>)，这种隔离级别只允许读取已经被提交的数据。<br><code>RC</code>这种隔离级别中允许出现<code>不可重复读</code>, 但不允许<code>脏读</code></p><p><code>不可重复读</code>: 同一查询在同一事务中多次进行，由于其他提交事务所做的 <strong>修改或删除</strong>，每次返回不同的结果集，这就发生非重复读。 如:事务A操作数据1, 要把它<code>update</code>成9, 事务B第一次<code>select</code>发现是1, 此时事务A提交了, 事务B再次<code>select</code>发现变成了9, 这种现象叫做<code>不可重复读</code>。<br> 它的危害也很明显, 因为B第一次读取的时候是1, 若果要对它进行+1在更新回去, 就会变成2, 但实际上这是不对的。(这里你不能用mysql做实验, 因为mysql不再这个隔离级别, 所以这种情况在mysql中不会发生)</p><h2 id="可重复读取-rr" tabindex="-1"><a class="header-anchor" href="#可重复读取-rr"><span>可重复读取(RR)</span></a></h2><p>可重复读取(Repeatable Read), 这种隔离级别保证在一个事务中，多次读取到的数据都是和事务开始时是一样的。<br><code>RR</code>这种隔离级别允许出现<code>幻读</code>，但不允许<code>不可重复读</code>。</p><p><code>幻读</code>: 同一查询在同一事务中多次进行，由于其他提交事务所做的 <strong>插入</strong> 操作，每次返回不同的结果集，此时发生幻像读。在<code>RR</code>中, 事务B读取到的数据值都是跟事务开始时一致(所以可以重复读), 但若事务A新<code>insert</code>了一条数据, 事务B是可见的, 因此对于事务B来说，开始时没有这个数据，但是过了一会儿却多出来一条数据(数据不一致了)，因此对于事务B来说就很莫名其妙。</p><p>MySql就是在<code>RR</code>隔离级别上的, 但它在此基础上又加了<code>gap</code>锁, 保证了不会出现<code>幻读</code>。其实MySql中并没有区分<code>不可重复读</code>和<code>幻读</code>,MySql统称为<code>幻读</code>并且禁止了<code>幻读</code>现象的出现。</p><h2 id="串行化-s" tabindex="-1"><a class="header-anchor" href="#串行化-s"><span>串行化(S)</span></a></h2><p>串行化(Serializable)是最严格的事务隔离级别，它要求所有的事务都被串行执行。</p>',14),i=[r];function n(p,s){return t(),o("div",null,i)}const h=e(a,[["render",n],["__file","2017-03-03-事务的隔离级别.html.vue"]]),g=JSON.parse('{"path":"/program/backend/2017-03-03-%E4%BA%8B%E5%8A%A1%E7%9A%84%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html","title":"事务的隔离级别","lang":"zh-CN","frontmatter":{"title":"事务的隔离级别","date":"2017-03-03T00:00:00.000Z","category":"MySQL","tag":["MySQL"],"order":-20170303,"description":"在标准的SQL规范中，定义了4个事务隔离级别。 隔离级别隔离级别 未授权读取(RU) 未授权读取也被称作读未提交(Read Uncommitted)，这种隔离级别允许读取未提交的数据，隔离级别最低。 RU这种隔离级别中，允许脏读, 但不允许出现丢失更新。 丢失更新: 两个事务同时更新统一数据时, 会发生更新丢失。 脏读: 一个事务读取到另一个事务未提交...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2017-03-03-%E4%BA%8B%E5%8A%A1%E7%9A%84%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"事务的隔离级别"}],["meta",{"property":"og:description","content":"在标准的SQL规范中，定义了4个事务隔离级别。 隔离级别隔离级别 未授权读取(RU) 未授权读取也被称作读未提交(Read Uncommitted)，这种隔离级别允许读取未提交的数据，隔离级别最低。 RU这种隔离级别中，允许脏读, 但不允许出现丢失更新。 丢失更新: 两个事务同时更新统一数据时, 会发生更新丢失。 脏读: 一个事务读取到另一个事务未提交..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T16:41:59.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2017-03-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T16:41:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务的隔离级别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-03-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T16:41:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"未授权读取(RU)","slug":"未授权读取-ru","link":"#未授权读取-ru","children":[]},{"level":2,"title":"授权读取(RC)","slug":"授权读取-rc","link":"#授权读取-rc","children":[]},{"level":2,"title":"可重复读取(RR)","slug":"可重复读取-rr","link":"#可重复读取-rr","children":[]},{"level":2,"title":"串行化(S)","slug":"串行化-s","link":"#串行化-s","children":[]}],"git":{"createdTime":1719160919000,"updatedTime":1719160919000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2017-03-03-事务的隔离级别.md","localizedDate":"2017年3月3日","excerpt":"","autoDesc":true}');export{h as comp,g as data};

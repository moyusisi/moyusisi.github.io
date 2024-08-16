import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,d as i}from"./app-BH4aZQG2.js";const l={},c=i('<p>JDK的Collections类中提供了大量对Collection和Map的操作,网上资料整理记录下来</p><h2 id="排序操作-主要对list" tabindex="-1"><a class="header-anchor" href="#排序操作-主要对list"><span>排序操作(主要对List)</span></a></h2><ul><li><code>void sort(List list)</code>: 对List里的元素根据自然升序排序</li><li><code>void sort(List list, Comparator c)</code>: 自定义比较器排序</li><li><code>void reverse(List list)</code>: 反转指定List集合中元素的顺序</li><li><code>void shuffle(List list)</code>: 打乱List中元素的顺序(重新洗牌)</li><li><code>void swap(List list, int i, int j)</code>: 交换list中的两个元素</li><li><code>void swap(Object[] arr, int i, int j)</code>: 交换数组中的两个元素</li><li><code>void rotate(List list, int distance)</code>: 所有元素循环右移distance位, distance=size则相当于没变</li></ul><h2 id="查找和替换-主要对collection接口" tabindex="-1"><a class="header-anchor" href="#查找和替换-主要对collection接口"><span>查找和替换(主要对Collection接口)</span></a></h2><ul><li><code>int binarySearch(List list, T key)</code>: 二分搜索法, 返回对象在List中的索引, 前提是集合已经排序</li><li><code>void fill(List list, T obj)</code>: 填充对象</li><li><code>boolean replaceAll(List list, T oldVal, T newVal)</code>: 替换, 返回是否含有要替换的元素</li><li><code>T min(Collection coll)</code>: 返回最小元素</li><li><code>T min(Collection coll, Comparator comp)</code>: 根据自定义比较器，返回最小元素</li><li><code>T max(Collection coll)</code>: 返回最大元素</li><li><code>T max(Collection coll, Comparator comp)</code>: 根据自定义比较器，返回最大元素</li><li><code>int frequency(Collection c, Object o)</code>: 返回指定对象在集合中出现的次数</li></ul><h2 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作"><span>其他操作</span></a></h2><ul><li><code>boolean addAll(Collection c, T... elements)</code>: 把elements添加到集合里</li><li><code>Comparator reverseOrder()</code>: 返回自然顺序的反序比较器</li><li><code>Comparator reverseOrder(Comparator cmp)</code>: 返回cmp的逆序比较器, 若cmp为null则等同于<code>reverseOrder()</code></li></ul>',7),s=[c];function a(r,n){return t(),o("div",null,s)}const m=e(l,[["render",a],["__file","2015-11-13-Collections工具类.html.vue"]]),h=JSON.parse('{"path":"/program/code/2015-11-13-Collections%E5%B7%A5%E5%85%B7%E7%B1%BB.html","title":"Collections工具类","lang":"zh-CN","frontmatter":{"title":"Collections工具类","date":"2015-11-13T00:00:00.000Z","category":"Java","tag":["Java"],"order":-20151113,"description":"JDK的Collections类中提供了大量对Collection和Map的操作,网上资料整理记录下来 排序操作(主要对List) void sort(List list): 对List里的元素根据自然升序排序 void sort(List list, Comparator c): 自定义比较器排序 void reverse(List list): 反...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/code/2015-11-13-Collections%E5%B7%A5%E5%85%B7%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"Collections工具类"}],["meta",{"property":"og:description","content":"JDK的Collections类中提供了大量对Collection和Map的操作,网上资料整理记录下来 排序操作(主要对List) void sort(List list): 对List里的元素根据自然升序排序 void sort(List list, Comparator c): 自定义比较器排序 void reverse(List list): 反..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-16T03:30:34.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2015-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-16T03:30:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Collections工具类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-16T03:30:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"排序操作(主要对List)","slug":"排序操作-主要对list","link":"#排序操作-主要对list","children":[]},{"level":2,"title":"查找和替换(主要对Collection接口)","slug":"查找和替换-主要对collection接口","link":"#查找和替换-主要对collection接口","children":[]},{"level":2,"title":"其他操作","slug":"其他操作","link":"#其他操作","children":[]}],"git":{"createdTime":1719155638000,"updatedTime":1723779034000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/code/2015-11-13-Collections工具类.md","localizedDate":"2015年11月13日","excerpt":"","autoDesc":true}');export{m as comp,h as data};

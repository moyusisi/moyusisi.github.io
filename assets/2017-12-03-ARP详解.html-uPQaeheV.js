import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as c,d}from"./app-ZaGLpo4p.js";const t="/assets/mac-BKnGHmP2.png",i="/assets/ARP-BXdxMZF-.png",l={},a=d('<h2 id="mac地址与mac帧" tabindex="-1"><a class="header-anchor" href="#mac地址与mac帧"><span>MAC地址与MAC帧</span></a></h2><p>每块网络设备都至少有一个地址, 称为<code>MAC地址</code>, 也称物理地址。 MAC地址长<code>6B</code>, 一般由冒号(或连字符)分个的6个十六进制数表示, 如:<code>02-60-8c-e4-b1-21</code>, 高24位为厂商代码, 低24位为厂商自行分配的网卡序列号。</p><p>常用的以太网MAC帧格式有两种标准: <code>DIX Ethernet V2</code>标准 和 <code>IEEE 的 802.3</code>标准, 最常用的MAC帧格式是以太网V2的格式:</p><figure><img src="'+t+'" alt="MAC帧" tabindex="0" loading="lazy"><figcaption>MAC帧</figcaption></figure><p>MAC帧字段说明:</p><ul><li><code>前导码</code>: 8个字节可分两部分, 第一部分7个字节, 是前同步码, 用来迅速实现MAC帧的比特同步; 第二个字段是帧开始定界符，表示后面的信息就是MAC帧。</li><li><code>地址</code>: 6B的地址(MAC地址)</li><li><code>类型</code>: 用来标志使用的是什么协议, 以便把收到的MAC帧的数据上交给这个协议处理</li><li><code>数据</code>: <code>46 ~ 1500B</code>, 由于<code>CSMA/CD</code>算法的限制, 以太网帧最小长度为<code>64B</code>(其他字段共占了<code>18B</code>, 数据字段最少<code>46B</code>), 因此当数据字段长度小于<code>46B</code>时, 必须在数据之后进行, 保证以太网的MAC帧长不小于<code>64B</code>。</li><li><code>FCS</code>: <code>4B</code>校验字段, 校验范围从目的地址到数据段的末尾, 算法采用32位的CRC。</li></ul><h2 id="地址解析协议arp" tabindex="-1"><a class="header-anchor" href="#地址解析协议arp"><span>地址解析协议<code>ARP</code></span></a></h2><p>无论在网络层使用什么协议, 在实际网络的数据链路上传送数据时, 最终必须使用硬件地址。 所以需要一种方法来完成<code>IP地址</code>到<code>MAC地址</code>的映射, 这就需要用到地址解析协议(<code>Address Resolution Protocol, ARP</code>)。 每台主机(路由器)上单独存放一个从<code>IP地址</code>到<code>MAC地址</code>的映射表, 称<code>ARP表</code>, 使用ARP协议来动态维护此ARP表。</p><h3 id="arp帧格式" tabindex="-1"><a class="header-anchor" href="#arp帧格式"><span>ARP帧格式</span></a></h3><p>ARP帧格式如下:</p><figure><img src="'+i+'" alt="ARP" tabindex="0" loading="lazy"><figcaption>ARP</figcaption></figure><ul><li><code>以太网目的地址</code>: 目的主机的硬件地址。目的地址全为1表示广播地址</li><li><code>以太网源地址</code>: 源主机的硬件地址</li><li><code>帧类型</code>: 对于<code>ARP协议</code>, 该字段为<code>0x0806</code>; 对于<code>RARP协议</code>, 该字段为<code>0x8035</code></li><li><code>硬件类型</code>: 表示硬件地址的类型, 值为1时表示以太网地址。也就是说ARP协议不仅仅应用于以太网协议, 还可以支持别的链路层协议</li><li><code>协议类型</code>: 表示要映射的协议地址类型。值为<code>0x0800</code>表示IP协议。</li><li><code>硬件地址长度</code>: 与<code>硬件类型</code>对应的<code>硬件地址长度</code>, 以字节为单位。如果是以太网，则是6字节(MAC长度)</li><li><code>协议地址长度</code>: 与<code>协议类型</code>对应的<code>协议地址长度</code>, 以字节为单位。如果是IP协议, 则是4字节(IP地址长度)</li><li><code>操作类型(op)</code>: 四中操作类型。<code>1</code>表示<code>ARP请求</code>; <code>2</code>表示<code>ARP应答</code>; <code>3</code>表示<code>RARP请求</code>; <code>4</code>表示<code>RARP应答</code></li><li><code>发送端硬件地址</code>: 如果是以太网, 则是源主机以太网地址, 此处和以太网头中的源地址对应</li><li><code>发送端协议地址</code>: 如果是IP协议, 则表示源主机的IP地址</li><li><code>目的端硬件地址</code>: 如果是以太网, 则是目的以太网地址, 和以太网头中的目的地址对应</li><li><code>目的端协议地址</code>: 如果是IP协议, 则表示源主机要请求硬件地址的IP地址</li></ul><p>另外, 需要注意:</p><ol><li>这里的<code>以太网首部(14B)</code>就是上一部分内容中的<code>MAC帧</code>的格式</li><li><code>以太网首部</code>与<code>ARP报文体</code>的部分内容是重复的。对应ARP请求包来说, <code>以太网首部</code>中的目的物理地址为<code>FF-FF-FF-FF-FF-FF</code>, 报文体中的<code>目的端的硬件地址</code>字段无需填充, 其他字段都需要填充。</li><li>APR请求包是广播的, 但是ARP应答帧是单播的</li><li>ARP报文体只有<code>28B</code>, 需要进行填充, 使得<code>MAC帧</code>数据部分最少为<code>46B</code>(首部14B, 数据46B, FCS 4B, 总共64B)</li></ol><h3 id="arp工作流程" tabindex="-1"><a class="header-anchor" href="#arp工作流程"><span>ARP工作流程</span></a></h3><p>在以太网(<code>ARP协议只适用于局域网</code>)中, 如果本地主机想要向某一个IP地址的主机发数据报, 但是并不知道其硬件地址, 此时利用ARP协议提供的机制来获取硬件地址，具体过程如下:</p><ol><li>当主机A向 <strong>本局域网</strong> 上的某个<code>主机B</code>发送IP数据报时, 就先在自己的ARP缓冲表中查看有无主机B的IP地址</li><li>如果有, 就可以查出其对应的硬件地址, 再将此硬件地址写入<code>MAC帧</code>(链路层协议), 然后通过局域网将<code>该MAC帧</code>发往目的主机</li><li>如果没有, 主机A就需要使用ARP协议来解析这个IP地址</li></ol><ul><li>通过使用目的MAC地址为<code>FF-FF-FF-FF-FF-FF</code>(MAC地址为6B)的帧来封装并广播ARP请求分组</li><li>同一个局域网里所有主机都收到此ARP请求</li><li>主机B收到该ARP请求后, 就会向A发出响应ARP分组, 分组中包含B的IP与MAC地址的映射关系</li><li>主机A收到主机B的ARP响应分组后, 就在其ARP缓存中写入主机B的IP地址到硬件地址的映射</li></ul><p><strong>注意</strong>: ARP解决的是同一个局域网上的主机或路由器的IP地址与MAC地址的映射问题。如果要找的主机和源主机不在同一个局域网上, 那么需要通过ARP协议找到一个位于本局域网的某个路由器的硬件地址, 然后把分组发送给这个路由器, 让这个路由器把分组转发给下一个网络</p>',19),r=[a];function A(n,p){return c(),o("div",null,r)}const m=e(l,[["render",A],["__file","2017-12-03-ARP详解.html.vue"]]),R=JSON.parse('{"path":"/program/backend/2017-12-03-ARP%E8%AF%A6%E8%A7%A3.html","title":"ARP详解","lang":"zh-CN","frontmatter":{"title":"ARP详解","date":"2017-12-03T00:00:00.000Z","tag":["ARP"],"order":-20171203,"description":"MAC地址与MAC帧 每块网络设备都至少有一个地址, 称为MAC地址, 也称物理地址。 MAC地址长6B, 一般由冒号(或连字符)分个的6个十六进制数表示, 如:02-60-8c-e4-b1-21, 高24位为厂商代码, 低24位为厂商自行分配的网卡序列号。 常用的以太网MAC帧格式有两种标准: DIX Ethernet V2标准 和 IEEE 的 8...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/program/backend/2017-12-03-ARP%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"魔芋丝丝"}],["meta",{"property":"og:title","content":"ARP详解"}],["meta",{"property":"og:description","content":"MAC地址与MAC帧 每块网络设备都至少有一个地址, 称为MAC地址, 也称物理地址。 MAC地址长6B, 一般由冒号(或连字符)分个的6个十六进制数表示, 如:02-60-8c-e4-b1-21, 高24位为厂商代码, 低24位为厂商自行分配的网卡序列号。 常用的以太网MAC帧格式有两种标准: DIX Ethernet V2标准 和 IEEE 的 8..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T16:41:59.000Z"}],["meta",{"property":"article:author","content":"moyusisi"}],["meta",{"property":"article:tag","content":"ARP"}],["meta",{"property":"article:published_time","content":"2017-12-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-23T16:41:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ARP详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-12-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-23T16:41:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moyusisi\\"}]}"]]},"headers":[{"level":2,"title":"MAC地址与MAC帧","slug":"mac地址与mac帧","link":"#mac地址与mac帧","children":[]},{"level":2,"title":"地址解析协议ARP","slug":"地址解析协议arp","link":"#地址解析协议arp","children":[{"level":3,"title":"ARP帧格式","slug":"arp帧格式","link":"#arp帧格式","children":[]},{"level":3,"title":"ARP工作流程","slug":"arp工作流程","link":"#arp工作流程","children":[]}]}],"git":{"createdTime":1719160919000,"updatedTime":1719160919000,"contributors":[{"name":"moyusisi","email":"moyusisi@126.com","commits":1}]},"filePathRelative":"program/backend/2017-12-03-ARP详解.md","localizedDate":"2017年12月3日","excerpt":"","autoDesc":true}');export{m as comp,R as data};

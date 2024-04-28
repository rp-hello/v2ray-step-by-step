(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{301:function(t,s,a){t.exports=a.p+"assets/img/dns_flowchart.a882be46.svg"},372:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dns-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-服务"}},[t._v("#")]),t._v(" DNS 服务")]),t._v(" "),s("p",[t._v("V2Ray 内置的 DNS 服务，其解析的 IP 往往先是用来匹配路由规则，如果配置不当，请求会在 DNS 请求上耗费一定时间。")]),t._v(" "),s("p",[t._v("路由 routing 的"),s("code",[t._v('"domainStrategy"')]),t._v("的几种模式都跟 DNS 功能密切相关，所以在此专门说一下。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"AsIs"')]),t._v("，当终端请求一个域名时，进行路由里面的 domain 进行匹配，不管是否能匹配，直接按路由规则走。")]),t._v(" "),s("li",[s("code",[t._v('"IPIfNonMatch"')]),t._v(", 当终端请求一个域名时，进行路由里面的 domain 进行匹配，若无法匹配到结果，则对这个域名进行 DNS 查询，用结果的 IP 地址再重新进行 IP 路由匹配。")]),t._v(" "),s("li",[s("code",[t._v('"IPOnDemand"')]),t._v(", 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。")])]),t._v(" "),s("p",[t._v("可见，"),s("code",[t._v("AsIs")]),t._v("是最快的，但是分路由的结果最不精确；而"),s("code",[t._v("IPOnDemand")]),t._v("是最精确的，但是速度是最慢的。")]),t._v(" "),s("h2",{attrs:{id:"dns-流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-流程"}},[t._v("#")]),t._v(" DNS 流程")]),t._v(" "),s("p",[s("img",{attrs:{src:a(301),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"基础配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[t._v("#")]),t._v(" 基础配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1.1.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('DNS 模块的基础使用并没有什么特别复杂的地方，就是指定一个或几个 DNS 服务器，v2ray 会依次使用（查询失败时候会查询下一个）。其中"localhost"的意义是特殊的，作用是本地程序用系统的 DNS 去发请求，而不是 V2ray 直接跟 DNS 服务器通信，这个通信不受 Routing 等模块的控制。')]),t._v(" "),s("h2",{attrs:{id:"进阶配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置"}},[t._v("#")]),t._v(" 进阶配置")]),t._v(" "),s("p",[t._v("虽然这是基本篇，但是不想在高级那边再开一篇 DNS 了，就写这。")]),t._v(" "),s("h3",{attrs:{id:"客户端分流配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端分流配置"}},[t._v("#")]),t._v(" 客户端分流配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"119.29.29.29"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:geolocation-!cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:speedtest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:h2y.dat:gfw"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1.1.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("DNS 服务是可以用来分流的，大致思路是，”哪些域名要去哪个 DNS 服务器解析，并希望得到属于那里的 IP 地址“。\n配置的规则跟路由模式中用的是相似的，详细使用还需参考官方文档。")]),t._v(" "),s("p",[t._v("上面的配置思路这里解释一下：国内域名匹配到 domains 里面，使用 119.29.29.29 进行查询，并期待得到国内的 IP 地址；如果得到的地址并不是国内的，则进行下一个 DNS 服务器进行查询，并使用新的结果。不是国内的域名会匹配到第二个配置， 使用 8.8.8.8 进行查询，这次不需要期待特别的 IP 了，可直接使用返回的；如果以上过程都有问题，则直接查询 1.1.1.1，再不行让本地 DNS 试试吧。")]),t._v(" "),s("h3",{attrs:{id:"服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置"}},[t._v("#")]),t._v(" 服务器配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https+local://1.1.1.1/dns-query"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("服务端的 DNS 一般无需复杂配置。如果配置了，应注意"),s("code",[t._v("freedom")]),t._v("的 outbound 应配置了"),s("code",[t._v('"domainStrategy"')]),t._v("为"),s("code",[t._v('"UseIP" | "UseIPv4" | "UseIPv6"')]),t._v("几种的时候才会使用内置 DNS，默认的"),s("code",[t._v("AsIs")]),t._v("是交给操作系统去解析和连接。")]),t._v(" "),s("p",[t._v("新版本 4.22.0+ 后加入的 DOH 功能，部署在服务器端时候可以简单使用。")]),t._v(" "),s("h2",{attrs:{id:"对外开放-v2ray-的-dns-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对外开放-v2ray-的-dns-服务"}},[t._v("#")]),t._v(" 对外开放 v2ray 的 DNS 服务")]),t._v(" "),s("p",[t._v("Kitsunebi 的作者在 "),s("a",{attrs:{href:"https://medium.com/@TachyonDevel/%E6%BC%AB%E8%B0%88%E5%90%84%E7%A7%8D%E9%BB%91%E7%A7%91%E6%8A%80%E5%BC%8F-dns-%E6%8A%80%E6%9C%AF%E5%9C%A8%E4%BB%A3%E7%90%86%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8-62c50e58cbd0",target:"_blank",rel:"noopener noreferrer"}},[t._v("《漫谈各种黑科技式 DNS 技术在代理环境中的应用》"),s("OutboundLink")],1),t._v(" 中介绍了通过"),s("code",[t._v("Dokodemo")]),t._v("入站协议和"),s("code",[t._v("DNS")]),t._v("出站协议开放 v2ray DNS 的方法，可以充分发挥 v2ray 内置 DNS 的强大能力，例如让系统其它不经代理的联网程序获得 DNS 级别广告过滤的能力，以及在透明代理中接管系统 DNS 等。")]),t._v(" "),s("p",[t._v("该方法的核心思想是使用"),s("code",[t._v("Dokodemo")]),t._v("入站协议接收 DNS 请求流量，转发至"),s("code",[t._v("DNS")]),t._v("出站协议。而"),s("code",[t._v("DNS")]),t._v("出站协议会拦截"),s("code",[t._v("Type A")]),t._v("和"),s("code",[t._v("Type AAAA")]),t._v("的 DNS 查询并交由 v2ray 内置 DNS 处理，从而返回查询结果；除此之外的查询流量，会根据"),s("code",[t._v("Dokodemo")]),t._v("的配置发送至目标 DNS 服务器。")]),t._v(" "),s("h3",{attrs:{id:"客户端基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端基本配置"}},[t._v("#")]),t._v(" 客户端基本配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns-in"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userLevel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns-out"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns-in"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns-out"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然而，这样配置存在一定问题。对于非"),s("code",[t._v("Type A")]),t._v("和"),s("code",[t._v("Type AAAA")]),t._v("的 DNS 查询，v2ray 将会直连转发至"),s("code",[t._v("dns-in")]),t._v("中所设置的目标 DNS 服务器。而当这个域名被污染时，返回的自然是被污染的结果；如果希望 v2ray 内置 DNS 承担 "),s("code",[t._v("DNSCrypt-Proxy")]),t._v(" 的作用，这样无疑会导致 DNS 查询内容的泄露。")]),t._v(" "),s("p",[t._v("解决方法有两种：")]),t._v(" "),s("ol",[s("li",[t._v("在"),s("code",[t._v("dns-out")]),t._v("中，添加"),s("code",[t._v("proxySettings")]),t._v("的配置，使得非"),s("code",[t._v("Type A")]),t._v("和"),s("code",[t._v("Type AAAA")]),t._v("的 DNS 查询经由"),s("code",[t._v("remote-proxy-out")]),t._v("转发至远端解析。此时，目标为"),s("code",[t._v("8.8.8.8:53")]),t._v("的非"),s("code",[t._v("Type A")]),t._v("和"),s("code",[t._v("Type AAAA")]),t._v("的 DNS 查询流量通过代理转发至远端，并通过远端 v2ray 的"),s("code",[t._v("freedom")]),t._v("出站，发往"),s("code",[t._v("8.8.8.8:53")]),t._v("从而返回未经污染的结果。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "outbounds": [\n        {\n            "protocol": "dns",\n            "tag": "dns-out",\n            "proxySettings": {\n                "tag": "remote-proxy-out"\n            }\n        }\n    ]\n}\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在 "),s("code",[t._v("dns-in")]),t._v(" 中设置其它可靠的 DNS 服务器。例如，仅利用 v2ray 内置 DNS 实现 DNS 分流，而解析则使用 "),s("code",[t._v("dnscrypt-proxy")]),t._v(" 实现。")])]),t._v(" "),s("p",[t._v("如果非 "),s("code",[t._v("Type A")]),t._v(" 和 "),s("code",[t._v("Type AAAA")]),t._v(" 的 DNS 查询需求较少，可以无视上述改进。")]),t._v(" "),s("h2",{attrs:{id:"dns-over-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-over-https"}},[t._v("#")]),t._v(" DNS over HTTPS")]),t._v(" "),s("p",[t._v("V2Ray 4.22.0 新加入的功能，也没特殊配置的地方，就是上述配置里面的 DNS 地址写成 DOH 服务地址。"),s("s",[t._v("一般只在服务端使用 "),s("code",[t._v("https+local")]),t._v(" 模式，而墙内目前似乎没有稳定的 DOH 提供商，只有 "),s("code",[t._v("1.1.1.1")]),t._v(" 一家可用，而且效果并不稳定")]),t._v(" 在中国大陆可以使用阿里云 DNS 提供的 DoH 服务解析境内域名："),s("code",[t._v("https://dns.alidns.com/dns-query")]),t._v(" 或 "),s("code",[t._v("https://223.5.5.5/dns-query")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https+local://1.1.1.1/dns-query"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("DOH 服务商不像传统 DNS 那么成熟，目前网上提供 DOH 的服务商可以参考 "),s("a",{attrs:{href:"https://github.com/curl/curl/wiki/DNS-over-HTTPS",target:"_blank",rel:"noopener noreferrer"}},[t._v("curl - DNS over HTTPS"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("注意，多数服务商的 DOH 的 tls 证书是没有对 IP 地址签发认证的，必须写实际的域名，但也有一些 DoH 提供商可以直接使用 IP 作为主机名访问，例如 CloudFlare 的 "),s("code",[t._v("1.1.1.1")]),t._v(" 和阿里云公共 DNS 的 "),s("code",[t._v("223.5.5.5")]),t._v("。")]),t._v(" "),s("p",[t._v("DOH 把 DNS 请求融入到常见的 https 流量当中，完全使用 DOH 可以避免出入口 ISP 知道你访问的域名。\n但需要注意，只有在客户端、服务端都使用 DOH 协议（客户端使用 https 模式，服务端使用 https+local 模式）时候，VPS 出口上才不会出现传统的 UDP DNS 请求。")]),t._v(" "),s("p",[t._v("DOH 的解析时间比传统的 UDP 要高不少，把 V2Ray 的 log level 设置为 info 可以看到具体的域名解析耗时值。")]),t._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v("2019/11/28 17:34:55 [Info] v2ray.com/core/app/dns: UDP:1.1.1.1:53 got answere: www.msn.com. TypeA -> [204.79.197.203] 8.9953ms\n...\n2019/11/28 17:42:50 [Info] v2ray.com/core/app/dns: DOH:1.1.1.1:443 got answere: lp-push-server-849.lastpass.com. TypeA -> [192.241.186.205] 182.1171ms\n")])])]),s("p",[t._v("以下列出解析耗时参考值：")]),t._v(" "),s("ul",[s("li",[t._v("美国 VPS UDP 1.1.1.1：1ms~5ms")]),t._v(" "),s("li",[t._v("美国 VPS DOHL 1.1.1.1：10ms~100ms")]),t._v(" "),s("li",[t._v("V2Ray 客户端 国内 UDP 1.1.1.1：200ms~1s")]),t._v(" "),s("li",[t._v("V2Ray 客户端 国内 DOH 1.1.1.1：200ms~3s")])]),t._v(" "),s("p",[t._v("但是实际中因为网络原因之类问题，也可能出现 DOH 耗时比 UDP 还小的。个人感觉这个耗时虽然有区别，但都是较小的间隙，实际使用很少有察觉。")]),t._v(" "),s("p",[t._v("大家按需选择使用即可。")]),t._v(" "),s("h2",{attrs:{id:"参考阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考阅读"}},[t._v("#")]),t._v(" 参考阅读")]),t._v(" "),s("p",[t._v("详见 "),s("a",{attrs:{href:"https://medium.com/@TachyonDevel/%E6%BC%AB%E8%B0%88%E5%90%84%E7%A7%8D%E9%BB%91%E7%A7%91%E6%8A%80%E5%BC%8F-dns-%E6%8A%80%E6%9C%AF%E5%9C%A8%E4%BB%A3%E7%90%86%E7%8E%AF%E5%A2%83%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8-62c50e58cbd0",target:"_blank",rel:"noopener noreferrer"}},[t._v("《漫谈各种黑科技式 DNS 技术在代理环境中的应用》"),s("OutboundLink")],1),t._v("，这篇文章为 Kitsunebi 的作者所写，很详细地分析了 V2Ray 关于 DNS 的机制及一些独有的骚操作，如果你有关于透明代理的需求，我认为很值得一看。如果没有那就随意吧。")]),t._v(" "),s("h2",{attrs:{id:"dns-答疑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-答疑"}},[t._v("#")]),t._v(" DNS 答疑")]),t._v(" "),s("h3",{attrs:{id:"问-doh-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-doh-是什么"}},[t._v("#")]),t._v(" 问：DOH 是什么")]),t._v(" "),s("p",[t._v("答：DOH 是 DNS Over HTTPS 的简称，作用是用 https 请求来完成 DNS 请求。V2ray-core 4.22.0 后加入的功能。DOH 在历史上经历过多个草案版本，V2ray 支持的是 RFC8484。")]),t._v(" "),s("h3",{attrs:{id:"问-dohl-又是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-dohl-又是什么"}},[t._v("#")]),t._v(" 问：DOHL 又是什么")]),t._v(" "),s("p",[t._v("答：DOHL 不是个标准名称，只是 V2ray 内的一个称呼。V2ray 有两种 DOH 工作模式，DOHL 是指配置中写"),s("code",[t._v("https+local://1.1.1.1/dns-query")]),t._v("，程序直接发出而不经过 routing 规则；而写成"),s("code",[t._v("https://1.1.1.1/dns-query")]),t._v("则会根据路由规则走。")]),t._v(" "),s("h3",{attrs:{id:"问-dns-都要走-https-那不是很慢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-dns-都要走-https-那不是很慢"}},[t._v("#")]),t._v(" 问：DNS 都要走 HTTPS，那不是很慢")]),t._v(" "),s("p",[t._v("答：对。传统的 UDP 基本会在 10ms 级别响应，而 DOH 的响应时间一般都在 100ms+。在 DOHL 模式下受益于 http2 的长链接，也能有数十 ms 的响应。不过个人来说，这些 ms 级别的延时是没什么感觉。")]),t._v(" "),s("h3",{attrs:{id:"问-doh-走-https-可以防污染-传统-dns-走代理也不受污染-两者有区别吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-doh-走-https-可以防污染-传统-dns-走代理也不受污染-两者有区别吗"}},[t._v("#")]),t._v(" 问：DOH 走 HTTPS 可以防污染，传统 DNS 走代理也不受污染，两者有区别吗")]),t._v(" "),s("p",[t._v("答：效果没区别。一定要说区别就是：DOH 后出口 ISP 也不知道 DNS 查询的内容了。DOH 设计的主要目的是解决私隐问题，并不是什么厉害的黑科技。")]),t._v(" "),s("h3",{attrs:{id:"问-v2ray-的-dns-配置好像很复杂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-v2ray-的-dns-配置好像很复杂"}},[t._v("#")]),t._v(" 问：V2ray 的 DNS 配置好像很复杂")]),t._v(" "),s("p",[t._v("答：V2ray 的 DNS 主要是两个作用，用户比较容易混淆：")]),t._v(" "),s("ul",[s("li",[t._v("一是在出口 freedom 协议的 outbound 处，就跟普通代理服务器一样，代理的请求在此处终结，可称为“终结 DNS”；")]),t._v(" "),s("li",[t._v("二是在匹配 routing 规则前需要对终端请求的域名进行解析成 IP，再根据 IP 做 routing 规则匹配，可称为“匹配 DNS”。")])]),t._v(" "),s("p",[t._v("其中“终结 DNS”可交给操作系统处理（freedom 的"),s("code",[t._v("domainStrategy")]),t._v(":"),s("code",[t._v("AsIs")]),t._v("），也可使用内置 DNS 的结果。")]),t._v(" "),s("p",[t._v('而“匹配 DNS”都由内置 DNS 处理。“匹配 DNS”在整个代理过程中并不是必不可少的，当使用 routing 的 "domainStrategy":AsIs 时，甚至不会使用“匹配 DNS”功能；即使是其他模式，也只影响效率：如果内置 DNS 配置不正确，每个请求都会询问一次错误的“匹配 DNS”，直至超时后才转发，但整个转发过程数据是正常的。')]),t._v(" "),s("h3",{attrs:{id:"问-dns-里面还有-domians-expectips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-dns-里面还有-domians-expectips"}},[t._v("#")]),t._v(' 问：DNS 里面还有"domians"..."expectIPs"')]),t._v(" "),s("p",[t._v("答：理解“终结 DNS”和“匹配 DNS”两大作用后，根据需要，按照文档选用这些参数即可。")]),t._v(" "),s("h3",{attrs:{id:"问-压根没写-dns-配置-好像也是正常的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-压根没写-dns-配置-好像也是正常的"}},[t._v("#")]),t._v(" 问：压根没写 DNS 配置，好像也是正常的")]),t._v(" "),s("p",[t._v("答：不写 dns 配置，会默认一个"),s("code",[t._v('"localhost"')]),t._v("配置，作为内置代理。在客户端侧，内置 DNS 的作用只有“匹配 DNS”，即使本地 DNS 返回了个污染的结果，往往也不影响 v2ray 走代理的流程，所以“也正常”。")]),t._v(" "),s("h3",{attrs:{id:"问-文档推荐在服务器侧使用-dohl-在墙内客户端侧使用-dohl-模式可以吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-文档推荐在服务器侧使用-dohl-在墙内客户端侧使用-dohl-模式可以吗"}},[t._v("#")]),t._v(" 问：文档推荐在服务器侧使用 DOHL，在墙内客户端侧使用 DOHL 模式可以吗")]),t._v(" "),s("p",[t._v("答：可以使用一些境内可用的服务商，比如"),s("code",[t._v("https+local://1.1.1.1/dns-query")]),t._v("，"),s("code",[t._v("https+local://dns.rubyfish.cn/dns-query")]),t._v("，"),s("code",[t._v("https+local://dns.alidns.com/dns-query")]),t._v("。但是如果这些服务在境内不可用，就只能走 DOH 模式，或者自建 DOH 服务。")]),t._v(" "),s("p",[t._v("自建 DOH 也不算复杂，V2ray 也能使用非标准端口和自定义的路径，甚至“隐藏”在一个个人网站后（类似 tls+ws+web）模式。这些玩法有待大家去挖掘。")]),t._v(" "),s("h3",{attrs:{id:"问-v2ray-作为-dns-服务端时候算什么模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-v2ray-作为-dns-服务端时候算什么模式"}},[t._v("#")]),t._v(" 问：V2ray 作为 DNS 服务端时候算什么模式")]),t._v(" "),s("p",[t._v("答：V2ray 可以通过 dokodemo 的 inbound 提供 DNS 服务回应，使用内置 DNS 服务的配置。这个过程最终是以 UDP 形式发到出口的外部 DNS 请求的，不属于上述的“终结 DNS”和“匹配 DNS”的过程。")]),t._v(" "),s("h3",{attrs:{id:"问-在透明代理的作用中-dns-是怎样工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问-在透明代理的作用中-dns-是怎样工作的"}},[t._v("#")]),t._v(" 问：在透明代理的作用中，DNS 是怎样工作的")]),t._v(" "),s("p",[t._v("答：取决于透明代理的形式。有些是把 DNS 作为普通流量直接转发到代理，这不受 V2ray 的 DNS 机制影响；有些通过中间组件如 redsocks，把子网内的 DNS 请求转换成 socks5 请求，这也类似流量直走，不受 V2ray 的 DNS 机制影响；有些是使用 V2ray 作为 DNS 服务端，受内置服务器的缓存和匹配影响。")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"更新历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新历史"}},[t._v("#")]),t._v(" 更新历史")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("2019-12-30 QA。")])]),t._v(" "),s("li",[s("p",[t._v("2019-11-28 初版。")])]),t._v(" "),s("li",[s("p",[t._v("2019-11-29 增加描述。")])]),t._v(" "),s("li",[s("p",[t._v("2017-12-05 与 ToutyRater 原内容合并")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
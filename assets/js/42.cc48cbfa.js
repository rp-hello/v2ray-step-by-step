(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{346:function(t,T,e){"use strict";e.r(T);var l=e(10),n=Object(l.a)({},(function(){var t=this,T=t._self._c;return T("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[T("h1",{attrs:{id:"不推荐的配置"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#不推荐的配置"}},[t._v("#")]),t._v(" 不推荐的配置")]),t._v(" "),T("p",[t._v("也许有一部分朋友发现了，高级篇的内容关于传输层的，各种配置的组合，可以搭配出非常多的配置。但是，有一些组合是我认为不值得或者是冗余的（仅代表个人意见），以下给出。")]),t._v(" "),T("ul",[T("li",[t._v("TLS + KCP")])]),t._v(" "),T("p",[t._v("这是相当一部分人喜欢的组合。选用 KCP 的原因是为了在某些恶劣的网络环境下拥有比较好的上网体验。而使用 TLS 的原因大约有两种考虑：一是认为 TLS 拥有与 HTTPS 一样的特征不容易被墙；二是觉得 TLS 具有更好的加密效果不容易被墙。对于第一点，尽管 HTTPS 是基于 TLS，但并不等同与 TLS，因此 TLS 与 HTTPS 的特征一样的说法是错误的；对于第二点，使用更强的加密算法而被墙的几率更小这个观点并未得到论证。然而这并不是我不推荐的理由，真正的原因的是不使用 TLS 并没什么坏处，额外使用 TLS 也没有足够的好处。")]),t._v(" "),T("ul",[T("li",[t._v("TLS + HTTP 伪装")])]),t._v(" "),T("p",[t._v("我并没有测试过这个组合，不清楚最外层是 TLS 还是 HTTP 伪装。无论哪一种，处于内层的配置将会失去其意义。")]),t._v(" "),T("ul",[T("li",[t._v("单纯使用 WebSocket")])]),t._v(" "),T("p",[t._v("理论上，单纯使用 WebSocket 会比 TCP 性能差一些，所以如果不是搭配 CDN、nginx 或者在 PaaS 上使用，那还是使用 TCP 吧。")])])}),[],!1,null,null,null);T.default=n.exports}}]);
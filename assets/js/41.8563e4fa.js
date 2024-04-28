(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{345:function(t,s,a){"use strict";a.r(s);var n=a(10),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mux"}},[t._v("#")]),t._v(" Mux")]),t._v(" "),s("p",[t._v("Mux 意为多路复用(multiplexing)，在目前的科学上网工具中仅 V2Ray 有此功能(2018-03-15 注：也有其他软件实现了类似的功能)。它能够将多条 TCP 连接合并成一条，节省资源，提高并发能力。")]),t._v(" "),s("p",[t._v("听众：呃？什么鬼？")]),t._v(" "),s("p",[t._v("好吧，翻译成人话就是：")]),t._v(" "),s("p",[t._v("从前，有一个人叫小白，他是骑行爱好者，还是网购狂人、DIY 玩家，因此手中有点闲钱总会网购，也喜欢自己买配件组装自行车。有一次他组装自行车，在网上骑行之家买了头盗、手套、码表，在 x 诺专卖店买了指拨、变速器，在 x 特专卖买了车架，在 xx 车行买了刹车、踏板、坐垫，在 xxx 买了轮组、曲柄……")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("4 天后……plainplainplainplainplainplainplain\n9 点小白手机响了，接通，小白：喂，你好。对方：你好，申x快递，来取一下包裹。小白兴兴冲地取快递了。\n20 分钟后，小白：喂，你好。对方：你好，韵x，过来取快递。小白又去了。\n又过 15 分钟，小白：喂，你好。对方：你好，天x，来取快递。小白又去了。\n又过半个小时，小白：什么快递？对方：圆x，快点来。小白心里：我X。\n10 分钟后……\n")])])]),s("p",[t._v("如果是你是小白，你累不累？\n电脑也差不多，但要干的活要小白多得多：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("浏览器：我要看 V2Ray 配置指南。plainplainplainplainplain\n电脑：好，我发起一条 TCP 连接。\nTelegram：我要进 V2Ray 的 Telegram 群向大佬学习。\n电脑：好，发起了连接。\n浏览器：我要看 V2Ray 的手册。\n电脑：好。\n浏览器：我要 Google 搜索 V2Ray 的教程。\n电脑：好。\n浏览器：我要……\n")])])]),s("p",[t._v("如果正常的上网连接可以使用上面小白的例子类比的话，那么，V2Ray 的 Mux 就是：")]),t._v(" "),s("p",[t._v("小黑也与小白一样自行组装自行车，也是网购配件，但他无论什么东西都从 xx 车行这店里买。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("4 天后，小黑接起电话：你好。plainplainplainplainplainplainplainplain\n对方：你好，顺x，来取一下快递。\n小黑顺路买了瓶饮料：大哥，天气这么热，喝点水解解渴。嘿嘿，这箱子太沉，辛苦一下帮帮我搬到屋里吧。\n")])])]),s("p",[t._v("Mux 实质上不能提高网速，但对并发连接比较有效，如浏览图片较多的网页，看直播等。从使用效果来说，V2Ray 的 Mux 应该类似于 Shadowsocks 的 TCP Fast Open，因为两者的目的都是减小握手时间，只是实现方式不一样。只是 TCP Fast Open 要设置系统内核才能打开，而 Mux 是纯粹在软件层面上实现，从配置难易度上 V2Ray 较好一些。（2018-09-19 注：刚更新这段话没多久，V2Ray 就加入了对 TCP Fast Open 的支持，感觉要学不动了～）")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("Mux 只需在客户端开启，服务器会自动识别，所以只给客户端的配置。也就是只要在 outbound 或 outboundDetour 加入 "),s("code",[t._v('"mux": {"enabled": true}')]),t._v(" 即可：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听端口")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"socks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口协议为 SOCKS 5")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noauth"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不认证")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出口协议")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serveraddr.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器地址，请修改为你自己的服务器 ip 或域名")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16823")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器端口")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户 ID，必须与服务器端配置相同")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处的值也应当与服务器相同")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mux"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"更新历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新历史"}},[t._v("#")]),t._v(" 更新历史")]),t._v(" "),s("ul",[s("li",[t._v("2018-08-30 修改排版、描述")]),t._v(" "),s("li",[t._v("2018-11-17 V4.0+ 配置")])])])}),[],!1,null,null,null);s.default=p.exports}}]);
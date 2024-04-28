(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{393:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"traffic-statistics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traffic-statistics"}},[t._v("#")]),t._v(" Traffic Statistics")]),t._v(" "),s("p",[t._v("V2Ray has a traffic recording feature that is not enabled by default. Traffic statistics are divided into three categories: "),s("code",[t._v("inbound")]),t._v(", "),s("code",[t._v("user")]),t._v(" and "),s("code",[t._v("outbound")]),t._v(" (4.26.0+).")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("inbound")]),t._v(" is the inbound statistics of each inbound in the configuration, and the inbound traffic needs to be recorded according to the "),s("code",[t._v("tag")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("user")]),t._v(" is the statistics in the user of the vmess protocol, and the user's "),s("code",[t._v("email")]),t._v(" is the basis for statistics and distinction. Users in socks, shadowsocks, http and other protocols do not support being counted.")]),t._v(" "),s("li",[s("code",[t._v("outbound")]),t._v(" refers to the statistics of each outbound outbound in the configuration. Newly added since 4.26.0, the outbound traffic needs to be recorded according to the "),s("code",[t._v("tag")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"configuration-of-stats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-stats"}},[t._v("#")]),t._v(" Configuration of Stats")]),t._v(" "),s("p",[t._v("To enable traffic statistic, following items must present in configuraton")]),t._v(" "),s("ol",[s("li",[s("code",[t._v('"stats":{}')]),t._v(" the existence of the object;")]),t._v(" "),s("li",[t._v("The statistical switch in "),s("code",[t._v('"policy"')]),t._v(" is true. The switch for global statistics is under "),s("code",[t._v('"system"')]),t._v(", and the switch for user statistics is under "),s("code",[t._v('"levels"')]),t._v(";")]),t._v(" "),s("li",[t._v("Global statistics must have a tag in the corresponding inbound and outbound;")]),t._v(" "),s("li",[t._v("User statistics must have email in "),s("code",[t._v('"clients"')]),t._v(";")])]),t._v(" "),s("p",[t._v("To use api to query traffic, you need to ensure that the following configuration exists in the configuration:")]),t._v(" "),s("ol",[s("li",[t._v("There is "),s("code",[t._v("StatsService")]),t._v(" in the "),s("code",[t._v('"api"')]),t._v(" configuration object;")]),t._v(" "),s("li",[t._v("The entrance of the dedicated "),s("code",[t._v("dokodemo-door")]),t._v(" protocol, the tag is api;")]),t._v(" "),s("li",[t._v("There are inboundTag:api -> outboundTag:api rules in routing;")])]),t._v(" "),s("p",[t._v("Note: The statistical "),s("code",[t._v("email")]),t._v("/"),s("code",[t._v("tag")]),t._v(" is the data of the current V2Ray process instance. For example, if statistics are performed on the server, the email written by the client has no meaning to the server; if the statistics are performed on the client, the output is the data of the client itself. .")]),t._v(" "),s("h2",{attrs:{id:"configuration-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example"}},[t._v("#")]),t._v(" Configuration Example")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stats"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"services"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StatsService"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"policy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"levels"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserUplink"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsUserDownlink"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"system"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundUplink"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsInboundDownlink"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundUplink"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statsOutboundDownlink"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3307")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auser"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e731f153-4f31-49d3-9e8f-ff8f396135ef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buser"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e731f153-4f31-49d3-9e8f-ff8f396135ee"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10085")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domainStrategy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AsIs"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"viewing-the-traffic-stats-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-traffic-stats-data"}},[t._v("#")]),t._v(" Viewing the traffic stats data")]),t._v(" "),s("p",[t._v("Viewing traffic information is one of the functions of "),s("code",[t._v("v2ctl")]),t._v(". Use "),s("code",[t._v("v2ctl api -h")]),t._v(" to see query examples. The api dokodemo-door port set in the configuration is the port of the "),s("code",[t._v("--server")]),t._v(" parameter.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("v2ctl api "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085 StatsService.QueryStats"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pattern: \"\" reset: false'")]),t._v("\nv2ctl api "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085 StatsService.GetStats"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name: \"inbound>>>statin>>>traffic>>>downlink\" reset: false'")]),t._v("\n")])])]),s("p",[t._v("Note that if you are running in the CMD of Windows, the quotation marks inside should be handled specially:")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('v2ctl.exe api --server="127.0.0.1:10085" StatsService.GetStats "name: """"inbound>>>statin>>>traffic>>>downlink"""" reset: false"\n')])])]),s("p",[t._v("There are two callable APIs:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("QueryStats")]),t._v(" is used to query matching records. You can use the parameters "),s("code",[t._v("pattern")]),t._v(" and "),s("code",[t._v("reset")]),t._v("; leave pattern blank to match all records; reset makes the value of the matched unit zero.")]),t._v(" "),s("li",[s("code",[t._v("GetStats")]),t._v(" is used to record one of them. It accepts "),s("code",[t._v("name")]),t._v(" and "),s("code",[t._v("reset")]),t._v(". The name can be constructed by referring to the output result of QueryStats. Reset makes the value of this unit zero.")])]),t._v(" "),s("p",[t._v("Example of output:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ /usr/local/bin/v2ctl api --server=127.0.0.1:10085 StatsService.GetStats \'name:"inbound>>>ws>>>traffic>>>uplink"\'\nstat: &lt;\n  name: "inbound>>>ws>>>traffic>>>uplink"\n  value: 3350713\n>\n$\n$\n$ /usr/local/bin/v2ctl api --server=127.0.0.1:10085 StatsService.QueryStats \'\'\nstat: &lt;\n  name: "inbound>>>ws>>>traffic>>>uplink"\n  value: 3350713\n>\nstat: &lt;\n  name: "inbound>>>ss>>>traffic>>>downlink"\n  value: 1704\n>\nstat: &lt;\n  name: "user>>>u3@ws>>>traffic>>>uplink"\n  value: 2810759\n>\nstat: &lt;\n  name: "user>>>u9@ss>>>traffic>>>uplink"\n  value: 1776\n>\nstat: &lt;\n  name: "inbound>>>ss>>>traffic>>>uplink"\n  value: 2276\n>\nstat: &lt;\n  name: "inbound>>>api>>>traffic>>>uplink"\n  value: 318\n>\nstat: &lt;\n  name: "user>>>u9@ss>>>traffic>>>downlink"\n  value: 1368\n>\nstat: &lt;\n  name: "inbound>>>tcp>>>traffic>>>uplink"\n>\nstat: &lt;\n  name: "inbound>>>tcp>>>traffic>>>downlink"\n>\nstat: &lt;\n  name: "inbound>>>ws>>>traffic>>>downlink"\n  value: 130637140\n>\nstat: &lt;\n  name: "inbound>>>api>>>traffic>>>downlink"\n  value: 759\n>\nstat: &lt;\n  name: "user>>>u3@ws>>>traffic>>>downlink"\n  value: 126944108\n>\n')])])]),s("p",[t._v("The "),s("code",[t._v("name")]),t._v(" in the result can be used as the "),s("code",[t._v("GetStats")]),t._v(" API to query the value of a single counting unit. Please summarize the composition rule of the name by yourself. I will not discuss it in detail here; the counting unit of value is byte.")]),t._v(" "),s("h2",{attrs:{id:"processing-of-traffic-stats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing-of-traffic-stats"}},[t._v("#")]),t._v(" Processing of Traffic Stats")]),t._v(" "),s("p",[t._v("The above configuration allows v2ray to open a query interface of the "),s("code",[t._v("grpc")]),t._v(" protocol. In addition to using v2ctl, various programs that support the grpc protocol can be used to query the above values and perform additional processing (such as storage statistics, user billing, chart reports). However, this article will not go into depth. Now that there is a ready-made command line program for "),s("code",[t._v("v2ctl")]),t._v(", we can use a simple shell script awk tool to process it and generate enough readable reports.")]),t._v(" "),s("p",[t._v("Try to save the following script to "),s("code",[t._v("traffic.sh")]),t._v(", pay attention to use "),s("code",[t._v("chmod 755 traffic.sh")]),t._v(" to grant execution permission. Pay attention to adjust and modify the connection specific port parameters in the line of "),s("code",[t._v("_APISERVER")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_APISERVER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10085\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_V2CTL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin/v2ctl\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("apidata")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reset"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reset: true"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_V2CTL")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_APISERVER")]),t._v(" StatsService.QueryStats "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ARGS}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        if (match($1, /name:/)) {\n            f=1; gsub(/^"|link"$/, "", $2);\n            split($2, p,  ">>>");\n            printf "%s:%s->%s\\t", p[1],p[2],p[4];\n        }\n        else if (match($1, /value:/) && f){ f = 0; printf "%.0f\\n", $2; }\n        else if (match($0, /^>$/) && f) { f = 0; print 0; }\n    }\'')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("print_sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v('"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SORTED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PREFIX}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUM")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SORTED")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\n        /->up/{us+=$2}\n        /->down/{ds+=$2}\n        END{\n            printf \"SUM->up:\\t%.0f\\nSUM->down:\\t%.0f\\nSUM->TOTAL:\\t%.0f\\n\", us, ds, us+ds;\n        }'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SORTED}")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SUM}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" numfmt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--field")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--suffix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("B "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--to")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("iec "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("column")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DATA")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("apidata $1"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"------------Inbound----------"')]),t._v("\nprint_sum "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inbound"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"------------Outbound----------"')]),t._v("\nprint_sum "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outbound"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-------------User------------"')]),t._v("\nprint_sum "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DATA")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----------------------------"')]),t._v("\n")])])]),s("p",[t._v("Example of output")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./traffic.sh\n------------Inbound----------\ninbound:ws->up      0B\ninbound:ws->down    0B\ninbound:tcp->up     47B\ninbound:tcp->down   0B\ninbound:kcp->up     259MB\ninbound:kcp->down   2.4GB\ninbound:api->up     2.0KB\ninbound:api->down   6.6KB\nSUM->up:            259MB\nSUM->down:          2.4GB\nSUM->TOTAL:         2.6GB\n-----------------------------\n\n-------------User------------\nuser:me@kcp->up    240MB\nuser:me@kcp->down  2.3GB\nSUM->up:           240MB\nSUM->down:         2.3GB\nSUM->TOTAL:        2.5GB\n-----------------------------\n")])])]),s("p",[t._v("The script uses the "),s("code",[t._v("reset")]),t._v(" parameter to reset the called counting unit. With the watch command, you can view the real-time flow rate per second flowing through v2ray:\n"),s("code",[t._v("watch ./traffic.sh reset")])]),t._v(" "),s("h4",{attrs:{id:"updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),s("ul",[s("li",[t._v("2019-08-07 Updated the stats script to process the output in Scientific notation")]),t._v(" "),s("li",[t._v("2019-08-09 Optimize the traffic script and add the cumulative item of SUM->TOTAL")]),t._v(" "),s("li",[t._v("2020-07-04 Added outbound traffic statistics")]),t._v(" "),s("li",[t._v("2020-12-13 Fix v2ctl path, add outbound statistics in script")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
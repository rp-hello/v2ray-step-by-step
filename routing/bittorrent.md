# 禁用 BT

国外版权意识比较重，如果下载盗版的影音文件很有可能会吃官司，所以大多数国外的 VPS 的使用条例都不允许下载 BT。但是一些人并不清楚这点，经常使用朋友分享给他的翻墙账号进行 BT 下载最终导致 VPS 被提供商封禁。尽管有时候说了不能使用代理下载 BT，对方也表示明白了清楚了，但总是有软件喜欢设置系统代理，也总有软件喜欢使用系统代理，好像也有不少人把路由器翻墙当成了不可或缺的，最终还是逃不了封禁的厄运。这个问题似乎从进入到 VPS 翻墙时代就困扰这大家，于是各种禁止 BT 的一键脚本也随之应运而生，也时常有人在讨论哪个脚本比较好用，其实最根本的几乎全是 IPTABLES 的字符串匹配。

在 V2Ray,修改配置文件的路由配置即可禁用 BT。不过，你要说用那些一键脚本比配置 V2Ray 更简单。嗯，你说得挺对的，很有道理。单从禁用 BT 来说的话，也许 IPTABLES 的方式会好一些，也可能不是。但是别忘了，V2Ray 的路由功能可不是只能禁止连接而已，本质应该是转发。也就是说，如果你有一台无视版权的 VPS，那么大可将 BT 流量转到这台 VPS 上。
 
 
## 服务器配置

此配置阻断被转发到服务器的 BitTorrent 连接。

```json
{
  "log": {
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      },
      "port": 16823,
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "b831381d-6324-4d53-ad4f-8cda48b30811",
            "alterId": 0
          }
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    },
    {
      "protocol": "blackhole",
      "settings": {},
      "tag": "block"
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "outboundTag": "block",
        "protocol": [
          "bittorrent"
        ]
      }
    ]
  }
}
```

`注意`: inbound 的 sniffing 必须开启。

## 客户端配置

此配置让使用代理的 BitTorrent 连接直连。

```json
{
  "log": {
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "port": 1080,
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      },
      "settings": {
        "auth": "noauth",
        "udp": true
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "serveraddr.com",
            "port": 16823,  
            "users": [
              {
                "id": "b831381d-6324-4d53-ad4f-8cda48b30811",
                "alterId": 0
              }
            ]
          }
        ]
      }
    },
    {
      "protocol": "freedom",
      "settings": {},
      "tag": "direct" //如果要使用路由，这个 tag 是一定要有的，在这里 direct 就是 freedom 的一个标号，在路由中说 direct V2Ray 就知道是这里的 freedom 了
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "outboundTag": "direct",
        "protocol": [
          "bittorrent"
        ]
      }
    ]
  }
}
```

`注意`: inbound 的 sniffing 必须开启。

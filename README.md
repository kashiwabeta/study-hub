# study-hub

个人学习中枢 —— 日语 / 音乐 / 视听语言三摊的总入口，纯静态，部署在 GitHub Pages。

## 结构

```
study-hub/
├── index.html            # 总入口（三摊汇总）
├── japanese/
│   ├── index.html        # 日语入口（打卡/Anki/NHK/批改 四卡片）
│   └── checkin.html       # 日语每日打卡（localStorage 存储，含听力两轮锁、日记本）
├── music/
│   └── index.html        # 音乐入口（占位，待填实链接）
└── film/
    └── index.html        # 视听语言入口（占位，待填实链接）
```

## 部署

仓库设置 → Pages → 选 main 分支根目录即可。
访问 `https://<用户名>.github.io/study-hub/`。

## 待办（替换占位链接）

- `music/index.html` 里的 `#REPLACE_练习打卡` → 音乐打卡页地址
- `film/index.html` 里的 `#REPLACE_词卡` → 词卡入口（AnkiWeb 或说明页）
- 把音乐打卡表、视听语言词卡等文件按需放进对应子目录

## 关于数据

- 打卡页用浏览器 localStorage，数据绑定单一设备+浏览器，**不跨设备同步**，勿用无痕模式。
- 入口页、Anki（自带云同步）、NHK 网站等可任意设备使用。

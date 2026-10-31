# TRY! 日本語听力工作台原型

这是 `study-hub` 的独立原型，不替换现有日语首页或工作台。

## 原型范围

- 单入口「今天」首页
- TRY! N4 第 1 课《あいさつの言葉》完整五步学习流
- 标准模式与 10 分钟快速模式
- 本地学习记录、进度与卡点
- 连续两课达到标准后的 N3 切换建议
- 出版社与 Spotify 音频入口

## 内容边界

教材 PDF 仅用于核对课名、书本页码与音轨，不发布教材扫描页，也不重新托管音频。原型记录使用独立的 `localStorage` 键 `jp_try_prototype_v1`，不会读取或覆盖旧工作台数据。

## 预览

直接打开 `prototype/try-listening-workbench/index.html`，或在仓库根目录启动任意静态文件服务器后访问 `/prototype/try-listening-workbench/`。

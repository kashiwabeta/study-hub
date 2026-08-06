# 本地 Codex 交接说明

## 目标

把当前独立原型安全地接入 `kashiwabeta/study-hub`，保留现有线上工作台，不直接覆盖主页面。

目标分支：`prototype/try-listening-workbench`

建议目标目录：`prototype/try-listening-workbench/`

用户已授权本地 Codex 创建分支、提交、推送并创建 Draft PR；没有授权直接合并到 `main`。

## 当前原型

- `index.html`：单文件静态原型，可直接在浏览器打开。
- `README.md`：原型范围与内容边界。
- `CODEX_HANDOFF.md`：本交接文件。

原型已实现：

- 延续旧工作台的米色和纸、朱红印章、明朝体与圆角卡片风格；
- “今天只学一课”的单入口首页；
- TRY! N4 听力恢复期；
- 盲听、对照教材、重听、跟读、练习五步流程；
- 标准模式与 10 分钟快速模式；
- 进度、卡点和设置页面；
- 使用独立 `localStorage` 键 `jp_try_prototype_v1`；
- 连续两课达标后提示切换到 N3；
- 第一课为「あいさつの言葉」，书本 16–17 页，音轨 02–09；
- 只链接出版社和 Spotify 音频，不托管教材或音频。

## 必须遵守的边界

1. 不覆盖或删除现有 `japanese/` 页面、旧学习记录和 Supabase 逻辑。
2. 不把 TRY! 教材 PDF、扫描页或音频提交到 GitHub。
3. 不把原型接入旧的 `jp_daily_v1`、`jp_workbench_v1` 数据。
4. 第一版继续使用独立 `localStorage`，暂不新增登录、付费 API、复杂 SRS、通知或语音评分。
5. 先以独立路径发布和试用，用户确认后再讨论替换旧入口。
6. 不提交本机凭据、Token、`.env` 或其他秘密。

## 本地 Codex 要做的事

1. 检查仓库现状、`README`、现有页面和 Git 状态，不覆盖用户未提交的改动。
2. 从最新默认分支创建 `prototype/try-listening-workbench` 分支。
3. 将本交接包中的原型放到仓库的 `prototype/try-listening-workbench/`。
4. 检查相对路径、外链、移动端显示、localStorage 存取和五步流程。
5. 用本地静态服务器预览，不要只依赖 `file://`。
6. 如有必要，只修复阻塞试用的问题，不擅自扩充范围或重做视觉。
7. 在仓库 README 中添加一个克制的“独立原型预览”入口；不要改现有线上首页入口。
8. 输出变更摘要和测试结果；测试通过后直接提交并推送该分支。
9. 如安装了 GitHub CLI，创建 Draft PR；不要直接合并到 `main`。

## 验收标准

- 桌面端和手机宽度均能完整操作；
- 刷新后学习记录、快速模式选择和卡点仍存在；
- 完成五步能生成结果并推进今日状态；
- 连续两次达标能出现 N3 切换建议；
- 原有线上工作台不受影响；
- Git 变更中没有教材、音频、密钥或无关文件；
- 分支可以推送到 `kashiwabeta/study-hub`。

## 可直接粘贴给本地 Codex 的提示词

```text
请接手这个 study-hub 日语学习工作台原型。

先完整阅读仓库中的 AGENTS.md（如有）、README、现有 japanese 页面，以及我放入仓库的 prototype/try-listening-workbench/CODEX_HANDOFF.md。然后检查 Git 状态，不要覆盖我已有的未提交修改。

目标：把交接包中的独立原型安全接入 kashiwabeta/study-hub，使用分支 prototype/try-listening-workbench，并保留现有线上工作台。原型先放在 prototype/try-listening-workbench/ 独立试用，不替换当前首页。

严格遵守交接文件中的内容边界：不要提交 TRY! 教材 PDF、扫描页或音频；不要接入旧 Supabase 数据；不要擅自增加登录、API、SRS、通知或语音评分。

请先完成以下工作：
1. 检查并理解现有代码和原型；
2. 在本地启动静态预览；
3. 验证桌面端、手机端、五步流程、本地存储、卡点和 N3 切换判断；
4. 修复会阻碍试用的问题；
5. 给仓库 README 添加独立原型入口；
6. 测试通过后直接 commit、push，并尽可能创建 Draft PR；向我汇报文件变更、测试结果、分支与 PR 地址。

我已授权创建分支、commit、push 和 Draft PR，但不要直接合并到 main。
```

## 推送前建议命令

下面的命令仅供本地 Codex 根据仓库实际情况调整，不要机械执行：

```powershell
git status
git fetch origin
git switch -c prototype/try-listening-workbench
python -m http.server 8000
git diff --check
git status --short
```

测试通过后：

```powershell
git add prototype/try-listening-workbench README.md
git commit -m "feat: add TRY listening workbench prototype"
git push -u origin prototype/try-listening-workbench
gh pr create --draft --title "TRY listening workbench prototype" --body "Independent N4 listening recovery prototype for trial use."
```

如果 `gh` 未登录，运行 `gh auth login`；如果没有安装 GitHub CLI，也可先只执行 `git push`，再去 GitHub 网页创建 PR。

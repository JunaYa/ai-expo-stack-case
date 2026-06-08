# Expo Stack App

基于 Expo SDK 56 构建的 UI 组件与布局 Showcase 应用。每个 Showcase 都附带可复制的 AI Prompt，让你在自己的项目中快速实现相同效果。

[English](./README.md)

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Expo SDK 56, React Native 0.85, React 19 |
| 路由 | Expo Router (基于文件) |
| UI 组件库 | gluestack-ui v3 (58+ 组件) |
| 样式 | NativeWind v4 + Tailwind CSS 3 |
| 原生 UI | @expo/ui (MenuView, SegmentedControl) |
| 图标 | expo-symbols (SF Symbols) + lucide-react-native |
| 效果 | expo-glass-effect (Liquid Glass), expo-blur |
| 动画 | react-native-reanimated, @legendapp/motion |
| 无障碍 | react-aria, react-stately |
| 代码检查 | Biome (lint + format 合一) |
| Git Hooks | simple-git-hooks + lint-staged |

## Showcase

### 独立 Case

| Case | 说明 | AI Prompt |
|------|------|-----------|
| Photos Gallery | 浮动玻璃图库与相册 | `使用 NativeTabs 创建浮动玻璃 Photos Gallery，包含 albums、contacts、article、search、MenuView 操作，并设置 minimizeBehavior="automatic"` |
| 2 Tabs | 极简 home + profile | `使用 Expo Router 创建 2 个 Tab 的布局，使用 SF Symbols 图标` |
| 3 Tabs | home, search, profile | `使用 Expo Router Tabs 创建 3 个 Tab 的底部导航` |
| 4 Tabs | + notifications | `创建包含 home、search、notifications、profile 的 4 Tab 布局` |
| 5 Tabs | 完整导航 | `创建包含 home、search、favorites、notifications、profile 的 5 Tab 底栏` |
| 1+3+1 中心 FAB | 凸起的中心操作按钮 | `创建 5 Tab 布局，中间放一个使用 negative margin (-mt-6) 凸起的 FAB 按钮` |
| 2+1+2 对称分割 | 对称布局，中心突出 | `创建对称分割 Tab 栏，左右各 2 个 Tab，中间放一个大号按钮` |
| 玻璃效果 | 原生模糊 Tab 栏 | `使用 expo-router/unstable-native-tabs 的 NativeTabs 创建 iOS 玻璃 Tab 栏，设置 blurEffect 为 systemChromeMaterial` |

### UI 组件 (4 大类, 58+ 组件)

| 分类 | 组件 | AI Prompt |
|------|------|-----------|
| 基础 | Heading, Text, Badge, Card, Avatar, Icon, Divider, Image | `使用 gluestack-ui 创建组件展示页，包含标题（3xl 到 sm）、Badge 变体（info/success/warning/error）、Card 布局（elevated/outline/filled）` |
| 表单 | Button, Input, Checkbox, Radio, Select, Slider, Switch, Textarea | `使用 gluestack-ui 构建表单展示页，包含按钮（solid/outline/link 变体，所有尺寸）、Checkbox 组、Radio 组、带 Portal 的 Select、Slider` |
| 反馈 | Alert, Progress, Spinner, Toast | `使用 gluestack-ui 创建反馈组件演示，包含 Alert（info/success/warning/error）、进度条、加载动画、带位置选项的 Toast 通知` |
| 浮层 | Modal, AlertDialog, Accordion, ActionSheet, FAB, Tooltip | `使用 gluestack-ui 构建浮层展示页，包含模态框、确认对话框、折叠面板、带拖拽指示器的 ActionSheet、浮动操作按钮` |

### iOS 26 原生特性

| 特性 | 组件 | AI Prompt |
|------|------|-----------|
| 上下文菜单 | MenuView (@expo/ui) | `使用 @expo/ui/community/menu 的 MenuView 添加原生 iOS 上下文菜单，包含排序选项（带选中状态）、筛选子菜单、视图选项子菜单（带内联切换区域）` |
| 分段控件 | SegmentedControl (@expo/ui) | `使用 @expo/ui/community/segmented-control 的 SegmentedControl 添加原生分段控件，包含 Photos/Collections 两个分段` |
| Liquid Glass | expo-glass-effect | `使用 expo-glass-effect 的 GlassView 创建玻璃效果按钮，用 isGlassEffectAPIAvailable() 检测可用性，并提供 BlurView 降级方案` |
| 原生 Tabs | NativeTabs (expo-router) | `使用 expo-router/unstable-native-tabs 的 NativeTabs，设置 minimizeBehavior="automatic"，搜索使用 role="search" 独立药丸` |

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm start

# 运行 iOS（@expo/ui 需要原生构建）
pnpm ios

# 代码检查与格式化
pnpm lint
pnpm lint:fix
```

## 项目结构

```
app/
  (tabs)/            # 主应用 Tab（首页、基础、表单、反馈、浮层）
  showcase/          # 独立 Showcase cases
    (glass-pill)/    # Photos Gallery: Albums (MenuView), Search (SegmentedControl)
    (two-tabs)/
    (three-tabs)/
    (four-tabs)/
    (five-tabs)/
    (center-fab)/
    (split-center)/
    (glass-tabs)/
  modal.tsx          # Modal 展示
components/
  ui/                # 58+ gluestack-ui 组件
  showcase/          # 演示页面组件
docs/                # 指南与参考文档
```

## 如何使用 AI Prompt

应用中的每个 Showcase 都对应一个可复制的 Prompt。使用方法：

1. 在应用中浏览 Showcase 效果
2. 在本 README 中找到对应的 Prompt
3. 粘贴到 Claude、ChatGPT 或 Cursor 中
4. 补充你的项目上下文（如 "在我的 Next.js 项目中" 或 "使用我现有的主题"）

所有 Prompt 都是自包含的——每个都能生成可运行的实现，无需引用本项目。

## Pre-commit 钩子

每次提交时通过 simple-git-hooks + lint-staged 自动运行 Biome：

- `*.{ts,tsx,js,jsx}` — `biome check --write`（lint + 格式化）
- `*.json` — `biome format --write`

## License

MIT

# Expo Router Tab Layouts 实战指南

> Expo SDK 56 + expo-router ~56.2.8 | 基于项目实测，可直接复制到新项目使用

---

## 目录

1. [前置依赖](#1-前置依赖)
2. [基础 Tab（2/3/4/5 Tab）](#2-基础-tab)
3. [Center FAB（1+3+1）](#3-center-fab131)
4. [Split Center（2+1+2）](#4-split-center212)
5. [iOS 玻璃效果 Tab（NativeTabs）](#5-ios-玻璃效果-tabnativetabs)
6. [玻璃效果踩坑记录](#6-玻璃效果踩坑记录)
7. [文件结构模板](#7-文件结构模板)

---

## 1. 前置依赖

```json
{
  "expo": "~56.0.8",
  "expo-router": "~56.2.8",
  "expo-symbols": "~56.0.5",
  "expo-blur": "~56.0.3"
}
```

图标方案：`expo-symbols` 的 `SymbolView`，支持跨平台 SF Symbol / Material Icon 映射。

---

## 2. 基础 Tab

所有基础 Tab 使用 `expo-router` 的 `Tabs` 组件。区别仅在于 `Tabs.Screen` 数量和主色。

### 2 Tabs — 最简布局

```
app/(two-tabs)/
  _layout.tsx
  home.tsx
  profile.tsx
```

```tsx
// _layout.tsx
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

export default function TwoTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#6366f1' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'house', android: 'home', web: 'home' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'person', android: 'person', web: 'person' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

### 3 Tabs

增加 `search.tsx`，加一个 `Tabs.Screen`。换一个主色即可：

```tsx
<Tabs screenOptions={{ tabBarActiveTintColor: '#0ea5e9' }}>
  {/* home */}
  <Tabs.Screen name="search" options={{
    title: 'Search',
    tabBarIcon: ({ color }) => (
      <SymbolView name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }} tintColor={color} size={22} />
    ),
  }} />
  {/* profile */}
</Tabs>
```

### 4 Tabs

增加 `notifications.tsx`：

```tsx
<Tabs screenOptions={{ tabBarActiveTintColor: '#f59e0b' }}>
  {/* home, search */}
  <Tabs.Screen name="notifications" options={{
    title: 'Alerts',
    tabBarIcon: ({ color }) => (
      <SymbolView name={{ ios: 'bell', android: 'notifications', web: 'notifications' }} tintColor={color} size={22} />
    ),
  }} />
  {/* profile */}
</Tabs>
```

### 5 Tabs

增加 `favorites.tsx`：

```tsx
<Tabs screenOptions={{ tabBarActiveTintColor: '#10b981' }}>
  {/* home, search */}
  <Tabs.Screen name="favorites" options={{
    title: 'Favorites',
    tabBarIcon: ({ color }) => (
      <SymbolView name={{ ios: 'heart', android: 'favorite', web: 'favorite' }} tintColor={color} size={22} />
    ),
  }} />
  {/* notifications, profile */}
</Tabs>
```

---

## 3. Center FAB（1+3+1）

中间放一个凸起的圆形 FAB 按钮，两侧各两个常规 Tab。

```
app/(center-fab)/
  _layout.tsx
  home.tsx
  search.tsx
  create.tsx      ← FAB 对应的页面
  notifications.tsx
  profile.tsx
```

```tsx
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Icon, AddIcon } from '@/components/ui/icon';

export default function CenterFabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#8b5cf6',
        tabBarStyle: { height: 80, paddingBottom: 16 },
      }}
    >
      {/* home, search 同上 */}

      <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarIcon: () => (
            <View className="-mt-6 h-14 w-14 items-center justify-center rounded-full bg-primary-500 shadow-lg">
              <Icon as={AddIcon} size="xl" className="text-white" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      {/* notifications, profile 同上 */}
    </Tabs>
  );
}
```

**要点：**
- `tabBarStyle: { height: 80, paddingBottom: 16 }` — 给 FAB 凸起留空间
- FAB 图标用 `-mt-6` 上移，`tabBarLabel: () => null` 隐藏文字
- `rounded-full` = 圆形，`rounded-2xl` = 圆角方形（2+1+2 方案用）

---

## 4. Split Center（2+1+2）

和 Center FAB 结构一样，但中心按钮用圆角方形：

```tsx
<Tabs.Screen
  name="create"
  options={{
    title: '',
    tabBarIcon: () => (
      <View className="-mt-6 h-16 w-16 items-center justify-center rounded-2xl bg-error-500 shadow-lg">
        <Icon as={AddIcon} size="xl" className="text-white" />
      </View>
    ),
    tabBarLabel: () => null,
  }}
/>
```

**区别仅在于：** `rounded-full` → `rounded-2xl`，`h-14 w-14` → `h-16 w-16`，换色。

---

## 5. iOS 玻璃效果 Tab（NativeTabs）

### 最终方案：NativeTabs

使用 `expo-router/unstable-native-tabs` 的 `NativeTabs`，底层是 iOS 原生 `UITabBarController`，自带系统级毛玻璃效果。

```
app/(glass-tabs)/
  _layout.tsx
  home.tsx
  search.tsx
  profile.tsx
```

```tsx
// _layout.tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function GlassTabsLayout() {
  return (
    <NativeTabs
      blurEffect="systemChromeMaterial"
      backgroundColor="transparent"
      shadowColor="transparent"
    >
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" drawable="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="magnifyingglass" drawable="search" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.fill" drawable="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

### NativeTabs vs Tabs API 对比

| | `Tabs`（React Navigation） | `NativeTabs`（原生） |
|---|---|---|
| 导入 | `expo-router` | `expo-router/unstable-native-tabs` |
| 底层 | JS BottomTabNavigator | iOS UITabBarController |
| 毛玻璃 | 需手动 BlurView，效果差 | `blurEffect` prop，系统原生 |
| 图标 | `tabBarIcon` render function | `<NativeTabs.Trigger.Icon sf="..." />` |
| 标签 | `title` option | `<NativeTabs.Trigger.Label>` |
| 自定义 | 完全可控样式 | 系统标准外观 |
| 平台 | iOS / Android / Web | iOS / Android（Web 降级） |
| 稳定性 | 稳定 API | `unstable-native-tabs`（unstable） |

### blurEffect 可用值

```
none, systemDefault, extraLight, light, dark, regular, prominent,
systemUltraThinMaterial, systemThinMaterial, systemMaterial,
systemThickMaterial, systemChromeMaterial,
以及所有 Light/Dark 变体（如 systemChromeMaterialDark）
```

推荐 `systemChromeMaterial` — 自动适配系统 light/dark 主题。

### Header 玻璃效果

NativeTabs 下 header 走 Stack 原生配置：

```tsx
<Stack.Screen options={{
  headerTransparent: true,
  headerBlurEffect: "systemMaterial",
  headerTintColor: '#fff',
}} />
```

---

## 6. 玻璃效果踩坑记录

我们尝试了 4 种方案才找到正确实现：

| # | 方案 | 结果 | 原因 |
|---|------|------|------|
| 1 | `BlurView` + hardcoded dark tint | 不透明灰色 | BlurView 在深色背景上没有视觉差异 |
| 2 | 平台专属 `.ios.tsx` 文件 | 文件未被加载 | Metro 通过 `@/` alias 不解析 `.ios.tsx` |
| 3 | 内联 `BlurView` + `position: absolute` | 仍然像灰色 | JS BlurView 缺少 UIVibrancyEffect |
| **4** | **`NativeTabs` + `blurEffect`** | **系统原生毛玻璃** | 使用 UITabBarController 原生 API |

### 关键教训

1. **BlurView 不等于原生 blur** — `expo-blur` 的 BlurView 是 JS 层组件，在 React Navigation 的 JS Tab Bar 上渲染。即使设了 `position: 'absolute'` + `backgroundColor: 'transparent'`，在深色背景上看起来就是不透明灰色。

2. **pnpm + Metro 平台文件** — `.ios.tsx` 通过 `@/` path alias 导入时，Metro bundler 可能不正确解析平台后缀。用内联 `Platform.OS` 判断代替。

3. **NativeTabs 在 SDK 56 已可用** — 虽然路径是 `unstable-native-tabs`，但功能完整，包括 `blurEffect`、SF Symbol 图标、Badge 等。

---

## 7. 文件结构模板

在 Expo Router 中，每种 Tab 布局是一个独立的 route group：

```
app/
  _layout.tsx                    # Root Stack
  (tabs)/                        # 主 Tab 导航
    _layout.tsx                  # Tabs layout
    index.tsx
    settings.tsx
  tab-showcase/                  # Tab 布局展示（二级页面）
    _layout.tsx                  # Stack 包装
    index.tsx                    # 布局列表
    (two-tabs)/
      _layout.tsx                # 2-tab layout
      home.tsx
      profile.tsx
    (glass-tabs)/
      _layout.tsx                # NativeTabs layout
      home.tsx
      search.tsx
      profile.tsx
```

Root layout 注册所有一级路由：

```tsx
// app/_layout.tsx
<Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen name="tab-showcase" options={{ headerShown: false }} />
</Stack>
```

Tab showcase stack 注册每个变体：

```tsx
// app/tab-showcase/_layout.tsx
<Stack>
  <Stack.Screen name="index" options={{ title: 'Tab Layouts' }} />
  <Stack.Screen name="(two-tabs)" options={{ headerShown: false }} />
  <Stack.Screen name="(glass-tabs)" options={{ headerShown: false }} />
</Stack>
```

### 复用到新项目

1. 复制对应的 route group 目录（如 `(glass-tabs)/`）到你的 `app/` 下
2. 在父级 `_layout.tsx` 中注册 `Stack.Screen`
3. 按需替换页面内容，layout 文件可直接使用

# Expo Stack App

A showcase app built with Expo SDK 56 for browsing UI components, tab layouts, and native iOS 26 effects. Each showcase includes a copy-ready AI prompt so you can reproduce the pattern in your own project instantly.

[中文文档](./README.zh.md)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Expo SDK 56, React Native 0.85, React 19 |
| Routing | Expo Router (file-based) |
| UI Components | gluestack-ui v3 (58+ components) |
| Styling | NativeWind v4 + Tailwind CSS 3 |
| Native UI | @expo/ui (MenuView, SegmentedControl) |
| Icons | expo-symbols (SF Symbols) + lucide-react-native |
| Effects | expo-glass-effect (Liquid Glass), expo-blur |
| Animations | react-native-reanimated, @legendapp/motion |
| Accessibility | react-aria, react-stately |
| Linting | Biome (lint + format in one tool) |
| Git Hooks | simple-git-hooks + lint-staged |

## Showcases

### Independent Cases

| Case | Pattern | AI Prompt |
|------|---------|-----------|
| Photos Gallery | Floating glass gallery with albums | `Create a floating glass Photos Gallery using NativeTabs with albums, contacts, article, search, MenuView actions, and minimizeBehavior="automatic"` |
| 2 Tabs | Minimal home + profile | `Create a 2-tab Expo Router layout with home and profile tabs using SF Symbols` |
| 3 Tabs | Home, search, profile | `Create a 3-tab bottom navigation with Expo Router Tabs` |
| 4 Tabs | + notifications | `Create a 4-tab layout with home, search, notifications, and profile` |
| 5 Tabs | Full navigation | `Create a 5-tab bottom bar with home, search, favorites, notifications, profile` |
| 1+3+1 Center FAB | Elevated center action button | `Create a 5-tab layout with a raised center FAB button using negative margin (-mt-6)` |
| 2+1+2 Split Center | Symmetric with prominent center | `Create a split-center tab bar with 2 tabs on each side and an oversized center button` |
| Glass Effect | Native blur tab bar | `Create iOS glass tab bar using NativeTabs from expo-router/unstable-native-tabs with blurEffect systemChromeMaterial` |

### UI Components (4 categories, 58+ components)

| Category | Components | AI Prompt |
|----------|-----------|-----------|
| Base | Heading, Text, Badge, Card, Avatar, Icon, Divider, Image | `Create a component showcase screen with gluestack-ui displaying headings (3xl to sm), badge variants (info/success/warning/error), and card layouts (elevated/outline/filled)` |
| Forms | Button, Input, Checkbox, Radio, Select, Slider, Switch, Textarea | `Build a forms showcase with gluestack-ui buttons (solid/outline/link variants, all sizes), checkbox groups, radio groups, select with portal, and sliders` |
| Feedback | Alert, Progress, Spinner, Toast | `Create a feedback components demo with gluestack-ui alerts (info/success/warning/error), progress bars, spinners, and toast notifications with placement options` |
| Overlays | Modal, AlertDialog, Accordion, ActionSheet, FAB, Tooltip | `Build an overlays showcase with gluestack-ui modals, confirmation alert dialogs, accordions, action sheets with drag indicator, and floating action buttons` |

### Native iOS 26 Features

| Feature | Component | AI Prompt |
|---------|----------|-----------|
| Context Menu | MenuView (@expo/ui) | `Add a native iOS context menu using MenuView from @expo/ui/community/menu with sort options (checkmark state), filter submenu, and view options submenu with inline toggle section` |
| Segmented Control | SegmentedControl (@expo/ui) | `Add a native segmented control using SegmentedControl from @expo/ui/community/segmented-control with Photos/Collections segments` |
| Liquid Glass | expo-glass-effect | `Create a glass-effect button using GlassView from expo-glass-effect with BlurView fallback for older iOS, isGlassEffectAPIAvailable() check` |
| Native Tabs | NativeTabs (expo-router) | `Use NativeTabs from expo-router/unstable-native-tabs with minimizeBehavior="automatic" and role="search" for a separate search pill` |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm start

# Run on iOS (requires native build for @expo/ui)
pnpm ios

# Lint & format
pnpm lint
pnpm lint:fix
```

## Project Structure

```
app/
  (tabs)/            # Main app tabs (Home, Base, Forms, Feedback, Overlays)
  showcase/          # Independent showcase cases
    (glass-pill)/    # Photos Gallery: Albums (MenuView), Search (SegmentedControl)
    (two-tabs)/
    (three-tabs)/
    (four-tabs)/
    (five-tabs)/
    (center-fab)/
    (split-center)/
    (glass-tabs)/
  modal.tsx          # Modal presentation example
components/
  ui/                # 58+ gluestack-ui components
  showcase/          # Demo screen components
docs/                # Guides and references
```

## Using AI Prompts

Every showcase in this app maps to a copy-ready prompt. To use them:

1. Browse the showcase in the app
2. Find the matching prompt in this README
3. Paste it into Claude, ChatGPT, or Cursor
4. Add your project context (e.g., "in my Next.js app" or "using my existing theme")

The prompts are designed to be self-contained — each one produces a working implementation without needing to reference this project.

## Pre-commit Hooks

Biome runs on every commit via simple-git-hooks + lint-staged:

- `*.{ts,tsx,js,jsx}` — `biome check --write` (lint + format)
- `*.json` — `biome format --write`

## License

MIT

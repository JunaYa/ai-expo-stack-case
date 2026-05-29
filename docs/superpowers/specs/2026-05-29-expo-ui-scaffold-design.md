# Expo UI Scaffold — Phase 1 Design Spec

**Date:** 2026-05-29
**Scope:** Core UI scaffold with Expo SDK 56 + NativeWind v4 + gluestack-ui v3 full component suite
**Approach:** Hybrid — CLI-install all components, manually build showcase + polish
**Platforms:** iOS, Android, Web

---

## 1. Core Stack

| Layer | Package | Version |
|-------|---------|---------|
| Framework | Expo SDK | 56 |
| Routing | Expo Router | v4 (ships with SDK 56) |
| Styling | NativeWind + Tailwind CSS | v4.2.4 + v3.4 |
| Components | gluestack-ui | v3 (core + individual packages) |
| Accessibility | react-aria + react-stately | v3.49 / v3.47 |
| Variants | tailwind-variants | v0.1.20 |
| Animations | @legendapp/motion + react-native-reanimated | v2.5 / v4.1 |

## 2. Directory Structure

```
expo-stack-app/
├── app/                          # Expo Router pages
│   ├── _layout.tsx               # Root: GluestackUIProvider + ThemeProvider
│   ├── (tabs)/
│   │   ├── _layout.tsx           # Bottom tab navigation
│   │   ├── index.tsx             # Home — scaffold info + theme toggle
│   │   └── showcase.tsx          # Component showcase — all gluestack components
│   ├── +not-found.tsx            # 404 page
│   └── modal.tsx                 # Modal example using gluestack Modal
├── components/
│   ├── ui/                       # gluestack-ui components (CLI-generated, local)
│   │   ├── gluestack-ui-provider/  # Theme provider (existing)
│   │   ├── button/
│   │   ├── input/
│   │   ├── card/
│   │   └── ... (~30 component dirs)
│   └── showcase/                 # Showcase-specific display components
│       └── component-section.tsx # Reusable section wrapper for showcase
├── lib/
│   └── utils.ts                  # cn() classname merger, shared helpers
├── constants/                    # Reserved for future app constants
├── assets/
│   ├── fonts/
│   └── images/
├── global.css                    # Tailwind directives (@tailwind base/components/utilities)
├── tailwind.config.js            # Theme tokens via CSS variables
├── metro.config.js               # withNativeWind(config, { input: './global.css' })
├── babel.config.js               # babel-preset-expo + nativewind/babel
├── tsconfig.json                 # Path aliases: @/* and tailwind.config
└── nativewind-env.d.ts           # NativeWind type declarations
```

## 3. Component Suite

Install all via `npx gluestack-ui add --all`. Components land in `components/ui/` as local, editable files.

### Full Component List

**Layout:** Box, Center, Divider, HStack, VStack, Grid
**Typography:** Heading, Text
**Forms:** Button, Checkbox, FormControl, Input, Link, Pressable, Radio, Select, Slider, Switch, Textarea
**Data Display:** Badge, Card, Table
**Feedback:** Alert, Progress, Spinner, Toast
**Overlays:** AlertDialog, Drawer, Menu, Modal, Popover, Portal, Tooltip
**Disclosure:** Actionsheet, Accordion, BottomSheet
**Media:** Avatar, Image, Icon
**Other:** Fab, Skeleton

### Component Architecture

Each component follows the same pattern:

1. **Creator** (`@gluestack-ui/[component]`) — headless logic + state management
2. **Styling** (`tailwind-variants`) — variant definitions using Tailwind classes
3. **Accessibility** (`react-aria`) — ARIA attributes, keyboard handling, screen reader support
4. **State** (`react-stately`) — managed state for complex components (Select, Menu, etc.)

All styling uses NativeWind className props. No `StyleSheet.create`, no inline style objects (except where NativeWind doesn't support a specific property on native).

## 4. Theme System

The theme system is already correctly implemented via the gluestack-ui-provider:

- **Token storage:** CSS variables defined in `components/ui/gluestack-ui-provider/config.ts`
- **Light/dark modes:** Separate variable sets for light and dark themes
- **Application:** NativeWind `vars()` function applies tokens to the component tree
- **Web variant:** `index.web.tsx` handles `<html>` class toggling for SSR compatibility
- **Toggle mechanism:** `useColorScheme()` from NativeWind for runtime switching

**Token categories:** primary, secondary, tertiary, error, success, warning, info, typography, outline, background, indicator — each with 0-950 scale.

No modifications needed to the theme system. It's production-ready as-is.

## 5. Showcase Pages

### Home Page (`app/(tabs)/index.tsx`)

- App name and version display
- Theme toggle (light / dark / system) with live preview
- Stack info badges: Expo 56 | NativeWind v4 | gluestack-ui
- Navigation cards linking to showcase sections

### Showcase Page (`app/(tabs)/showcase.tsx`)

Single scrollable page with sections:

1. **Buttons** — solid, outline, link variants; sm/md/lg sizes; disabled; with icons
2. **Forms** — Input with label/helper, Select, Checkbox/Radio/Switch groups, Slider, Textarea
3. **Typography** — Heading levels (h1-h6), Text sizes, Badge inline
4. **Cards & Layout** — Card compositions, HStack/VStack demos, Divider, Grid
5. **Feedback** — Alert (info/warning/error/success), Progress, Spinner, Toast trigger button
6. **Overlays** — Modal trigger, AlertDialog, Popover, Tooltip, Drawer, Actionsheet
7. **Media** — Avatar (sizes + fallback), Icon set, Image with loading
8. **Disclosure** — Accordion, Fab positioned, Skeleton loading

Each section shows components in default state with interactive controls where applicable.

### Modal Page (`app/modal.tsx`)

Rewritten to use gluestack Modal component as a real-world example.

## 6. Cleanup Plan

### Files to Delete

| File | Reason |
|------|--------|
| `components/Themed.tsx` | Replaced by NativeWind className styling |
| `components/EditScreenInfo.tsx` | Demo boilerplate, replaced by showcase |
| `components/StyledText.tsx` | Use gluestack Text component |
| `components/useClientOnlyValue.ts` + `.web.ts` | Not needed with Router v4 |
| `components/useColorScheme.ts` + `.web.ts` | Use NativeWind's `useColorScheme` directly |
| `constants/Colors.ts` | Colors live in CSS variable tokens |

### Files to Update

| File | Change |
|------|--------|
| `app/_layout.tsx` | Remove deleted component imports, clean up |
| `app/(tabs)/_layout.tsx` | Update tab config, remove `useClientOnlyValue` |
| `app/(tabs)/index.tsx` | Complete rewrite to home page |
| `app/(tabs)/two.tsx` | Rename to `showcase.tsx`, complete rewrite |
| `app/modal.tsx` | Rewrite with gluestack Modal |
| `app/+not-found.tsx` | Update to use NativeWind styling |

## 7. Cross-Platform Compatibility Notes

| Component | iOS | Android | Web | Notes |
|-----------|-----|---------|-----|-------|
| BottomSheet | Native | Native | Fallback needed | May need web-specific alternative |
| Drawer | Native gesture | Native gesture | CSS transition | Verify gesture handling |
| Actionsheet | Native modal | Native modal | Portal-based | Test all three |
| Table | ScrollView | ScrollView | HTML table | Verify native rendering |
| Portal | RN Portal | RN Portal | DOM Portal | Different implementations |
| Tooltip | Touch long-press | Touch long-press | Hover | Interaction model differs |

All other components are expected to work identically across platforms via NativeWind's universal styling.

## 8. Configuration (No Changes Needed)

All build configuration files are already correctly set up:

- `metro.config.js` — `withNativeWind(config, { input: './global.css' })`
- `babel.config.js` — `babel-preset-expo` + `nativewind/babel` + module-resolver aliases
- `tailwind.config.js` — `nativewind/preset`, content paths, full theme token definitions
- `tsconfig.json` — `@/*` and `tailwind.config` path aliases
- `global.css` — `@tailwind base/components/utilities`
- `.npmrc` — `legacy-peer-deps=true`

## 9. Success Criteria

1. All ~30 gluestack-ui components installed and rendering without errors
2. Showcase page displays every component on iOS, Android, and Web
3. Light/dark theme toggle works across all platforms
4. No `StyleSheet.create` usage in app code — everything uses NativeWind classes
5. TypeScript strict mode passes with no errors
6. Metro bundler starts without warnings for all three platforms
7. Old boilerplate components fully removed

## 10. Out of Scope (Phase 2)

- State management (Zustand/Jotai)
- Data fetching (TanStack Query)
- Authentication skeleton
- Internationalization (i18n)
- Error boundaries / error reporting
- Analytics hooks
- Testing setup (Jest/Testing Library)
- CI/CD configuration

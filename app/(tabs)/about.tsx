import Constants from 'expo-constants';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { versions } from '@/generated/versions';

function useColors() {
  const { colorScheme } = useColorScheme();
  const dark = colorScheme === 'dark';
  return {
    bg: dark ? '#111' : '#fff',
    card: dark ? '#1c1c1e' : '#f9fafb',
    cardBorder: dark ? '#333' : '#e5e7eb',
    text: dark ? '#f5f5f5' : '#111827',
    textSecondary: dark ? '#9ca3af' : '#6b7280',
    textMuted: dark ? '#6b7280' : '#9ca3af',
    accent: '#6366f1',
    separator: dark ? '#333' : '#e5e7eb',
  };
}

type Item = { name: string; pkg: string; desc: string };
type Section = { title: string; items: Item[] };

const SECTIONS: Section[] = [
  {
    title: 'Core',
    items: [
      { name: 'Expo', pkg: 'expo', desc: 'Universal app platform' },
      { name: 'React Native', pkg: 'react-native', desc: 'Cross-platform UI framework' },
      { name: 'React', pkg: 'react', desc: 'UI rendering library' },
      { name: 'TypeScript', pkg: 'typescript', desc: 'Type-safe JavaScript' },
    ],
  },
  {
    title: 'Routing',
    items: [
      { name: 'Expo Router', pkg: 'expo-router', desc: 'File-based navigation' },
      {
        name: 'react-native-screens',
        pkg: 'react-native-screens',
        desc: 'Native screen containers',
      },
    ],
  },
  {
    title: 'UI & Styling',
    items: [
      { name: 'gluestack-ui', pkg: '@gluestack-ui/core', desc: '58+ accessible components' },
      { name: 'NativeWind', pkg: 'nativewind', desc: 'Tailwind CSS for React Native' },
      { name: 'Tailwind CSS', pkg: 'tailwindcss', desc: 'Utility-first CSS framework' },
      { name: '@expo/ui', pkg: '@expo/ui', desc: 'Native MenuView, SegmentedControl' },
      { name: 'tailwind-variants', pkg: 'tailwind-variants', desc: 'Variant-based styling' },
    ],
  },
  {
    title: 'Icons & Symbols',
    items: [
      { name: 'expo-symbols', pkg: 'expo-symbols', desc: 'SF Symbols cross-platform' },
      { name: 'lucide-react-native', pkg: 'lucide-react-native', desc: 'Open source icon set' },
    ],
  },
  {
    title: 'Effects & Animation',
    items: [
      { name: 'expo-glass-effect', pkg: 'expo-glass-effect', desc: 'iOS 26 Liquid Glass' },
      { name: 'expo-blur', pkg: 'expo-blur', desc: 'Native blur views' },
      {
        name: 'react-native-reanimated',
        pkg: 'react-native-reanimated',
        desc: 'Worklet-based animations',
      },
      { name: '@legendapp/motion', pkg: '@legendapp/motion', desc: 'Declarative animations' },
    ],
  },
  {
    title: 'Accessibility',
    items: [
      { name: 'react-aria', pkg: 'react-aria', desc: 'Accessible UI primitives' },
      { name: 'react-stately', pkg: 'react-stately', desc: 'State management for UI' },
    ],
  },
  {
    title: 'Tooling',
    items: [
      { name: 'Biome', pkg: '@biomejs/biome', desc: 'Lint + format in one tool' },
      { name: 'simple-git-hooks', pkg: 'simple-git-hooks', desc: 'Git hooks manager' },
      { name: 'lint-staged', pkg: 'lint-staged', desc: 'Run checks on staged files' },
    ],
  },
];

type Colors = ReturnType<typeof useColors>;

const LibRow = React.memo(function LibRow({
  item,
  isFirst,
  colors,
}: {
  item: Item;
  isFirst: boolean;
  colors: Colors;
}) {
  return (
    <>
      {!isFirst && <View style={[styles.separator, { backgroundColor: colors.separator }]} />}
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Text style={[styles.libName, { color: colors.text }]}>{item.name}</Text>
          <Text style={[styles.libDesc, { color: colors.textMuted }]}>{item.desc}</Text>
        </View>
        <Text style={[styles.libVersion, { color: colors.accent }]}>
          {versions[item.pkg] ?? '?'}
        </Text>
      </View>
    </>
  );
});

export default function AboutScreen() {
  const insets = useSafeAreaInsets();
  const colors = useColors();
  const appVersion = Constants.expoConfig?.version ?? '1.0.0';
  const sdkVersion = Constants.expoConfig?.sdkVersion ?? '56';

  return (
    <ScrollView
      style={[styles.root, { backgroundColor: colors.bg }]}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 40 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.appName, { color: colors.text }]}>Expo Stack App</Text>
        <Text style={[styles.appVersion, { color: colors.textMuted }]}>
          v{appVersion} · SDK {sdkVersion}
        </Text>
        <Text style={[styles.appDesc, { color: colors.textSecondary }]}>
          UI showcase with copy-ready AI prompts for rapid implementation
        </Text>
      </View>

      {SECTIONS.map(section => (
        <View key={section.title} style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
            {section.title}
          </Text>
          <View
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
          >
            {section.items.map((item, i) => (
              <LibRow key={item.pkg} item={item} isFirst={i === 0} colors={colors} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appDesc: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: '800',
  },
  appVersion: {
    fontSize: 13,
    fontWeight: '500',
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  content: {
    gap: 24,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
    paddingTop: 8,
  },
  libDesc: {
    fontSize: 12,
  },
  libName: {
    fontSize: 15,
    fontWeight: '600',
  },
  libVersion: {
    fontSize: 14,
    fontWeight: '700',
  },
  root: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  rowLeft: {
    flex: 1,
    gap: 2,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingLeft: 4,
    textTransform: 'uppercase',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
  },
});

import Constants from 'expo-constants';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SECTIONS: { title: string; items: { name: string; version: string; desc: string }[] }[] = [
  {
    title: 'Core',
    items: [
      { name: 'Expo', version: '56', desc: 'Universal app platform' },
      { name: 'React Native', version: '0.85', desc: 'Cross-platform UI framework' },
      { name: 'React', version: '19', desc: 'UI rendering library' },
      { name: 'TypeScript', version: '6.0', desc: 'Type-safe JavaScript' },
    ],
  },
  {
    title: 'Routing',
    items: [
      { name: 'Expo Router', version: '56', desc: 'File-based navigation' },
      { name: 'react-native-screens', version: '4.25', desc: 'Native screen containers' },
    ],
  },
  {
    title: 'UI & Styling',
    items: [
      { name: 'gluestack-ui', version: '3.0', desc: '58+ accessible components' },
      { name: 'NativeWind', version: '4.2', desc: 'Tailwind CSS for React Native' },
      { name: 'Tailwind CSS', version: '3.4', desc: 'Utility-first CSS framework' },
      { name: '@expo/ui', version: '56', desc: 'Native MenuView, SegmentedControl' },
      { name: 'tailwind-variants', version: '0.1', desc: 'Variant-based styling' },
    ],
  },
  {
    title: 'Icons & Symbols',
    items: [
      { name: 'expo-symbols', version: '56', desc: 'SF Symbols cross-platform' },
      { name: 'lucide-react-native', version: '0.510', desc: 'Open source icon set' },
    ],
  },
  {
    title: 'Effects & Animation',
    items: [
      { name: 'expo-glass-effect', version: '56', desc: 'iOS 26 Liquid Glass' },
      { name: 'expo-blur', version: '56', desc: 'Native blur views' },
      { name: 'react-native-reanimated', version: '4.3', desc: 'Worklet-based animations' },
      { name: '@legendapp/motion', version: '2.4', desc: 'Declarative animations' },
    ],
  },
  {
    title: 'Accessibility',
    items: [
      { name: 'react-aria', version: '3.49', desc: 'Accessible UI primitives' },
      { name: 'react-stately', version: '3.47', desc: 'State management for UI' },
    ],
  },
  {
    title: 'Tooling',
    items: [
      { name: 'Biome', version: '2.4', desc: 'Lint + format in one tool' },
      { name: 'simple-git-hooks', version: '2.13', desc: 'Git hooks manager' },
      { name: 'lint-staged', version: '17.0', desc: 'Run checks on staged files' },
    ],
  },
];

export default function AboutScreen() {
  const insets = useSafeAreaInsets();
  const appVersion = Constants.expoConfig?.version ?? '1.0.0';
  const sdkVersion = Constants.expoConfig?.sdkVersion ?? '56';

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 40 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.appName}>Expo Stack App</Text>
        <Text style={styles.appVersion}>
          v{appVersion} · SDK {sdkVersion}
        </Text>
        <Text style={styles.appDesc}>
          UI showcase with copy-ready AI prompts for rapid implementation
        </Text>
      </View>

      {SECTIONS.map(section => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.card}>
            {section.items.map((item, i) => (
              <View key={item.name}>
                {i > 0 ? <View style={styles.separator} /> : null}
                <View style={styles.row}>
                  <View style={styles.rowLeft}>
                    <Text style={styles.libName}>{item.name}</Text>
                    <Text style={styles.libDesc}>{item.desc}</Text>
                  </View>
                  <Text style={styles.libVersion}>{item.version}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appDesc: {
    color: '#6b7280',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  appName: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '800',
  },
  appVersion: {
    color: '#9ca3af',
    fontSize: 13,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#f9fafb',
    borderColor: '#e5e7eb',
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
    color: '#9ca3af',
    fontSize: 12,
  },
  libName: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '600',
  },
  libVersion: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '700',
  },
  root: {
    backgroundColor: '#fff',
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
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingLeft: 4,
    textTransform: 'uppercase',
  },
  separator: {
    backgroundColor: '#e5e7eb',
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
  },
});

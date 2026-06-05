import Constants from 'expo-constants';
import { Link } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  };
}

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

      <Link href="/licenses" asChild>
        <Pressable
          style={({ pressed }) => [
            styles.licensesLink,
            {
              backgroundColor: colors.card,
              borderColor: colors.cardBorder,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <View style={styles.licensesRow}>
            <Text style={[styles.licensesText, { color: colors.text }]}>Open Source Licenses</Text>
            <Text style={[styles.licensesChevron, { color: colors.textMuted }]}>{'>'}</Text>
          </View>
        </Pressable>
      </Link>
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
  root: {
    flex: 1,
  },
  licensesLink: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  licensesRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  licensesText: {
    fontSize: 15,
    fontWeight: '600',
  },
  licensesChevron: {
    fontSize: 18,
    fontWeight: '600',
  },
});

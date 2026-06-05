import { useColorScheme } from 'nativewind';
import React, { useCallback, useMemo } from 'react';
import { FlatList, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import data from '@/generated/licenses.json';

type License = {
  name: string;
  version: string;
  licenses: string;
  repository: string | null;
  publisher: string | null;
};

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
    badgeBg: dark ? '#2a2647' : '#eef2ff',
  };
}

type Colors = ReturnType<typeof useColors>;

const LicenseRow = React.memo(function LicenseRow({
  item,
  colors,
}: {
  item: License;
  colors: Colors;
}) {
  const handlePress = useCallback(() => {
    if (!item.repository) return;
    const url = item.repository.replace(/^git\+/, '').replace(/\.git$/, '');
    if (url.startsWith('http')) Linking.openURL(url);
  }, [item.repository]);

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
      <View style={styles.cardHeader}>
        <View style={styles.nameRow}>
          <Text style={[styles.pkgName, { color: colors.text }]} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.pkgVersion, { color: colors.textMuted }]}>{item.version}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: colors.badgeBg }]}>
          <Text style={[styles.badgeText, { color: colors.accent }]}>{item.licenses}</Text>
        </View>
      </View>
      {item.publisher ? (
        <Text style={[styles.publisher, { color: colors.textSecondary }]}>{item.publisher}</Text>
      ) : null}
      {item.repository ? (
        <Pressable onPress={handlePress}>
          <Text style={[styles.link, { color: colors.accent }]} numberOfLines={1}>
            {item.repository.replace(/^https?:\/\/(www\.)?github\.com\//, '')}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
});

export default function LicensesScreen() {
  const insets = useSafeAreaInsets();
  const colors = useColors();
  const licenses = useMemo(() => data as License[], []);

  const renderItem = useCallback(
    ({ item }: { item: License }) => <LicenseRow item={item} colors={colors} />,
    [colors],
  );
  const keyExtractor = useCallback((item: License) => `${item.name}@${item.version}`, []);

  return (
    <FlatList
      data={licenses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={[styles.root, { backgroundColor: colors.bg }]}
      contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + 40 }]}
      ListHeaderComponent={
        <Text style={[styles.header, { color: colors.textSecondary }]}>
          {licenses.length} production dependencies
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    padding: 14,
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  header: {
    fontSize: 13,
    marginBottom: 12,
    textAlign: 'center',
  },
  link: {
    fontSize: 13,
    marginTop: 2,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  nameRow: {
    alignItems: 'baseline',
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    marginRight: 8,
  },
  pkgName: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  pkgVersion: {
    fontSize: 12,
  },
  publisher: {
    fontSize: 13,
  },
  root: {
    flex: 1,
  },
});

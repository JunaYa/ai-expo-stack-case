import { SegmentedControl } from '@expo/ui/community/segmented-control';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  recentSearches as RECENT_SEARCHES,
  searchSuggestions as SUGGESTIONS,
} from '@/mocks/glass-pill/photos.mock';

type Segment = 'photos' | 'collections';

export default function SearchScreen() {
  const [segment, setSegment] = useState<Segment>('photos');
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 16 }]}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
        </View>

        <SegmentedControl
          values={['Photos', 'Collections']}
          selectedIndex={segment === 'photos' ? 0 : 1}
          onValueChange={v => setSegment(v === 'Photos' ? 'photos' : 'collections')}
          style={styles.segmentedControl}
        />

        {segment === 'photos' ? (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Suggestions</Text>
              <View style={styles.suggestionGrid}>
                {SUGGESTIONS.map(item => (
                  <View key={item.label} style={styles.suggestionCard}>
                    <View style={[styles.suggestionIcon, { backgroundColor: item.color }]}>
                      <SymbolView name={item.sfIcon} tintColor="#fff" size={20} />
                    </View>
                    <Text style={styles.suggestionLabel} numberOfLines={1}>
                      {item.label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent</Text>
              {RECENT_SEARCHES.map(term => (
                <View key={term} style={styles.recentRow}>
                  <SymbolView name="clock.arrow.circlepath" tintColor="#888" size={18} />
                  <Text style={styles.recentText}>{term}</Text>
                </View>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.emptyState}>
            <SymbolView name="rectangle.stack" tintColor="#c7c7cc" size={48} />
            <Text style={styles.emptyTitle}>No Results</Text>
            <Text style={styles.emptyBody}>Search for albums, people, places, or categories.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 24,
    paddingBottom: 150,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  emptyBody: {
    color: '#8e8e93',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 80,
  },
  emptyTitle: {
    color: '#3c3c43',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 10,
  },
  recentText: {
    color: '#3478f6',
    flex: 1,
    fontSize: 17,
  },
  root: {
    backgroundColor: '#f7f5f1',
    flex: 1,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: '#3c3c43',
    fontSize: 20,
    fontWeight: '800',
  },
  segmentedControl: {
    height: 32,
  },
  suggestionCard: {
    alignItems: 'center',
    gap: 6,
    width: '30%',
  },
  suggestionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  suggestionIcon: {
    alignItems: 'center',
    borderRadius: 14,
    height: 56,
    justifyContent: 'center',
    width: '100%',
  },
  suggestionLabel: {
    color: '#3c3c43',
    fontSize: 13,
    fontWeight: '500',
  },
  title: {
    color: '#101010',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 38,
  },
});

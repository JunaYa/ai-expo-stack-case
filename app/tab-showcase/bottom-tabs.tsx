import type { MenuAction, NativeActionEvent } from '@expo/ui/community/menu';
import { MenuView } from '@expo/ui/community/menu';
import { SegmentedControl } from '@expo/ui/community/segmented-control';
import { BlurView } from 'expo-blur';
import { GlassView, isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { AppleIcon } from 'react-native-bottom-tabs';
import TabView from 'react-native-bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IS_IOS = Platform.OS === 'ios';
const GLASS_AVAILABLE = IS_IOS && isGlassEffectAPIAvailable();

// --- Route definitions ---

type Route = {
  key: string;
  title: string;
  focusedIcon?: AppleIcon;
  role?: 'search';
};

const ROUTES: Route[] = [
  {
    key: 'library',
    title: 'Library',
    focusedIcon: { sfSymbol: 'photo.on.rectangle.angled' },
  },
  {
    key: 'collections',
    title: 'Collections',
    focusedIcon: { sfSymbol: 'archivebox' },
  },
  {
    key: 'search',
    title: 'Search',
    focusedIcon: { sfSymbol: 'magnifyingglass' },
    role: 'search',
  },
];

// --- Library tab content ---

const PHOTOS = [
  { title: 'Leaves', color: '#4caf50' },
  { title: 'Wildflower', color: '#ff9800' },
  { title: 'Waterfall', color: '#2196f3' },
  { title: 'Rapids', color: '#607d8b' },
  { title: 'Mist', color: '#9c27b0' },
  { title: 'Garden', color: '#e91e63' },
];

type SortOption = 'recent' | 'date';

function LibraryScreen() {
  const insets = useSafeAreaInsets();
  const [sort, setSort] = useState<SortOption>('date');

  const menuActions: MenuAction[] = [
    {
      id: 'sort-recent',
      title: 'Sort by Recently Added',
      image: 'arrow.up.arrow.down',
      state: sort === 'recent' ? 'on' : 'off',
    },
    {
      id: 'sort-date',
      title: 'Sort by Date Captured',
      image: 'calendar',
      state: sort === 'date' ? 'on' : 'off',
    },
  ];

  const handleMenu = ({ nativeEvent: { event } }: NativeActionEvent) => {
    if (event === 'sort-recent') setSort('recent');
    if (event === 'sort-date') setSort('date');
  };

  return (
    <View style={styles.scene}>
      <ScrollView
        contentContainerStyle={[styles.sceneContent, { paddingTop: insets.top + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sceneHeader}>
          <View>
            <Text style={styles.sceneTitle}>Library</Text>
            <Text style={styles.sceneSubtitle}>{PHOTOS.length} Photos</Text>
          </View>
          <MenuView actions={menuActions} onPressAction={handleMenu}>
            <GlassButton icon="line.3.horizontal.decrease.circle" />
          </MenuView>
        </View>

        <View style={styles.photoGrid}>
          {PHOTOS.map(p => (
            <View key={p.title} style={[styles.photoCell, { backgroundColor: p.color }]}>
              <SymbolView name="photo" tintColor="rgba(255,255,255,0.5)" size={24} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// --- Collections tab content ---

const COLLECTIONS = [
  { title: 'Favorites', icon: 'heart.fill' as const, count: 42, color: '#ff3b30' },
  { title: 'Nature', icon: 'leaf.fill' as const, count: 86, color: '#34c759' },
  { title: 'Travel', icon: 'airplane' as const, count: 215, color: '#ff9500' },
  { title: 'Portraits', icon: 'person.crop.circle' as const, count: 128, color: '#af52de' },
];

function CollectionsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.scene}>
      <ScrollView
        contentContainerStyle={[styles.sceneContent, { paddingTop: insets.top + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sceneTitle}>Collections</Text>
        <Text style={[styles.sceneSubtitle, { marginBottom: 20 }]}>
          {COLLECTIONS.length} albums
        </Text>

        <View style={styles.collectionGrid}>
          {COLLECTIONS.map(c => (
            <View key={c.title} style={styles.collectionCard}>
              <View style={[styles.collectionCover, { backgroundColor: c.color }]}>
                <SymbolView name={c.icon} tintColor="rgba(255,255,255,0.8)" size={28} />
              </View>
              <Text style={styles.collectionTitle} numberOfLines={1}>
                {c.title}
              </Text>
              <Text style={styles.collectionCount}>{c.count}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// --- Search tab content ---

type Segment = 'photos' | 'collections';

const SUGGESTIONS = [
  { label: 'Nature', icon: 'leaf.fill' as const, color: '#34c759' },
  { label: 'Travel', icon: 'airplane' as const, color: '#ff9500' },
  { label: 'Food', icon: 'fork.knife' as const, color: '#ff3b30' },
  { label: 'Pets', icon: 'pawprint.fill' as const, color: '#af52de' },
  { label: 'Selfies', icon: 'person.crop.circle' as const, color: '#ff2d55' },
  { label: 'Screenshots', icon: 'camera.viewfinder' as const, color: '#5856d6' },
];

function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [segment, setSegment] = useState<Segment>('photos');

  return (
    <View style={styles.scene}>
      <ScrollView
        contentContainerStyle={[styles.sceneContent, { paddingTop: insets.top + 16 }]}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sceneTitle}>Search</Text>

        <SegmentedControl
          values={['Photos', 'Collections']}
          selectedIndex={segment === 'photos' ? 0 : 1}
          onValueChange={v => setSegment(v === 'Photos' ? 'photos' : 'collections')}
          style={styles.segmented}
        />

        {segment === 'photos' ? (
          <View style={styles.sectionGap}>
            <Text style={styles.sectionLabel}>Suggestions</Text>
            <View style={styles.suggestionGrid}>
              {SUGGESTIONS.map(s => (
                <View key={s.label} style={styles.suggestionCard}>
                  <View style={[styles.suggestionIcon, { backgroundColor: s.color }]}>
                    <SymbolView name={s.icon} tintColor="#fff" size={20} />
                  </View>
                  <Text style={styles.suggestionLabel}>{s.label}</Text>
                </View>
              ))}
            </View>
          </View>
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

// --- Glass button ---

function GlassButton({ icon }: { icon: string }) {
  const sym = <SymbolView name={icon as any} tintColor="#111315" size={20} weight="medium" />;

  if (GLASS_AVAILABLE) {
    return (
      <GlassView
        colorScheme="light"
        glassEffectStyle="regular"
        isInteractive
        style={styles.glassBtn}
        tintColor="rgba(255,255,255,0.78)"
      >
        {sym}
      </GlassView>
    );
  }

  return (
    <View style={[styles.glassBtn, styles.glassBtnFallback]}>
      {IS_IOS ? (
        <BlurView intensity={72} style={StyleSheet.absoluteFill} tint="systemChromeMaterialLight" />
      ) : null}
      {sym}
    </View>
  );
}

// --- Main showcase screen ---

export default function BottomTabsShowcase() {
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes: ROUTES }}
      onIndexChange={setIndex}
      renderScene={({ route }) => {
        switch (route.key) {
          case 'library':
            return <LibraryScreen />;
          case 'collections':
            return <CollectionsScreen />;
          case 'search':
            return <SearchScreen />;
          default:
            return null;
        }
      }}
      minimizeBehavior="automatic"
      hapticFeedbackEnabled
    />
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  collectionCard: {
    gap: 4,
    width: '47%',
  },
  collectionCount: {
    color: '#888',
    fontSize: 13,
  },
  collectionCover: {
    alignItems: 'center',
    borderRadius: 14,
    height: 140,
    justifyContent: 'center',
  },
  collectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  collectionTitle: {
    color: '#101010',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
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
  glassBtn: {
    alignItems: 'center',
    borderRadius: 22,
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    height: 44,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 44,
  },
  glassBtnFallback: {
    backgroundColor: 'rgba(255,255,255,0.72)',
    borderColor: 'rgba(255,255,255,0.9)',
    borderWidth: 1,
  },
  photoCell: {
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
    width: '32%',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
  scene: {
    backgroundColor: '#f7f5f1',
    flex: 1,
  },
  sceneContent: {
    gap: 20,
    paddingBottom: 150,
    paddingHorizontal: 20,
  },
  sceneHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sceneSubtitle: {
    color: '#565656',
    fontSize: 14,
    marginTop: 2,
  },
  sceneTitle: {
    color: '#101010',
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 38,
  },
  sectionGap: {
    gap: 12,
  },
  sectionLabel: {
    color: '#3c3c43',
    fontSize: 20,
    fontWeight: '800',
  },
  segmented: {
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
});

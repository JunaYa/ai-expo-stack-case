import type { MenuAction, NativeActionEvent } from '@expo/ui/community/menu';
import { MenuView } from '@expo/ui/community/menu';
import { BlurView } from 'expo-blur';
import { GlassView, isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IS_IOS = Platform.OS === 'ios';
const GLASS_AVAILABLE = IS_IOS && isGlassEffectAPIAvailable();

type SortOption = 'recent' | 'date' | 'title';
type FilterOption = 'all' | 'favorites' | 'edited' | 'photos' | 'videos' | 'screenshots' | 'shared';
type ViewOption = { showScreenshots: boolean; showShared: boolean };

const ALBUMS = [
  { title: 'Recents', count: 1284, color: '#3478f6' },
  { title: 'Favorites', count: 42, color: '#ff3b30' },
  { title: 'Nature', count: 86, color: '#34c759' },
  { title: 'Travel', count: 215, color: '#ff9500' },
  { title: 'Architecture', count: 63, color: '#af52de' },
  { title: 'Portraits', count: 128, color: '#ff2d55' },
];

function buildMenuActions(
  sort: SortOption,
  filter: FilterOption,
  viewOptions: ViewOption,
): MenuAction[] {
  return [
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
    {
      id: 'sort-title',
      title: 'Sort by Title',
      image: 'textformat',
      state: sort === 'title' ? 'on' : 'off',
    },
    {
      id: 'filter',
      title: 'Filter',
      image: 'line.3.horizontal.decrease.circle',
      subactions: [
        {
          id: 'filter-all',
          title: 'All Items',
          image: 'square.grid.2x2',
          state: filter === 'all' ? 'on' : 'off',
        },
        {
          id: 'filter-favorites',
          title: 'Favorites',
          image: 'heart',
          state: filter === 'favorites' ? 'on' : 'off',
        },
        {
          id: 'filter-edited',
          title: 'Edited',
          image: 'slider.horizontal.3',
          state: filter === 'edited' ? 'on' : 'off',
        },
        {
          id: 'filter-photos',
          title: 'Photos',
          image: 'photo',
          state: filter === 'photos' ? 'on' : 'off',
        },
        {
          id: 'filter-videos',
          title: 'Videos',
          image: 'video',
          state: filter === 'videos' ? 'on' : 'off',
        },
        {
          id: 'filter-screenshots',
          title: 'Screenshots',
          image: 'camera.viewfinder',
          state: filter === 'screenshots' ? 'on' : 'off',
        },
        {
          id: 'filter-shared',
          title: 'Shared With You',
          image: 'person.2',
          state: filter === 'shared' ? 'on' : 'off',
        },
      ],
    },
    {
      id: 'view-options',
      title: 'View Options',
      image: 'eye',
      subactions: [
        { id: 'view-zoom-in', title: 'Zoom In', image: 'plus.magnifyingglass' },
        { id: 'view-zoom-out', title: 'Zoom Out', image: 'minus.magnifyingglass' },
        {
          id: 'show-section',
          title: 'Show:',
          displayInline: true,
          subactions: [
            {
              id: 'view-screenshots',
              title: 'Screenshots',
              image: 'camera.viewfinder',
              state: viewOptions.showScreenshots ? 'on' : 'off',
            },
            {
              id: 'view-shared',
              title: 'Shared with You',
              image: 'person.2',
              state: viewOptions.showShared ? 'on' : 'off',
            },
          ],
        },
      ],
    },
  ];
}

export default function AlbumsScreen() {
  const [sort, setSort] = useState<SortOption>('date');
  const [filter, setFilter] = useState<FilterOption>('all');
  const [viewOptions, setViewOptions] = useState<ViewOption>({
    showScreenshots: true,
    showShared: true,
  });

  const handleMenuAction = ({ nativeEvent: { event } }: NativeActionEvent) => {
    if (event.startsWith('sort-')) {
      setSort(event.replace('sort-', '') as SortOption);
    } else if (event.startsWith('filter-')) {
      setFilter(event.replace('filter-', '') as FilterOption);
    } else if (event === 'view-screenshots') {
      setViewOptions(prev => ({ ...prev, showScreenshots: !prev.showScreenshots }));
    } else if (event === 'view-shared') {
      setViewOptions(prev => ({ ...prev, showShared: !prev.showShared }));
    }
  };

  const actions = buildMenuActions(sort, filter, viewOptions);
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Albums</Text>
            <Text style={styles.subtitle}>
              {ALBUMS.length} albums · {filter !== 'all' ? filter : 'All items'}
            </Text>
          </View>
        </View>

        <View style={styles.grid}>
          {ALBUMS.map(album => (
            <View key={album.title} style={styles.albumCard}>
              <View style={[styles.albumCover, { backgroundColor: album.color }]}>
                <SymbolView name="photo.on.rectangle" tintColor="rgba(255,255,255,0.7)" size={32} />
              </View>
              <Text style={styles.albumTitle} numberOfLines={1}>
                {album.title}
              </Text>
              <Text style={styles.albumCount}>{album.count}</Text>
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>MenuView</Text>
          <Text style={styles.infoBody}>
            Native UIMenu on iOS with Liquid Glass material. Supports checkmark state, SF Symbol
            icons, submenus, and inline sections — all via @expo/ui.
          </Text>
        </View>
      </ScrollView>

      <MenuView
        actions={actions}
        onPressAction={handleMenuAction}
        style={[styles.menuAnchor, { top: insets.top + 8 }]}
      >
        <GlassMenuButton />
      </MenuView>
    </View>
  );
}

function GlassMenuButton() {
  const icon = <SymbolView name="ellipsis" tintColor="#111315" size={20} weight="bold" />;

  if (GLASS_AVAILABLE) {
    return (
      <GlassView
        colorScheme="light"
        glassEffectStyle="regular"
        isInteractive
        style={styles.menuButton}
        tintColor="rgba(255, 255, 255, 0.78)"
      >
        {icon}
      </GlassView>
    );
  }

  return (
    <View style={[styles.menuButton, styles.menuButtonFallback]}>
      {IS_IOS ? (
        <BlurView intensity={72} style={StyleSheet.absoluteFill} tint="systemChromeMaterialLight" />
      ) : null}
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  albumCard: {
    gap: 4,
    width: '47%',
  },
  albumCount: {
    color: '#888',
    fontSize: 13,
  },
  albumCover: {
    alignItems: 'center',
    borderRadius: 14,
    height: 160,
    justifyContent: 'center',
  },
  albumTitle: {
    color: '#101010',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  content: {
    gap: 24,
    paddingBottom: 150,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBody: {
    color: '#b7b7b7',
    fontSize: 15,
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: '#191919',
    borderRadius: 22,
    gap: 10,
    padding: 24,
  },
  infoTitle: {
    color: '#e8e8e8',
    fontSize: 20,
    fontWeight: '800',
  },
  menuAnchor: {
    position: 'absolute',
    right: 20,
    zIndex: 10,
  },
  menuButton: {
    alignItems: 'center',
    borderRadius: 22,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    height: 44,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 44,
  },
  menuButtonFallback: {
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    borderColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
  },
  root: {
    backgroundColor: '#f7f5f1',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  subtitle: {
    color: '#565656',
    fontSize: 14,
    marginTop: 2,
  },
  title: {
    color: '#101010',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 38,
  },
});

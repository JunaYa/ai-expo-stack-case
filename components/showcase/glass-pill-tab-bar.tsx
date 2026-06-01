import { BlurView } from 'expo-blur';
import { GlassView, isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { router } from 'expo-router';
import { BookText, Music, Search, UsersRound } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';

const IS_IOS = Platform.OS === 'ios';
const GLASS_AVAILABLE = IS_IOS && isGlassEffectAPIAvailable();
const ACTIVE_COLOR = '#ff3b30';
const INACTIVE_COLOR = '#111315';

type GlassSurfaceProps = {
  children: ReactNode;
  interactive?: boolean;
  style: StyleProp<ViewStyle>;
};

export function GlassPillTabBar({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) {
  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, { bottom: Math.max(insets.bottom, 14) }]}
    >
      <View style={styles.barRow}>
        <GlassSurface interactive style={styles.tabPill}>
          <View style={styles.tabRow}>
            {state.routes.map((route, index) => {
              const focused = state.index === index;
              const descriptor = descriptors[route.key];
              const label = getRouteLabel(route.name, descriptor.options.title);
              const tintColor = focused ? ACTIVE_COLOR : INACTIVE_COLOR;

              const onPress = () => {
                const event = navigation.emit({
                  canPreventDefault: true,
                  target: route.key,
                  type: 'tabPress',
                });

                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              return (
                <Pressable
                  accessibilityLabel={`${label} tab`}
                  accessibilityRole="button"
                  accessibilityState={focused ? { selected: true } : undefined}
                  key={route.key}
                  onPress={onPress}
                  style={({ pressed }) => [
                    styles.tabButton,
                    { opacity: pressed ? 0.72 : 1 },
                  ]}
                >
                  {focused ? <View style={styles.selectedTab} /> : null}
                  <View style={styles.iconWrap}>
                    {renderRouteIcon(route.name, tintColor)}
                    {route.name === 'contacts' ? (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                      </View>
                    ) : null}
                  </View>
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={[styles.tabLabel, { color: tintColor }]}
                  >
                    {label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </GlassSurface>

        <GlassSurface interactive style={styles.searchButton}>
          <Pressable
            accessibilityLabel="Open modal"
            accessibilityRole="button"
            onPress={() => router.push('/modal')}
            style={({ pressed }) => [
              styles.searchPressable,
              { opacity: pressed ? 0.72 : 1 },
            ]}
          >
            <Search color={INACTIVE_COLOR} size={34} strokeWidth={2.1} />
          </Pressable>
        </GlassSurface>
      </View>
    </View>
  );
}

function GlassSurface({ children, interactive, style }: GlassSurfaceProps) {
  if (GLASS_AVAILABLE) {
    return (
      <GlassView
        colorScheme="light"
        glassEffectStyle="regular"
        isInteractive={interactive}
        style={style}
        tintColor="rgba(255, 255, 255, 0.78)"
      >
        {children}
      </GlassView>
    );
  }

  return (
    <View style={[style, styles.fallbackSurface]}>
      {IS_IOS ? (
        <BlurView
          intensity={72}
          style={StyleSheet.absoluteFill}
          tint="systemChromeMaterialLight"
        />
      ) : null}
      <View style={styles.fallbackTint} />
      {children}
    </View>
  );
}

function getRouteLabel(routeName: string, title?: string) {
  if (title) {
    return title;
  }

  if (routeName === 'article') {
    return 'Article';
  }

  if (routeName === 'contacts') {
    return 'Contacts';
  }

  return 'Albums';
}

function renderRouteIcon(routeName: string, color: string) {
  if (routeName === 'article') {
    return <BookText color={color} size={29} strokeWidth={2.35} />;
  }

  if (routeName === 'contacts') {
    return <UsersRound color={color} size={31} strokeWidth={2.25} />;
  }

  return <Music color={color} size={29} strokeWidth={2.35} />;
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: '#ff4757',
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    minWidth: 30,
    paddingHorizontal: 6,
    position: 'absolute',
    right: 18,
    top: -12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 20,
  },
  barRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    maxWidth: 620,
    width: '100%',
  },
  fallbackSurface: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  fallbackTint: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  iconWrap: {
    alignItems: 'center',
    height: 34,
    justifyContent: 'center',
    width: '100%',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.68)',
    borderColor: 'rgba(255, 255, 255, 0.82)',
    borderRadius: 37,
    borderWidth: 1,
    boxShadow: '0 14px 30px rgba(15, 23, 42, 0.2)',
    height: 74,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 74,
  },
  searchPressable: {
    alignItems: 'center',
    height: 74,
    justifyContent: 'center',
    width: 74,
  },
  selectedTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.34)',
    borderRadius: 34,
    borderWidth: 1,
    bottom: 6,
    left: 4,
    position: 'absolute',
    right: 4,
    top: 6,
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
    gap: 2,
    height: 74,
    justifyContent: 'center',
    minWidth: 0,
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0,
    maxWidth: '90%',
  },
  tabPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.64)',
    borderColor: 'rgba(255, 255, 255, 0.82)',
    borderRadius: 37,
    borderWidth: 1,
    boxShadow: '0 14px 30px rgba(15, 23, 42, 0.18)',
    flex: 1,
    height: 74,
    overflow: 'hidden',
  },
  tabRow: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  wrapper: {
    alignItems: 'center',
    left: 0,
    paddingHorizontal: 18,
    position: 'absolute',
    right: 0,
  },
});

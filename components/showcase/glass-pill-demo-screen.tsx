import { Clock3 } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type GlassPillDemoScreenProps = {
  variant: 'article' | 'contacts' | 'albums';
};

const SCREEN_COPY = {
  article: {
    eyebrow: 'Editorial',
    title: 'Where does it come from?',
    subtitle:
      'A reading surface designed so the floating glass controls pick up the page underneath.',
    primary: 'Serif samples',
    secondary: 'Layout notes',
  },
  contacts: {
    eyebrow: 'People',
    title: 'Creative contacts',
    subtitle:
      'Quickly move between people, notes, and context while the controls stay close at hand.',
    primary: '18 online',
    secondary: '4 favorites',
  },
  albums: {
    eyebrow: 'Library',
    title: 'Listening shelf',
    subtitle:
      'A media browsing surface with enough visual texture to show the glass treatment clearly.',
    primary: '42 tracks',
    secondary: '6 albums',
  },
} as const;

const RECENT_ITEMS = [
  'Tab navigation patterns',
  'Glass morphism UI',
  'Expo Router v4',
  'NativeWind setup',
];

export function GlassPillDemoScreen({ variant }: GlassPillDemoScreenProps) {
  const copy = SCREEN_COPY[variant];

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.bookSpread}>
          <View style={[styles.bookPage, styles.leftPage]}>
            <View style={styles.leaf} />
            <View style={styles.pageLineWide} />
            <View style={styles.pageLine} />
            <View style={styles.pageLineShort} />
          </View>
          <View style={[styles.bookPage, styles.rightPage]}>
            <Text style={styles.pageTitle}>Navigation</Text>
            <View style={styles.pageLineWide} />
            <View style={styles.pageLine} />
            <View style={styles.pageLineWide} />
            <View style={styles.pageLineShort} />
          </View>
        </View>
      </View>

      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>{copy.eyebrow}</Text>
        <Text style={styles.title}>{copy.title}</Text>
        <Text style={styles.subtitle}>{copy.subtitle}</Text>
      </View>

      <View style={styles.statRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{copy.primary}</Text>
          <Text style={styles.statLabel}>Primary</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{copy.secondary}</Text>
          <Text style={styles.statLabel}>Secondary</Text>
        </View>
      </View>

      <View style={styles.recentCard}>
        <Text style={styles.sectionTitle}>Recent Searches</Text>
        {RECENT_ITEMS.map(item => (
          <View key={item} style={styles.recentRow}>
            <View style={styles.clockBubble}>
              <Clock3 color="#767676" size={20} strokeWidth={2.2} />
            </View>
            <Text style={styles.recentText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bookPage: {
    borderRadius: 12,
    flex: 1,
    gap: 8,
    height: 150,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 18,
  },
  bookSpread: {
    flexDirection: 'row',
    gap: 10,
    transform: [{ rotate: '-2deg' }],
  },
  clockBubble: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.86)',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: 16,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  content: {
    gap: 22,
    paddingBottom: 150,
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  eyebrow: {
    color: '#e23a35',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  headerBlock: {
    gap: 8,
  },
  hero: {
    backgroundColor: '#1f2933',
    borderRadius: 26,
    boxShadow: '0 18px 38px rgba(15, 23, 42, 0.22)',
    height: 218,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 20,
  },
  leaf: {
    backgroundColor: '#ba6f35',
    borderRadius: 22,
    height: 84,
    left: 8,
    opacity: 0.75,
    position: 'absolute',
    top: -4,
    transform: [{ rotate: '-18deg' }],
    width: 44,
  },
  leftPage: {
    backgroundColor: '#f7dbc0',
  },
  pageLine: {
    backgroundColor: 'rgba(32, 27, 25, 0.18)',
    borderRadius: 2,
    height: 6,
    width: '82%',
  },
  pageLineShort: {
    backgroundColor: 'rgba(32, 27, 25, 0.16)',
    borderRadius: 2,
    height: 6,
    width: '58%',
  },
  pageLineWide: {
    backgroundColor: 'rgba(32, 27, 25, 0.2)',
    borderRadius: 2,
    height: 6,
    width: '100%',
  },
  pageTitle: {
    color: '#423026',
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: '700',
  },
  recentCard: {
    backgroundColor: '#191919',
    borderRadius: 22,
    gap: 18,
    padding: 24,
  },
  recentRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  recentText: {
    color: '#b7b7b7',
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
  },
  rightPage: {
    backgroundColor: '#f5eee5',
  },
  root: {
    backgroundColor: '#f7f5f1',
    flex: 1,
  },
  sectionTitle: {
    color: '#e8e8e8',
    fontSize: 20,
    fontWeight: '800',
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderColor: 'rgba(18, 18, 18, 0.08)',
    borderRadius: 18,
    borderWidth: 1,
    flex: 1,
    gap: 4,
    padding: 18,
  },
  statLabel: {
    color: '#777777',
    fontSize: 13,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statValue: {
    color: '#191919',
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    color: '#565656',
    fontSize: 16,
    lineHeight: 23,
  },
  title: {
    color: '#101010',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 38,
  },
});

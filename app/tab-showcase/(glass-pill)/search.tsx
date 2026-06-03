import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.searchIcon}>Search</Text>
      </View>

      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>Discover</Text>
        <Text style={styles.title}>Search</Text>
        <Text style={styles.subtitle}>
          This tab uses role="search" to get the separate right-side Liquid Glass pill treatment
          that iOS 26 reserves for the search slot.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>How it works</Text>
        <Text style={styles.cardBody}>
          NativeTabs.Trigger with role="search" renders as an independent pill, visually separated
          from the grouped tab bar.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#191919',
    borderRadius: 22,
    gap: 10,
    padding: 24,
  },
  cardBody: {
    color: '#b7b7b7',
    fontSize: 15,
    lineHeight: 22,
  },
  cardTitle: {
    color: '#e8e8e8',
    fontSize: 20,
    fontWeight: '800',
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
    alignItems: 'center',
    backgroundColor: '#1f2933',
    borderRadius: 26,
    height: 218,
    justifyContent: 'center',
  },
  searchIcon: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 36,
    fontWeight: '600',
  },
  root: {
    backgroundColor: '#f7f5f1',
    flex: 1,
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

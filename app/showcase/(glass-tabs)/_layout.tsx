import { BlurView } from 'expo-blur';
import { GlassView, isGlassEffectAPIAvailable } from 'expo-glass-effect';
import { router } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Sparkles } from 'lucide-react-native';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const GLASS_AVAILABLE = IS_IOS && isGlassEffectAPIAvailable();

export default function GlassTabsLayout() {
  return (
    <View style={styles.root}>
      <NativeTabs
        blurEffect="systemChromeMaterial"
        backgroundColor="transparent"
        shadowColor="transparent"
      >
        <NativeTabs.Trigger name="home">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="search">
          <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="profile">
          <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
        </NativeTabs.Trigger>
      </NativeTabs>

      {/*<View pointerEvents="box-none" style={styles.actionButtonLayer}>
        <ModalAccessoryButton />
      </View>*/}
    </View>
  );
}

function _ModalAccessoryButton() {
  const pressable = (
    <Pressable
      accessibilityLabel="Open modal"
      accessibilityRole="button"
      onPress={() => router.push('/modal')}
      style={({ pressed }) => [styles.actionPressable, { opacity: pressed ? 0.72 : 1 }]}
    >
      <Sparkles color="#111315" size={26} strokeWidth={2.4} />
    </Pressable>
  );

  if (GLASS_AVAILABLE) {
    return (
      <GlassView
        colorScheme="light"
        glassEffectStyle="regular"
        isInteractive
        style={styles.actionButton}
        tintColor="rgba(255, 255, 255, 0.82)"
      >
        {pressable}
      </GlassView>
    );
  }

  if (IS_IOS) {
    return (
      <View style={styles.actionButton}>
        <BlurView intensity={60} style={StyleSheet.absoluteFill} tint="systemUltraThinMaterial" />
        {pressable}
      </View>
    );
  }

  return <View style={[styles.actionButton, styles.actionButtonAndroid]}>{pressable}</View>;
}

const styles = StyleSheet.create({
  actionButtonLayer: {
    alignItems: 'flex-end',
    bottom: 21,
    paddingRight: 2,
    position: 'absolute',
    right: 0,
    width: 70,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    borderColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 28,
    borderWidth: 1,
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.18)',
    height: 56,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 56,
  },
  actionButtonAndroid: {
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    borderColor: 'rgba(0, 0, 0, 0.06)',
    borderWidth: 1,
  },
  actionPressable: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  root: {
    flex: 1,
  },
});

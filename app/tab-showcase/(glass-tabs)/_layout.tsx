import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function GlassTabsLayout() {
  return (
    <NativeTabs
      blurEffect="systemChromeMaterial"
      backgroundColor="transparent"
      shadowColor="transparent"
    >
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" drawable="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="magnifyingglass" drawable="search" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.fill" drawable="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

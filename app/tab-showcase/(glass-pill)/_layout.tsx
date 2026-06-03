import { NativeTabs } from 'expo-router/unstable-native-tabs';

export const unstable_settings = {
  initialRouteName: 'article',
};

export default function GlassPillLayout() {
  return (
    <NativeTabs minimizeBehavior="automatic">
      <NativeTabs.Trigger name="article">
        <NativeTabs.Trigger.Icon sf="book.fill" />
        <NativeTabs.Trigger.Label>Article</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="contacts">
        <NativeTabs.Trigger.Icon sf="person.2.fill" />
        <NativeTabs.Trigger.Label>Contacts</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="albums">
        <NativeTabs.Trigger.Icon sf="music.note" />
        <NativeTabs.Trigger.Label>Albums</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <NativeTabs.Trigger.Icon sf="magnifyingglass" />
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

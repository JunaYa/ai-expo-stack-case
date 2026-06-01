import { View, Text as RNText } from 'react-native';
import { useGlassDemo } from './context';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Switch } from '@/components/ui/switch';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';

function SettingRow({ label, value, onToggle }: { label: string; value: boolean; onToggle: (v: boolean) => void }) {
  return (
    <HStack className="items-center justify-between py-2">
      <RNText className="text-sm text-white/80">{label}</RNText>
      <Switch value={value} onToggle={onToggle} />
    </HStack>
  );
}

export function SettingsSection() {
  const { settings, updateSettings } = useGlassDemo();

  return (
    <View className="mx-4 mb-6 overflow-hidden rounded-2xl bg-white/10 p-5">
      <Heading size="md" className="mb-4 text-white">Settings</Heading>

      <VStack>
        <SettingRow
          label="Push Notifications"
          value={settings.notifications}
          onToggle={(v) => updateSettings({ notifications: v })}
        />
        <Divider className="bg-white/10" />
        <SettingRow
          label="Auto-save Changes"
          value={settings.autoSave}
          onToggle={(v) => updateSettings({ autoSave: v })}
        />
        <Divider className="bg-white/10" />
        <SettingRow
          label="Dark Mode"
          value={settings.darkMode}
          onToggle={(v) => updateSettings({ darkMode: v })}
        />
      </VStack>
    </View>
  );
}

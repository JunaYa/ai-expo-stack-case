import { ScrollView } from 'react-native';
import { GlassDemoProvider } from '@/components/showcase/glass-demo/context';
import { ProfileSection } from '@/components/showcase/glass-demo/profile-section';
import { DashboardSection } from '@/components/showcase/glass-demo/dashboard-section';
import { TaskSection } from '@/components/showcase/glass-demo/task-section';
import { SettingsSection } from '@/components/showcase/glass-demo/settings-section';

export default function HomeScreen() {
  return (
    <GlassDemoProvider>
      <ScrollView
        className="flex-1 bg-black"
        contentContainerClassName="pb-32 pt-4"
        showsVerticalScrollIndicator={false}
      >
        <ProfileSection />
        <DashboardSection />
        <TaskSection />
        <SettingsSection />
      </ScrollView>
    </GlassDemoProvider>
  );
}

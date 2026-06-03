import { createContext, useContext, useMemo, useState } from 'react';
import type { AppSettings, GlassDemoState, Task } from './types';

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Design Review',
    description: 'Review new component designs',
    emoji: '🎨',
    completed: false,
    priority: 'high',
  },
  {
    id: 2,
    title: 'Write Tests',
    description: 'Add unit tests for utils',
    emoji: '🧪',
    completed: true,
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Deploy Staging',
    description: 'Push latest build to staging',
    emoji: '🚀',
    completed: false,
    priority: 'high',
  },
  {
    id: 4,
    title: 'Update Docs',
    description: 'Update API documentation',
    emoji: '📝',
    completed: false,
    priority: 'low',
  },
];

const GlassDemoContext = createContext<GlassDemoState | null>(null);

export function useGlassDemo() {
  const ctx = useContext(GlassDemoContext);
  if (!ctx) throw new Error('useGlassDemo must be used within GlassDemoProvider');
  return ctx;
}

export function GlassDemoProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskFilter, setTaskFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [productivityScore, setProductivityScore] = useState(0.75);
  const [focusLevel, setFocusLevel] = useState(0.6);
  const [settings, setSettings] = useState<AppSettings>({
    notifications: true,
    autoSave: true,
    darkMode: false,
  });

  const value = useMemo<GlassDemoState>(
    () => ({
      profile: { name: 'Arjun', username: '@arjun', theme: '#6366f1' },
      tasks,
      settings,
      taskFilter,
      productivityScore,
      focusLevel,
      toggleTask: (id) =>
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))),
      setTaskFilter,
      setProductivityScore,
      setFocusLevel,
      updateSettings: (patch) => setSettings((prev) => ({ ...prev, ...patch })),
    }),
    [tasks, settings, taskFilter, productivityScore, focusLevel],
  );

  return <GlassDemoContext.Provider value={value}>{children}</GlassDemoContext.Provider>;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  emoji: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface UserProfile {
  name: string;
  username: string;
  theme: string;
}

export interface AppSettings {
  notifications: boolean;
  autoSave: boolean;
  darkMode: boolean;
}

export interface GlassDemoState {
  profile: UserProfile;
  tasks: Task[];
  settings: AppSettings;
  taskFilter: 'all' | 'pending' | 'completed';
  productivityScore: number;
  focusLevel: number;
  toggleTask: (id: number) => void;
  setTaskFilter: (filter: 'all' | 'pending' | 'completed') => void;
  setProductivityScore: (v: number) => void;
  setFocusLevel: (v: number) => void;
  updateSettings: (patch: Partial<AppSettings>) => void;
}

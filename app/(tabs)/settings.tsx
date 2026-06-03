import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Theme = 'light' | 'dark' | 'system';
type FontFamily = 'system' | 'serif' | 'mono';
type TextSize = 'small' | 'medium' | 'large' | 'xlarge';
type CornerRadius = 'none' | 'small' | 'medium' | 'large' | 'full';
type MotionPref = 'full' | 'reduced' | 'off';

const SURFACE_COLORS = [
  { label: 'Slate', value: '#f8fafc', dark: '#0f172a' },
  { label: 'Stone', value: '#fafaf9', dark: '#1c1917' },
  { label: 'Zinc', value: '#fafafa', dark: '#18181b' },
  { label: 'Warm', value: '#fef7ee', dark: '#1a1412' },
  { label: 'Rose', value: '#fff1f2', dark: '#1a0a0b' },
  { label: 'Sky', value: '#f0f9ff', dark: '#0c1929' },
];

const CORNER_RADII: { label: string; value: CornerRadius; px: number }[] = [
  { label: 'None', value: 'none', px: 0 },
  { label: 'S', value: 'small', px: 6 },
  { label: 'M', value: 'medium', px: 12 },
  { label: 'L', value: 'large', px: 20 },
  { label: 'Full', value: 'full', px: 999 },
];

const TEXT_SIZES: { label: string; value: TextSize; scale: number }[] = [
  { label: 'Compact', value: 'small', scale: 0.85 },
  { label: 'Default', value: 'medium', scale: 1 },
  { label: 'Comfortable', value: 'large', scale: 1.15 },
];

const FONTS: { label: string; value: FontFamily; family: string | undefined }[] = [
  { label: 'Sans', value: 'system', family: undefined },
  { label: 'Serif', value: 'serif', family: 'serif' },
  { label: 'Mono', value: 'mono', family: 'monospace' },
];

const MOTION_PREFS: { label: string; value: MotionPref; desc: string }[] = [
  { label: 'Full', value: 'full', desc: 'All animations' },
  { label: 'Reduced', value: 'reduced', desc: 'Subtle transitions' },
  { label: 'Off', value: 'off', desc: 'No animations' },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <Text
      style={{
        color: '#6b7280',
        fontSize: 13,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginBottom: 8,
        textTransform: 'uppercase',
      }}
    >
      {title}
    </Text>
  );
}

function OptionRow({ children }: { children: React.ReactNode }) {
  return <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>{children}</View>;
}

function Chip({
  label,
  selected,
  onPress,
  color,
  radius,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
  color?: string;
  radius?: number;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        alignItems: 'center',
        backgroundColor: selected ? '#6366f1' : color || '#f3f4f6',
        borderColor: selected ? '#6366f1' : '#e5e7eb',
        borderRadius: radius ?? 10,
        borderWidth: 1.5,
        justifyContent: 'center',
        minWidth: 52,
        opacity: pressed ? 0.7 : 1,
        paddingHorizontal: 14,
        paddingVertical: 10,
      })}
    >
      <Text
        style={{
          color: selected ? '#fff' : '#374151',
          fontSize: 14,
          fontWeight: '600',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function ColorSwatch({
  color,
  selected,
  onPress,
  radius,
}: {
  color: string;
  selected: boolean;
  onPress: () => void;
  radius: number;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: color,
        borderColor: selected ? '#6366f1' : '#d1d5db',
        borderRadius: radius,
        borderWidth: selected ? 2.5 : 1,
        height: 44,
        opacity: pressed ? 0.7 : 1,
        width: 44,
      })}
    />
  );
}

function PreviewCard({
  font,
  textScale,
  surfaceColor,
  radius,
}: {
  font: string | undefined;
  textScale: number;
  surfaceColor: string;
  radius: number;
}) {
  return (
    <View
      style={{
        backgroundColor: surfaceColor,
        borderColor: '#e5e7eb',
        borderRadius: radius,
        borderWidth: 1,
        gap: 8,
        padding: 20,
      }}
    >
      <Text
        style={{ color: '#111827', fontFamily: font, fontSize: 20 * textScale, fontWeight: '700' }}
      >
        Preview Card
      </Text>
      <Text
        style={{
          color: '#6b7280',
          fontFamily: font,
          fontSize: 14 * textScale,
          lineHeight: 20 * textScale,
        }}
      >
        This card reflects your current personalization settings. Adjust theme, font, size, color,
        and radius above.
      </Text>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
        <View
          style={{
            backgroundColor: '#6366f1',
            borderRadius: Math.min(radius, 8),
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{ color: '#fff', fontFamily: font, fontSize: 13 * textScale, fontWeight: '600' }}
          >
            Primary
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#f3f4f6',
            borderColor: '#d1d5db',
            borderRadius: Math.min(radius, 8),
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              color: '#374151',
              fontFamily: font,
              fontSize: 13 * textScale,
              fontWeight: '600',
            }}
          >
            Secondary
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function SettingsScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  const [theme, setTheme] = useState<Theme>((colorScheme as Theme) || 'system');
  const [font, setFont] = useState<FontFamily>('system');
  const [textSize, setTextSize] = useState<TextSize>('medium');
  const [surfaceColor, setSurfaceColor] = useState(SURFACE_COLORS[0]!);
  const [cornerRadius, setCornerRadius] = useState<CornerRadius>('medium');
  const [motion, setMotion] = useState<MotionPref>('full');

  const currentFont = FONTS.find(f => f.value === font)?.family;
  const currentScale = TEXT_SIZES.find(s => s.value === textSize)?.scale ?? 1;
  const currentRadius = CORNER_RADII.find(r => r.value === cornerRadius)?.px ?? 12;
  const currentSurface = theme === 'dark' ? surfaceColor.dark : surfaceColor.value;

  const handleTheme = (t: Theme) => {
    setTheme(t);
    setColorScheme(t);
  };

  return (
    <ScrollView
      style={{ backgroundColor: '#fff', flex: 1 }}
      contentContainerStyle={{
        gap: 28,
        paddingBottom: insets.bottom + 40,
        paddingHorizontal: 20,
        paddingTop: 16,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ gap: 6 }}>
        <SectionHeader title="Theme" />
        <OptionRow>
          {(['light', 'dark', 'system'] as const).map(t => (
            <Chip
              key={t}
              label={t.charAt(0).toUpperCase() + t.slice(1)}
              selected={theme === t}
              onPress={() => handleTheme(t)}
              radius={currentRadius}
            />
          ))}
        </OptionRow>
      </View>

      <View style={{ gap: 6 }}>
        <SectionHeader title="Font" />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {FONTS.map(f => {
            const selected = font === f.value;
            return (
              <Pressable
                key={f.value}
                onPress={() => setFont(f.value)}
                style={({ pressed }) => ({
                  alignItems: 'center',
                  backgroundColor: selected ? '#eef2ff' : '#f9fafb',
                  borderColor: selected ? '#6366f1' : '#e5e7eb',
                  borderRadius: currentRadius,
                  borderWidth: selected ? 2 : 1,
                  flex: 1,
                  gap: 6,
                  opacity: pressed ? 0.7 : 1,
                  paddingBottom: 10,
                  paddingTop: 16,
                })}
              >
                <Text
                  style={{
                    color: '#374151',
                    fontFamily: f.family,
                    fontSize: 28,
                    fontWeight: '400',
                    lineHeight: 34,
                  }}
                >
                  Ag
                </Text>
                <Text
                  style={{
                    color: selected ? '#6366f1' : '#9ca3af',
                    fontSize: 13,
                    fontWeight: '600',
                  }}
                >
                  {f.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={{ gap: 6 }}>
        <SectionHeader title="Text Size" />
        <View
          style={{
            backgroundColor: '#f3f4f6',
            borderRadius: currentRadius,
            flexDirection: 'row',
            padding: 3,
          }}
        >
          {TEXT_SIZES.map(s => {
            const selected = textSize === s.value;
            return (
              <Pressable
                key={s.value}
                onPress={() => setTextSize(s.value)}
                style={({ pressed }) => ({
                  alignItems: 'center',
                  backgroundColor: selected ? '#fff' : 'transparent',
                  borderRadius: Math.max(currentRadius - 3, 0),
                  boxShadow: selected ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  flex: 1,
                  opacity: pressed ? 0.7 : 1,
                  paddingVertical: 10,
                })}
              >
                <Text
                  style={{
                    color: selected ? '#111827' : '#6b7280',
                    fontSize: 14,
                    fontWeight: selected ? '600' : '400',
                  }}
                >
                  {s.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={{ gap: 6 }}>
        <SectionHeader title="Surface Color" />
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          {SURFACE_COLORS.map(c => (
            <View key={c.label} style={{ alignItems: 'center', gap: 4 }}>
              <ColorSwatch
                color={theme === 'dark' ? c.dark : c.value}
                selected={surfaceColor.label === c.label}
                onPress={() => setSurfaceColor(c)}
                radius={currentRadius}
              />
              <Text style={{ color: '#9ca3af', fontSize: 11 }}>{c.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ gap: 6 }}>
        <SectionHeader title="Corner Radius" />
        <OptionRow>
          {CORNER_RADII.map(r => (
            <Chip
              key={r.value}
              label={r.label}
              selected={cornerRadius === r.value}
              onPress={() => setCornerRadius(r.value)}
              radius={r.px}
            />
          ))}
        </OptionRow>
      </View>

      <View style={{ gap: 6 }}>
        <SectionHeader title="Motion" />
        {MOTION_PREFS.map(m => (
          <Pressable
            key={m.value}
            onPress={() => setMotion(m.value)}
            style={({ pressed }) => ({
              backgroundColor: motion === m.value ? '#eef2ff' : '#f9fafb',
              borderColor: motion === m.value ? '#6366f1' : '#e5e7eb',
              borderRadius: currentRadius,
              borderWidth: 1.5,
              flexDirection: 'row',
              gap: 12,
              opacity: pressed ? 0.7 : 1,
              padding: 14,
            })}
          >
            <View
              style={{
                alignItems: 'center',
                backgroundColor: motion === m.value ? '#6366f1' : '#d1d5db',
                borderRadius: 12,
                height: 24,
                justifyContent: 'center',
                width: 24,
              }}
            >
              {motion === m.value ? (
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>{'✓'}</Text>
              ) : null}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#111827', fontSize: 15, fontWeight: '600' }}>{m.label}</Text>
              <Text style={{ color: '#6b7280', fontSize: 13 }}>{m.desc}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={{ gap: 6 }}>
        <SectionHeader title="Preview" />
        <PreviewCard
          font={currentFont}
          textScale={currentScale}
          surfaceColor={currentSurface}
          radius={currentRadius}
        />
      </View>
    </ScrollView>
  );
}

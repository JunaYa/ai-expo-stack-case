import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Theme = 'light' | 'dark' | 'system';
type FontFamily = 'system' | 'serif' | 'mono';
type TextSize = 'small' | 'medium' | 'large';
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

// --- Dark-mode aware colors ---

function useColors() {
  const { colorScheme } = useColorScheme();
  const dark = colorScheme === 'dark';
  return {
    bg: dark ? '#111' : '#fff',
    card: dark ? '#1c1c1e' : '#f9fafb',
    cardBorder: dark ? '#333' : '#e5e7eb',
    text: dark ? '#f5f5f5' : '#111827',
    textSecondary: dark ? '#9ca3af' : '#6b7280',
    textMuted: dark ? '#6b7280' : '#9ca3af',
    accent: '#6366f1',
    accentBg: dark ? '#2a2647' : '#eef2ff',
    segBg: dark ? '#2c2c2e' : '#f3f4f6',
    segActive: dark ? '#3a3a3c' : '#fff',
    dark,
  };
}

// --- Section header with subtitle ---

function SectionHeader({
  title,
  subtitle,
  colors,
}: {
  title: string;
  subtitle?: string;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <View style={{ gap: 2, marginBottom: 10 }}>
      <Text style={{ color: colors.text, fontSize: 17, fontWeight: '700' }}>{title}</Text>
      {subtitle ? (
        <Text style={{ color: colors.textSecondary, fontSize: 13 }}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

// --- Mini window illustration for theme cards ---

function MiniWindow({ mode }: { mode: 'light' | 'dark' | 'split' }) {
  const lightBg = '#f0f0f0';
  const darkBg = '#2a2a2e';
  const lightContent = '#d1d5db';
  const darkContent = '#4a4a4e';
  const lightDot = '#c5c5c5';
  const darkDot = '#555';
  const lightCircle = '#d1d5db';
  const darkCircle = '#4a4a4e';

  if (mode === 'split') {
    return (
      <View
        style={{
          borderColor: '#555',
          borderRadius: 8,
          borderWidth: 1,
          flexDirection: 'row',
          height: 80,
          overflow: 'hidden',
          width: 100,
        }}
      >
        <View style={{ backgroundColor: lightBg, flex: 1, padding: 8 }}>
          <View style={{ flexDirection: 'row', gap: 3, marginBottom: 8 }}>
            <View style={{ backgroundColor: lightDot, borderRadius: 2, height: 4, width: 4 }} />
            <View style={{ backgroundColor: lightDot, borderRadius: 2, height: 4, width: 4 }} />
            <View style={{ backgroundColor: lightDot, borderRadius: 2, height: 4, width: 4 }} />
          </View>
          <View style={{ backgroundColor: lightCircle, borderRadius: 8, height: 16, width: 16 }} />
          <View
            style={{
              backgroundColor: lightContent,
              borderRadius: 2,
              height: 4,
              marginTop: 6,
              width: '80%',
            }}
          />
          <View
            style={{
              backgroundColor: lightContent,
              borderRadius: 2,
              height: 4,
              marginTop: 3,
              width: '60%',
            }}
          />
        </View>
        <View style={{ backgroundColor: darkBg, flex: 1, padding: 8 }}>
          <View style={{ flexDirection: 'row', gap: 3, marginBottom: 8 }}>
            <View style={{ backgroundColor: darkDot, borderRadius: 2, height: 4, width: 4 }} />
            <View style={{ backgroundColor: darkDot, borderRadius: 2, height: 4, width: 4 }} />
            <View style={{ backgroundColor: darkDot, borderRadius: 2, height: 4, width: 4 }} />
          </View>
          <View style={{ backgroundColor: darkCircle, borderRadius: 8, height: 16, width: 16 }} />
          <View
            style={{
              backgroundColor: darkContent,
              borderRadius: 2,
              height: 4,
              marginTop: 6,
              width: '80%',
            }}
          />
          <View
            style={{
              backgroundColor: darkContent,
              borderRadius: 2,
              height: 4,
              marginTop: 3,
              width: '60%',
            }}
          />
        </View>
      </View>
    );
  }

  const isDark = mode === 'dark';
  const bg = isDark ? darkBg : lightBg;
  const dot = isDark ? darkDot : lightDot;
  const circle = isDark ? darkCircle : lightCircle;
  const line = isDark ? darkContent : lightContent;

  return (
    <View
      style={{
        backgroundColor: bg,
        borderColor: isDark ? '#555' : '#d1d5db',
        borderRadius: 8,
        borderWidth: 1,
        height: 80,
        padding: 10,
        width: 100,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 3, marginBottom: 10 }}>
        <View style={{ backgroundColor: dot, borderRadius: 2.5, height: 5, width: 5 }} />
        <View style={{ backgroundColor: dot, borderRadius: 2.5, height: 5, width: 5 }} />
        <View style={{ backgroundColor: dot, borderRadius: 2.5, height: 5, width: 5 }} />
      </View>
      <View style={{ backgroundColor: circle, borderRadius: 10, height: 20, width: 20 }} />
      <View
        style={{ backgroundColor: line, borderRadius: 2, height: 5, marginTop: 8, width: '90%' }}
      />
      <View
        style={{ backgroundColor: line, borderRadius: 2, height: 5, marginTop: 4, width: '65%' }}
      />
    </View>
  );
}

// --- Shared card wrapper ---

function SelectionCard({
  selected,
  onPress,
  radius,
  colors,
  children,
}: {
  selected: boolean;
  onPress: () => void;
  radius: number;
  colors: ReturnType<typeof useColors>;
  children: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        alignItems: 'center',
        backgroundColor: colors.card,
        borderColor: selected ? colors.accent : colors.cardBorder,
        borderRadius: radius,
        borderWidth: selected ? 2 : 1,
        flex: 1,
        opacity: pressed ? 0.7 : 1,
        paddingBottom: 12,
        paddingTop: 16,
      })}
    >
      {children}
    </Pressable>
  );
}

// --- Other shared components ---

function Chip({
  label,
  selected,
  onPress,
  radius,
  colors,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
  radius?: number;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        alignItems: 'center',
        backgroundColor: selected ? colors.accent : colors.card,
        borderColor: selected ? colors.accent : colors.cardBorder,
        borderRadius: radius ?? 10,
        borderWidth: 1.5,
        justifyContent: 'center',
        minWidth: 52,
        opacity: pressed ? 0.7 : 1,
        paddingHorizontal: 14,
        paddingVertical: 10,
      })}
    >
      <Text style={{ color: selected ? '#fff' : colors.text, fontSize: 14, fontWeight: '600' }}>
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
  colors,
}: {
  color: string;
  selected: boolean;
  onPress: () => void;
  radius: number;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: color,
        borderColor: selected ? colors.accent : colors.cardBorder,
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
  colors,
}: {
  font: string | undefined;
  textScale: number;
  surfaceColor: string;
  radius: number;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <View
      style={{
        backgroundColor: surfaceColor,
        borderColor: colors.cardBorder,
        borderRadius: radius,
        borderWidth: 1,
        gap: 8,
        padding: 20,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontFamily: font,
          fontSize: 20 * textScale,
          fontWeight: '700',
        }}
      >
        Preview Card
      </Text>
      <Text
        style={{
          color: colors.textSecondary,
          fontFamily: font,
          fontSize: 14 * textScale,
          lineHeight: 20 * textScale,
        }}
      >
        This card reflects your current personalization settings.
      </Text>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
        <View
          style={{
            backgroundColor: colors.accent,
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
            backgroundColor: colors.card,
            borderColor: colors.cardBorder,
            borderRadius: Math.min(radius, 8),
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              color: colors.text,
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

// --- Main screen ---

export default function SettingsScreen() {
  const { setColorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  const colors = useColors();

  const [theme, setTheme] = useState<Theme>(colors.dark ? 'dark' : 'light');
  const [font, setFont] = useState<FontFamily>('system');
  const [textSize, setTextSize] = useState<TextSize>('medium');
  const [surfaceColor, setSurfaceColor] = useState(SURFACE_COLORS[0]!);
  const [cornerRadius, setCornerRadius] = useState<CornerRadius>('medium');
  const [motion, setMotion] = useState<MotionPref>('full');

  const currentFont = FONTS.find(f => f.value === font)?.family;
  const currentScale = TEXT_SIZES.find(s => s.value === textSize)?.scale ?? 1;
  const currentRadius = CORNER_RADII.find(r => r.value === cornerRadius)?.px ?? 12;
  const currentSurface = colors.dark ? surfaceColor.dark : surfaceColor.value;

  const handleTheme = (t: Theme) => {
    setTheme(t);
    setColorScheme(t);
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.bg, flex: 1 }}
      contentContainerStyle={{
        gap: 32,
        paddingBottom: insets.bottom + 40,
        paddingHorizontal: 20,
        paddingTop: 16,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Theme */}
      <View>
        <SectionHeader
          title="Theme"
          subtitle="Choose the color mode used across the app"
          colors={colors}
        />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {(
            [
              { key: 'light', label: 'Light', mode: 'light' },
              { key: 'dark', label: 'Dark', mode: 'dark' },
              { key: 'system', label: 'Auto', mode: 'split' },
            ] as const
          ).map(t => (
            <SelectionCard
              key={t.key}
              selected={theme === t.key}
              onPress={() => handleTheme(t.key)}
              radius={currentRadius}
              colors={colors}
            >
              <MiniWindow mode={t.mode} />
              <Text
                style={{
                  color: theme === t.key ? colors.accent : colors.textSecondary,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10,
                }}
              >
                {t.label}
              </Text>
            </SelectionCard>
          ))}
        </View>
      </View>

      {/* Font */}
      <View>
        <SectionHeader title="Font" subtitle="Choose the app font" colors={colors} />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {FONTS.map(f => {
            const selected = font === f.value;
            return (
              <SelectionCard
                key={f.value}
                selected={selected}
                onPress={() => setFont(f.value)}
                radius={currentRadius}
                colors={colors}
              >
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: f.family,
                    fontSize: 32,
                    fontWeight: '400',
                    lineHeight: 38,
                  }}
                >
                  Aa
                </Text>
                <Text
                  style={{
                    color: selected ? colors.accent : colors.textMuted,
                    fontSize: 14,
                    fontWeight: '600',
                    marginTop: 8,
                  }}
                >
                  {f.label}
                </Text>
              </SelectionCard>
            );
          })}
        </View>
      </View>

      {/* Text Size */}
      <View>
        <SectionHeader title="Text Size" colors={colors} />
        <View
          style={{
            backgroundColor: colors.segBg,
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
                  backgroundColor: selected ? colors.segActive : 'transparent',
                  borderRadius: Math.max(currentRadius - 3, 0),
                  boxShadow: selected ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
                  flex: 1,
                  opacity: pressed ? 0.7 : 1,
                  paddingVertical: 10,
                })}
              >
                <Text
                  style={{
                    color: selected ? colors.text : colors.textSecondary,
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

      {/* Surface Color */}
      <View>
        <SectionHeader title="Surface Color" colors={colors} />
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          {SURFACE_COLORS.map(c => (
            <View key={c.label} style={{ alignItems: 'center', gap: 4 }}>
              <ColorSwatch
                color={colors.dark ? c.dark : c.value}
                selected={surfaceColor.label === c.label}
                onPress={() => setSurfaceColor(c)}
                radius={currentRadius}
                colors={colors}
              />
              <Text style={{ color: colors.textMuted, fontSize: 11 }}>{c.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Corner Radius */}
      <View>
        <SectionHeader title="Corner Radius" colors={colors} />
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          {CORNER_RADII.map(r => (
            <Chip
              key={r.value}
              label={r.label}
              selected={cornerRadius === r.value}
              onPress={() => setCornerRadius(r.value)}
              radius={r.px}
              colors={colors}
            />
          ))}
        </View>
      </View>

      {/* Motion */}
      <View>
        <SectionHeader title="Motion" colors={colors} />
        <View style={{ gap: 8 }}>
          {MOTION_PREFS.map(m => {
            const selected = motion === m.value;
            return (
              <Pressable
                key={m.value}
                onPress={() => setMotion(m.value)}
                style={({ pressed }) => ({
                  backgroundColor: selected ? colors.accentBg : colors.card,
                  borderColor: selected ? colors.accent : colors.cardBorder,
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
                    backgroundColor: selected ? colors.accent : colors.cardBorder,
                    borderRadius: 12,
                    height: 24,
                    justifyContent: 'center',
                    width: 24,
                  }}
                >
                  {selected ? (
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>{'✓'}</Text>
                  ) : null}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: colors.text, fontSize: 15, fontWeight: '600' }}>
                    {m.label}
                  </Text>
                  <Text style={{ color: colors.textSecondary, fontSize: 13 }}>{m.desc}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Preview */}
      <View>
        <SectionHeader title="Preview" colors={colors} />
        <PreviewCard
          font={currentFont}
          textScale={currentScale}
          surfaceColor={currentSurface}
          radius={currentRadius}
          colors={colors}
        />
      </View>
    </ScrollView>
  );
}

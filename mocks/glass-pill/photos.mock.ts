import { faker } from '@faker-js/faker';
import type { SFSymbol } from 'expo-symbols';

faker.seed(77);

export type Photo = {
  id: string;
  title: string;
  category: string;
  date: string;
  width: number;
  height: number;
  uri: string;
};

const CATEGORIES = ['Nature', 'Travel', 'Architecture', 'Portrait', 'Food', 'Street'];

export const photos: Photo[] = Array.from({ length: 24 }, () => {
  const w = faker.number.int({ min: 300, max: 600 });
  const h = faker.number.int({ min: 300, max: 600 });
  return {
    id: faker.string.nanoid(8),
    title: faker.lorem.words({ min: 2, max: 4 }),
    category: faker.helpers.arrayElement(CATEGORIES),
    date: faker.date.recent({ days: 90 }).toISOString().split('T')[0]!,
    width: w,
    height: h,
    uri: faker.image.urlPicsumPhotos({ width: w, height: h }),
  };
});

export const recentSearches = Array.from({ length: 5 }, () =>
  faker.word.words({ count: { min: 1, max: 2 } }).replace(/^\w/, c => c.toUpperCase()),
);

export type SearchSuggestion = {
  label: string;
  sfIcon: SFSymbol;
  color: string;
};

export const searchSuggestions: SearchSuggestion[] = [
  { label: 'Nature', sfIcon: 'leaf.fill', color: '#34c759' },
  { label: 'Travel', sfIcon: 'airplane', color: '#ff9500' },
  { label: 'Food', sfIcon: 'fork.knife', color: '#ff3b30' },
  { label: 'Pets', sfIcon: 'pawprint.fill', color: '#af52de' },
  { label: 'Selfies', sfIcon: 'person.crop.circle', color: '#ff2d55' },
  { label: 'Screenshots', sfIcon: 'camera.viewfinder', color: '#5856d6' },
];

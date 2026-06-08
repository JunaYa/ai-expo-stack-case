import { faker } from '@faker-js/faker';

faker.seed(42);

export type Album = {
  id: string;
  title: string;
  count: number;
  color: string;
};

const PALETTE = [
  '#3478f6',
  '#ff3b30',
  '#34c759',
  '#ff9500',
  '#af52de',
  '#ff2d55',
  '#5856d6',
  '#00c7be',
];

export const albums: Album[] = Array.from({ length: 8 }, (_, i) => ({
  id: faker.string.nanoid(8),
  title: faker.word.words({ count: { min: 1, max: 2 } }).replace(/^\w/, c => c.toUpperCase()),
  count: faker.number.int({ min: 12, max: 1500 }),
  color: PALETTE[i % PALETTE.length]!,
}));

export const sortOptions = ['Recently Added', 'Date Captured', 'Title'] as const;

export const filterOptions = [
  'All Items',
  'Favorites',
  'Edited',
  'Photos',
  'Videos',
  'Screenshots',
  'Shared With You',
] as const;

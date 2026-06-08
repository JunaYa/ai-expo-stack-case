import { faker } from '@faker-js/faker';

faker.seed(99);

export type Contact = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  online: boolean;
  favorite: boolean;
};

export const contacts: Contact[] = Array.from({ length: 18 }, () => ({
  id: faker.string.nanoid(8),
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
  role: faker.person.jobTitle(),
  online: faker.datatype.boolean(0.4),
  favorite: faker.datatype.boolean(0.2),
}));

export const onlineCount = contacts.filter(c => c.online).length;
export const favoriteCount = contacts.filter(c => c.favorite).length;

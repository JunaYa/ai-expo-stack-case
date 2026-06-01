import { tva } from '@gluestack-ui/utils/nativewind-utils';

export { tva };

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

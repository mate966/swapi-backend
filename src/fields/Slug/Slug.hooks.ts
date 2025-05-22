import type { FieldHook } from 'payload';

const polishCharMap: { [key: string]: string } = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
};

export const formatSlug = (val: string): string =>
    val
        .split('')
        .map(char => polishCharMap[char] || char)
        .join('')
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .toLowerCase();

export const formatSlugHook =
  (fallback: string): FieldHook =>
      ({ data, operation, value }) => {
          if (typeof value === 'string') {
              return formatSlug(value);
          }

          if (operation === 'create' || !data?.slug) {
              const fallbackData = data?.[fallback] || data?.[fallback];

              if (fallbackData && typeof fallbackData === 'string') {
                  return formatSlug(fallbackData);
              }
          }

          return value;
      };

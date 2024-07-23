export const createImmutableObject = <T extends Record<PropertyKey, unknown>>(
  value: T
): Readonly<T> => {
  return Object.freeze(value);
};

console.log(getCurrentScript());

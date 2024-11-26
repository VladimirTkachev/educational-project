type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []) => {
  const modsClasses = Object.entries(mods)
    .filter(([_className, value]) => Boolean(value))
    .map(([className]) => className);

  return [cls, ...additional.filter(Boolean), ...modsClasses].join(' ');
};

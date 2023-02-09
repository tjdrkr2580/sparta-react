import { FC, lazy, LazyExoticComponent } from 'react';

export const lazyComponent = (
  name: string,
  importer: Promise<Record<string, FC>>
): LazyExoticComponent<FC> =>
  lazy(async () => {
    const component = await importer;
    return { default: component[name] };
  });

import { PromiseExtended } from 'dexie';
// eslint-disable-next-line import/no-cycle
import { db } from '..';

export interface ICounter {
  count: number;
  id?: number;
}

export class Counter implements ICounter {
  count: number;

  id: number | undefined;

  constructor(count: number, id?: number) {
    this.count = count;
    if (id) this.id = id;

    // Non-enumerable will prevent data from being handled by indexedDB when doing put() or add().
    Object.defineProperties(this, {
      counter: { enumerable: false, value: [], writable: true },
    });
  }

  save(): PromiseExtended<void> {
    return db.transaction('readwrite', db.table('counter'), async () => {
      await db.counter?.put(this);
    });
  }
}

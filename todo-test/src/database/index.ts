import Dexie from 'dexie';
// eslint-disable-next-line import/no-cycle
import { Counter, ICounter } from './counter/Counter';

class Database extends Dexie {
  counter: Dexie.Table<ICounter, number> | undefined;

  constructor() {
    super('react_starter');

    // Define tables and indexes. Implicit table props are dynamically created here.
    this.version(1).stores({
      counter: '++id',
    });

    this.counter?.mapToClass(Counter);
  }
}

export const db = new Database();

import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '..';
import { Counter, ICounter } from './Counter';

export const useCounter = (): {
  counter: ICounter;
  handleDecrementClick: () => void;
  handleIncrementClick: () => void;
} => {
  const counter = useLiveQuery(() => db.counter?.get(1)) ?? { count: 0 };

  return {
    counter,
    handleDecrementClick: async () => {
      new Counter(counter.count - 1, 1).save();
    },
    handleIncrementClick: async () => {
      new Counter(counter.count + 1, 1).save();
    },
  };
};

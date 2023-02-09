import React from 'react';
import { Page } from '../../components/Page/Page';
import { useCounter } from '../../database/counter';
import { useCounter as useCounterRedux } from '../../store/counter';

export const Home = (): JSX.Element => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
  const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
  const homeText = 'Home';

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <p>Dexie Count (Persistent): {counter.count}</p>
      <p>Redux Count: {c.count}</p>
      <button
        onClick={() => {
          handleDecrementClick();
          hDC();
        }}
        type="button"
      >
        -
      </button>
      <button
        onClick={() => {
          handleIncrementClick();
          hIC();
        }}
        type="button"
      >
        +
      </button>
    </Page>
  );
};

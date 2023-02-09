import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { App } from './App';

test('count text is in document', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(await screen.findByText(/Dexie Count \(Persistent\): 0/)).toBeInTheDocument();
  expect(await screen.findByText(/Redux Count: 0/)).toBeInTheDocument();
});

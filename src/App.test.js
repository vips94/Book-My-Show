import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import store from './reduxStore/index';

test('renders Heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const heading = screen.getByText(/BOOK MY SHOW/i);
  expect(heading).toBeInTheDocument();
});

test('renders Show 1', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const show1 = screen.getByText(/Show 1/i);
  expect(show1).toBeInTheDocument();
});

test('renders Show 2', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const show2 = screen.getByText(/Show 2/i);
  expect(show2).toBeInTheDocument();
});

test('renders Show 3', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const show3 = screen.getByText(/Show 3/i);
  expect(show3).toBeInTheDocument();
});

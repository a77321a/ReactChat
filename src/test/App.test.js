/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 10:20:49
 * @LastEditors: 
 * @LastEditTime: 2020-09-08 17:48:42
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

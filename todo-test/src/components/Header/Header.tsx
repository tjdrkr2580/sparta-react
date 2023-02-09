import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

export const Header = (): JSX.Element => (
  <LayoutContainer role="banner" Tag="header">
    <Link to="/">Logo</Link>
  </LayoutContainer>
);

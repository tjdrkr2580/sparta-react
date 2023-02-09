import React, { PropsWithChildren } from 'react';
import { lazyComponent } from '../../common/utils';
import { ErrorBoundarySuspense } from '../ErrorBoundarySuspense/ErrorBoundarySuspense';

const Footer = lazyComponent('Footer', import('../Footer/Footer'));
const Header = lazyComponent('Header', import('../Header/Header'));

export const Layout = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <>
    <ErrorBoundarySuspense>
      <Header />
    </ErrorBoundarySuspense>
    <ErrorBoundarySuspense>{children}</ErrorBoundarySuspense>
    <ErrorBoundarySuspense>
      <Footer />
    </ErrorBoundarySuspense>
  </>
);

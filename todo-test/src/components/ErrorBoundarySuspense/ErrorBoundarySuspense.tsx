import React, { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Loading } from '../Loading/Loading';

export const ErrorBoundarySuspense = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </ErrorBoundary>
);

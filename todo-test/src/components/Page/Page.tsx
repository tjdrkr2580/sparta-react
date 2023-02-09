import React, { PropsWithChildren, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { app } from '../../common/constants';
import { LayoutContainer, LayoutContainerProps } from '../LayoutContainer/LayoutContainer';

interface PageProps extends LayoutContainerProps {
  description: string;
  elements?: ReactNode;
  keywords?: string;
  title: string;
}

export const Page = ({
  children,
  description,
  elements,
  isFluid,
  keywords,
  title,
}: PropsWithChildren<PageProps>): JSX.Element => (
  <HelmetProvider>
    <Helmet defaultTitle={app.name} titleTemplate={`${app.name} | %s`}>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <title>{title}</title>
      {elements}
    </Helmet>
    <LayoutContainer isFluid={isFluid} role="main" Tag="main">
      {children}
    </LayoutContainer>
  </HelmetProvider>
);

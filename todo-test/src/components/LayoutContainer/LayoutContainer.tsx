import React, { PropsWithChildren } from 'react';
import classes from './LayoutContainer.module.scss';

export interface LayoutContainerProps {
  className?: string | undefined;
  isFluid?: boolean;
  role?: string;
  Tag?: keyof JSX.IntrinsicElements;
}

export const LayoutContainer = ({
  children,
  className = '',
  isFluid = true,
  role,
  Tag = 'div',
}: PropsWithChildren<LayoutContainerProps>): JSX.Element => (
  <Tag className={`${classes.root} ${className}`} role={role}>
    <div className={isFluid ? classes.fluid : undefined}>{children}</div>
  </Tag>
);

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

export interface TableColumnInterface<T = any> {
  label: string;
  key: string;
  className?: string;
  render?: FC<T>;
  link?: string | boolean;
  fixed?: boolean;
  sortable?: boolean;
  title?: string;
}

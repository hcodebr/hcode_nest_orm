import { TableColumnOptions } from 'typeorm';
import { ColumnType } from '../types/ColumnType';

export const intColumn = ({ name }: ColumnType): TableColumnOptions => ({
  name,
  type: 'int',
});

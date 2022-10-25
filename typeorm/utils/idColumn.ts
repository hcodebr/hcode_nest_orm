import { TableColumnOptions } from 'typeorm';
import { ColumnType } from '../types/ColumnType';

export const idColumn = ({ name = 'id' }: ColumnType): TableColumnOptions => ({
  name,
  type: 'int',
  isPrimary: true,
  isGenerated: true,
  generationStrategy: 'increment',
});

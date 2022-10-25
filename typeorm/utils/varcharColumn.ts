import { TableColumnOptions } from 'typeorm';
import { VarcharType } from '../types/VarcharType';

export const varcharColumn = ({
  name = 'name',
  length = '255',
  isNullable = false,
}: VarcharType): TableColumnOptions => ({
  name,
  type: 'varchar',
  length,
  isNullable,
});

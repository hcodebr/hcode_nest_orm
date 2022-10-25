import { TableColumnOptions } from 'typeorm';
import { CharType } from '../types/CharType';

export const charColumn = ({
  name = 'name',
  length = '2',
}: CharType): TableColumnOptions => ({
  name,
  type: 'char',
  length,
});

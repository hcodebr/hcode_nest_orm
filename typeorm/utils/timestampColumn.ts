import { TableColumnOptions } from 'typeorm';

export const timestampColumn = (name = 'createdAt'): TableColumnOptions => ({
  name,
  type: 'timestamp',
  default: 'CURRENT_TIMESTAMP',
});

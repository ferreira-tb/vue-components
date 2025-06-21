import { default as Table } from './Table.vue';
import { default as TableLink } from './TableLink.vue';

export type * from './types';

export { Table, TableLink };

export { Table as TbTable, TableLink as TbTableLink };

export {
  TableCell as TbTableCell,
  TableEmpty as TbTableEmpty,
  TableHead as TbTableHead,
  TableRow as TbTableRow,
} from '../__base/table';

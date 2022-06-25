import {
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function ColumnFilter({ column }: any) {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <Input
        value={filterValue}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
    </span>
  );
}

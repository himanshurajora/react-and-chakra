import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
} from 'react-table';
import {
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  chakra,
} from '@chakra-ui/react';
import ColumnFilter from './ColumnFilter';
import GlobalFilter from './GlobalFilter';
export default function CustomTable() {
  const data = useMemo(
    () => [
      {
        name: 'John Doe',
        age: '30',
        city: 'New York',
        money: '$100',
      },
      {
        name: 'Alice',
        age: '25',
        city: 'Washington',
        money: '$50',
      },
      {
        name: 'Bob',
        age: '35',
        city: 'Seattle',
        money: '$150',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Main',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            Filter: ColumnFilter,
          },
          {
            Header: 'Age',
            accessor: 'age',
          },
        ],
      },
      {
        Header: 'Others',
        columns: [
          {
            Header: 'City',
            accessor: 'city',
          },
          {
            Header: 'Money',
            accessor: 'money',
          },
        ],
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <>
                  <Th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps()
                    )}
                  >
                    {column.render('Header')}
                    {
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    }
                  {column.canFilter ? column.render('Filter') : null}
                  </Th>
                </>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}

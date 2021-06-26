import React,{useMemo} from 'react'
import { useTable, useSortBy } from 'react-table';
import MOCKDATA from './MOCKDATA.json';
import { COLUMNS } from './Columns';
import './Table.css';

const SortTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCKDATA, []);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = useTable({
        columns:columns,
        data:data
    }, 
        useSortBy
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                         {column.render('Header')}
                         {/* Add a sort direction indicator */}
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : ''}
                        </span>
                </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                    </tr>
                )
                })}
            </tbody>
            <tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td {...column.getFooterProps()}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    )
}

export default SortTable;

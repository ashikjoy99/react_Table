import React,{useMemo} from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import MOCKDATA from './MOCKDATA.json';
import { COLUMNS } from './Columns';
import './Table.css';
import GlobalFilter from './GlobalFilter';

const GlobalDilterTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCKDATA, []);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state, 
        setGlobalFilter
    } = useTable({
        columns:columns,
        data:data
    },
        useFilters,
        useGlobalFilter,
    );

    const {globalFilter} = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                     <div>{column.canFilter ? column.render('Filter') : null}</div>
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
    </>
    )
}

export default GlobalDilterTable;

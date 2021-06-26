import React,{useMemo} from 'react'
import { useTable, usePagination } from 'react-table';
import MOCKDATA from './MOCKDATA.json';
import { COLUMNS } from './Columns';
import './Table.css';

const PagingTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCKDATA, []);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state: { pageIndex, pageSize}
    } = useTable({
        columns:columns,
        data:data,
        initialState: { pageIndex: 3 }
    },
        usePagination
    );

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
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
    </table>
    <div>
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>previousPage</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>nextPage</button>
        <button onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </>
    )
}

export default PagingTable;

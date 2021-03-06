import { format } from "date-fns";
import ColumnFilter from './ColumnFilter'

export const COLUMNS =[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id',
        Filter:ColumnFilter
    },
    {
        Header:'First Name',
        Footer:'First Name',
        accessor:'first_name',
        Filter:ColumnFilter
    },
    {
        Header:'Last Name',
        Footer:'Last Name',
        accessor:'last_name',
        Filter:ColumnFilter
    },
    {
        Header:'Date of Birth',
        Footer:'Date of Birth',
        accessor:'date_of_birth',
        cell:({value})=>{ return format(value,'dd/MM/yyyy')},
        Filter:ColumnFilter
    },
    {
        Header:'Country',
        Footer:'Country',
        accessor:'country',
        Filter:ColumnFilter
    },
    {
        Header:'Phone',
        Footer:'Phone',
        accessor:'phone',
        Filter:ColumnFilter
    },
    
]
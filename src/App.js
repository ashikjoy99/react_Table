import SortTable from "./Components/SortTable";
import BasicTable from './Components/BasicTable';
import GlobalFilterTable from "./Components/GlobalFilterTable";
import PagingTable from "./Components/PagingTable";
import ServerTable from './Components/ServerTable';


function App() {
  return (
    <div>
      <h1>Server Table</h1>
      <ServerTable/>
      <h1>PagingTable</h1>
      <PagingTable/>
      <h1>Global Filter and Column Filter</h1>
      <GlobalFilterTable/>
      <h1>Sorting Table</h1>
      <SortTable/>
      <h1>Basic Table</h1>
      <BasicTable/>
    </div>
  );
}

export default App;

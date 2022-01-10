import Pagination from "./Pagination";
import Search from "./Search";
import Filters from "../filters/Filters";

function Home(props) {

  return <>
    <div>
    <div>
      <hr />
      <hr />
    </div>
    <Search />
    <Filters />
    <Pagination />
    </div>
    </>
};

export default Home;
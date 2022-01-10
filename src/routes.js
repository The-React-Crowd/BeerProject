import Pagination from './components/Pagination';
import Search from './components/Search';
import BeerCard from './components/BeerCard';


const routes = [
  {title:"Home", path:"/", element: Pagination, isNav: true, isFooter: true},
  {title:"Search", path:"search", element: Search, isNav: true, isFooter: false},
  {title:"BeerCard", path:"beers/:productId", element: BeerCard, isNav: false, isFooter: false}
 ];

export default routes;
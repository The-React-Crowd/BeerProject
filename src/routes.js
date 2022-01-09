import Pagination from './components/Pagination';
import Search from './components/Search';


const routes = [
  {title:"Pagination", path:"/", element: Pagination, isNav: true, isFooter: true},
  {title:"Search", path:"/search", element: Search, isNav: true, isFooter: false},
  {title:"Search", path:"search/:productId", element: Search, isNav: false, isFooter: false}
];

export default routes;
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="bg-dark text-center text-white">

    <div className="container p-4 pb-0">
      <ul className='list-unstyled mt-3'>
      <li className="text-light">
         <Link className="text-white" to="#">Büşra AKBAŞ</Link> 
      </li>   
      <li className="text-light">
         <Link className="text-white" to="#">Melisa DENİZ</Link> 
      </li> 
      <li className="text-light">
         <Link className="text-white" to="#">Mervenur KUYUMCU</Link> 
      </li>   
     
      </ul>
   </div>

<div className="text-center p-3" >
  © 2022 Copyright {' '}
  
</div>

</footer>
   );
}

export default Footer;
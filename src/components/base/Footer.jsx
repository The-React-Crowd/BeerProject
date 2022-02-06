
function Footer(props) {
  return (
    <footer className="bg-dark text-center text-white">

    <div className="container p-4 pb-0">
      <ul className='list-unstyled mt-3'>
      <li>
         <a
              className=" text-light m-1"
              href="https://github.com/busraakbas"
              target="blank"
              role="button"
            >
              Büşra AKBAŞ
            </a> 
      </li> 
      <li>
         <a
              className=" text-light m-1"
              href="https://github.com/melisadeniz"
              target="blank"
              role="button"
            >
              Melisa DENİZ
            </a> 
      </li> 
      <li>
         <a
              className=" text-light m-1"
              href="https://github.com/mervenkymc"
              target="blank"
              role="button"
            >
              Mervenur KUYUMCU
            </a> 
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
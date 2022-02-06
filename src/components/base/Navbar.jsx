import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
     <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand mx-3" to="/"> <b>PUNK API</b>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  </div>
</nav>
  );
}

export default Navbar;
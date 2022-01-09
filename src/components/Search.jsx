import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Search(props) {

    const location = useLocation(); 
    const navigate = useNavigate(); 
    const [data, setData] = useState([]);

    const urlParams = new URLSearchParams(location.search);
    const [urlQ, setUrlQ] = useState(urlParams.get('q'));


  useEffect(() => {

    const URL = `https://api.punkapi.com/v2/beers?page=1&per_page=60`;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.beers);
        console.log(json.beers);
      });
  }, []);

  function formHandler(event) {
    event.preventDefault();
    setUrlQ(event.target.q.value);
    navigate(`/beers?=${event.target.q.value}`);
  }


  return (
    <>
     <form onSubmit={formHandler}>
            <div class="mb-3">
              
              <label htmlfor="search" className="form-label">
                Search Beer
              </label>
              <input
                name="q"
                type="text"
                className="form-control"
                id="search"
                defaultValue={urlQ}
              />
              <div className='searchIcon'></div>

            </div>
    
            <button type="reset" className="btn btn-warning m-2">
              Reset
            </button>
            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </form>

          {location.pathname === '/search' && <div>

          {data
        .filter((beer) => beer.name.includes(urlQ))
        .map((beer) => {
          return (
            <div key={beer.id} className="card-group col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100">
              <img src={beer.image_url} className="card-img-top m-5" alt="beers" style={{ width: "20vh", height: "45vh" }} />
                <div className="card-body">
                  <h5 className="card-title text-center h2">{beer.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                  First Brewed In :{beer.first_brewed}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div> }  
  </>
  );
 }
 
export default Search;
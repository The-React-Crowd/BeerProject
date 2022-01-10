import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Search(props) {

    const location = useLocation();  
    const navigation = useNavigate() 
    const [q, setQ] = useState("")   

    const urlParams = new URLSearchParams(location.search);
    const search = urlParams.get("q");
    const [products, setProducts] = useState([]);
    const BASE_URL = "https://api.punkapi.com/v2/beers?page=1&per_page=60";

    const inputHandler = (e) =>
    {
      e.preventDefault()
      setQ(e.target.search.value)
    console.log(q)
    navigation(`/search?q=${(e.target.search.value).toLowerCase()}`)

    }

    useEffect(() => {
      if(location.search.length === 0) {
        console.log("setQ sıfırla")
        setQ("")
        console.log(q)
      }
    }, [location, q])


  useEffect(() => {

    fetch(`${BASE_URL}?name=${search}`)
      .then((response) => response.json())
      .then((json) => setProducts(json.products))
  }, [search]);


  return (
    <>

    <form onSubmit={inputHandler} className="row form-inline">
      <input className="col form-control mr-sm-2" type="search" name="search" autocomplete="on" placeholder="Search Beer" aria-label="Search" defaultValue={q} />
      <button className="col-1 btn btn-outline-primary" type="submit">Search</button>
    </form>
  

          {location.pathname === 'search' && <div>

          {products
        .filter((beer) => beer.name.includes(q))
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
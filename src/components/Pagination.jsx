import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function Pagination(props) {

  const [beers, setBeers] = useState([]);

  let limit = 10;

  useEffect(() => {
    const getBeers = async () => {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?page=1&per_page=6`
        // `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${per_page}`
      );
      const data = await res.json();
      // const total = res.headers.get("x-total-count");
      // console.log(Math.ceil(total/6));
      setBeers(data);
    };

    getBeers();
  }, [limit]);

  const fetchBeers = async (currentPage) => {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`
      // `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${per_page}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const beersFormServer = await fetchBeers(currentPage);

    setBeers(beersFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <div className="container">
      <div className="row m-2">
        {beers.map((beer) => {
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
      </div>

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}


export default Pagination;

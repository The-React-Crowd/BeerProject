import { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import BASE_URL from "../data/data";
import { Pagination } from "antd";
import Search from "../filters/Search"
import PhFilter from "../filters/PhFilter";
import SrmFilter from "../filters/SrmFilter";
import VolumeFilter from "../filters/VolumeFilter";

function Home() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const [baseUrl, setBaseUrl] = useState(`${BASE_URL}`);

  const [resetButton, setResetButton] = useState(false);

  const [srm, setSrm] = useState(0);
  const [srmChecked, setSrmChecked] = useState(false);

  const [ph, setPh] = useState([0, 2]);
  const [phChecked, setPhChecked] = useState(false);

  const [current, setCurrent] = useState(1);
  const [minPage, setMinPage] = useState();
  const [maxPage, setMaxPage] = useState();
  const [pageSize, setPageSize] = useState(4);

  //FETCH
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [BASE_URL]);

  //FILTERED
  useEffect(() => {
    setFilteredData(
      data.filter(searchFilter).filter(srmFilter).filter(phFilter)
    );
    setMinPage(0);
    setMaxPage(pageSize);
    setCurrent(1);
  }, [srm, ph, srmChecked, phChecked, search, baseUrl, data]);

  function searchFilter(item) {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  }

  function phFilter(item) {
    if (phChecked) {
      if (item.ph >= ph[0] && item.ph <= ph[1]) {
        return true;
      }
      return false;
    }
    return true;
  }

  function srmFilter(item) {
    if (srmChecked) {
      if (item.srm >= srm) {
        return true;
      }
      return false;
    }
    return true;
  }

  function handlePageChange(page) {
    setCurrent(page);
    setMinPage((page - 1) * pageSize);
    setMaxPage(page * pageSize);
  }

  function handleReset() {
    setSearch("");
    setPhChecked(false);
    setSrmChecked(false);
    setResetButton(true);
  }

  return (
    <>
    <div className="p-3">
      <div className="row mx-5 d-flex">
        <div className="col-5 offset-3">
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className="col-4">
          <button type="reset" onClick={handleReset} className="btn btn-info">
            Reset
          </button>
        </div>
      </div>

      <VolumeFilter
        baseUrl={baseUrl}
        setBaseUrl={setBaseUrl}
        resetButton={resetButton}
        setResetButton={setResetButton}
      />

      <PhFilter
        ph={ph}
        setPh={setPh}
        phChecked={phChecked}
        setPhChecked={setPhChecked}
      />

      <SrmFilter
        srm={srm}
        setSrm={setSrm}
        srmChecked={srmChecked}
        setSrmChecked={setSrmChecked}
      />

     
      <div className="row g-3 text-center mx-0 mt-5">
          {filteredData.map(
            (c, index) =>
              index >= minPage &&
              index < maxPage && (
                <BeerCard
                  key={c.id}
                  image_url={c.image_url}
                  name={c.name}
                  id={c.id}
                  first_brewed={c.first_brewed}
                ></BeerCard>
              )
          )}
        </div>
     
        <div>
          {filteredData.length > 0 ? (
            <div className="text-center m-5">
              <Pagination
                current={current}
                onChange={handlePageChange}
                total={filteredData.length}
                pageSize={pageSize}
                showSizeChanger={false}
              />
            </div>
          ) : (
            <h3 className="text-center text-muted my-5">Beer Not Found</h3>
          )}
        </div>
        </div>
    
    </>
  );
}

export default Home;

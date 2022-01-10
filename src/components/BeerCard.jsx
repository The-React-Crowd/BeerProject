import { Link } from "react-router-dom";

function BeerCard(props) {

  const {image_url, name, first_brewed, id} = props

return <>

   <div className="card shadow-sm w-100">
   <img src={image_url} className="card-img-top m-5" alt="beers" style={{width: "20vh", height: "45vh" }} />
     <div className="card-body">
       <h6 className="card-title text-center h2">{name}</h6>
       <p className="card-subtitle mb-2 text-muted text-center">
       First Brewed In :{first_brewed}
       </p>
       <div className="text-center">
      <Link to={`/beer-details/${id}`} className="btn btn-dark mx-auto">Details</Link>
       </div>
     </div>
   </div>
            
</>
}
export default BeerCard;
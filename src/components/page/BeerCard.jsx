import noImage from "../../assests/NoImage.png"

function BeerCard(props) {

  const {image_url, name, first_brewed} = props

return <>

   <div className="col">
   <div className="card border-0">
   <img src={image_url ? image_url : noImage} className="mx-auto" alt={name} height={300} width={100} />
   </div>
     <div className="card-body">
       <h6 className="card-title">{name}</h6>
       <p className="card-subtitle">
       First Brewed In :{first_brewed}
       </p>
     </div>
   </div>
            
</>
}
export default BeerCard;

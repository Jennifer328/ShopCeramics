import React from 'react'
import {Link} from 'react-router-dom'
import Stars from "./Stars"

const DrinkSetCard = (props) => {

  return (
    
    <div className="card">
        <div className="card-image">
          <Link to={`/DrinkSetDetails/${props.id}`}> 
            {/* <img className="porduct-images tableware-images"  src={props.imgURL} alt="product-image"/> */}
            <img className="porduct-images"  src={props.imgURL} alt="product-image"/>
          </Link>
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-price">${props.price}</p>
            <div className="rate-stars">
               <span className="stars-box">   
               <Stars 
               rate={props.rate}
              /></span>
                <span className='rate'>{props.rate}</span>
                <span className='review-number'>({props.numberOfViews})reviews</span>
            </div>
            <input type="button" className="button btn-add-to-cart btn-blue" value="Add to Cart"/>
            
            
        </div>
    </div>
  )
}

export default DrinkSetCard
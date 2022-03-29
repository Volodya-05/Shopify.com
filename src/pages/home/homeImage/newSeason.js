import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getProductsLimit } from "../../../redux/reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



const NewSeason = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getProductsLimit())
      
    }
    ,[])

    const productsLimit = useSelector(store => store.shopData.productsLimit)


    const hover = (e) => {
        e.currentTarget.childNodes[1].classList.add('activeHoverBtn')
    }
    const blur = (e) => {
        e.currentTarget.childNodes[1].classList.remove('activeHoverBtn')
    }

    return (
        <div className='newSeason' >
            <h1>New Season</h1>
            <div className="Newborder"></div>
            <div className="newSeasonProds">
                {
                    productsLimit.length > 0 ?
                    productsLimit.map(productLimit => 
                        <div 
                            onMouseOver={hover} 
                            onMouseOut={blur} 
                            key={productLimit.id} 
                            className="newSeasonProduct"
                            >
                            <img  className="limitImg" src={productLimit.image} alt="home" />
                            <Link to={`/product${productLimit.id}`} className='hoverBtn'>SELECT OPTIONS  
                                <FontAwesomeIcon className="fontIcon" icon={faAngleRight} />
                            </Link>
                            <p className="titleAndPrice">{productLimit.title}</p>
                            <p className="titleAndPrice">${productLimit.price}</p>
                        </div>
                        ):<div className="loadingNS">Loading...</div>
                }
                
            </div>
            <p className="viewAllBtn">
               <Link to='/all' className="viewAllBtn" > VIEW  ALL <FontAwesomeIcon style={{marginLeft:'6px'}} icon={faAngleRight} /> </Link> 
            </p>
        </div>
    )
}


export default NewSeason

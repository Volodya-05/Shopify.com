import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ProductsGener = (props) => {
    const hover = (e) => {
        e.currentTarget.childNodes[3].classList.add('activeHoverBtn')
    }
    const  blur = (e) => {
        e.currentTarget.childNodes[3].classList.remove('activeHoverBtn')
    }
    return(
        <>
            {
                <div className="gridChild" onMouseEnter={hover} onMouseLeave={blur} key={props.id}>
                    <img className="imageAll" src={props.image} alt="" />   
                    <p className="title">{props.title}</p>
                    <p style={{color:'red'}}>${props.price}</p> 
                    <Link to={`/product${props.id}`}  className='btnOption'>SELECT OPTIONS
                        <FontAwesomeIcon className="fontIcon" icon={faAngleRight} />
                    </Link>        
                </div>
            
            }
        </>
    )
}


export default ProductsGener
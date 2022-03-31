import React, { useState } from "react";
import './allProducts.scss'


const AllFilters = (props) => {

    const [activePrice,setActivePrice] = useState(true)
    const showPrice = () => {
        setActivePrice(!activePrice)
    }
   

    return(
            
        <div className="filters">
            <div  className="price">
                <p onClick={showPrice}><span>Price</span> <span>{activePrice ? 'x' : '+'}</span> </p>   
                <div className={activePrice ? 'showContInps inputsCont' : "inputsCont"}>
                    <input type="text" value={props.minvalue} readOnly className={activePrice ? 'showInps priceInps': "priceInps"} placeholder="$"/>
                    <p className={activePrice ? 'showPriceDash priceDash' : "priceDash"}>_</p>
                    <input type="text" value={props.maxvalue} readOnly className={activePrice ? 'showInps priceInps': "priceInps"} placeholder="$"/>
                </div> 
                <div className={activePrice ? 'activeRangeContainer rangeContainer' : 'rangeContainer'}>
                    <div className={activePrice ? "slider active" : 'slider'}>
                        <div className="progress"></div>
                    </div>
                    <div className={activePrice ? 'range-input active' : 'range-input'}>
                        <input type="range" 
                            className='input' 
                            min={0} max={999} 
                            value={props.minvalue} 
                            onChange={props.changeValueMin} 
                            />
                        <input type="range" 
                            className='input'
                            min={1} max={1000} 
                            value={props.maxvalue} 
                            onChange={props.changeValueMax} 
                            />  
                    </div>
                </div>
            </div> 

            <div className="aviabil">
            <form action="#" method="#" autocomplete="off" name="reg">
              <span>Availability</span>
                <label>
                    <input type="radio" name="gender" />
                    <p>In Stock</p>
                </label>

                <label>
                    <input type="radio" name="gender" />
                    <p>Out of stock</p>
                </label>
            </form>  
            </div>
        </div>
    )
}


export default AllFilters
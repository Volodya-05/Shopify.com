import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Carousel } from "./carousel.js";
import './slider.scss'




const Slider = () => {

    return(
        <Carousel>
            <div className="item">
                <FontAwesomeIcon className="iconInsta" icon={faInstagram}/>
                <p className="p">"Oh man! I am so happy with my new garms. Well made, responsibly sourced and 
                    a great fit too. I shall be back next payday for more!"</p>
                    <p className="lighter">Jimmy Gilzean</p>
                    <p>Instagram</p>
            </div>
            <div className="item">
                <FontAwesomeIcon className="iconInsta" icon={faInstagram}/>
                <p className="p">"Always a great day when I get a new package from Morning Apparel. My new backpack 
                    is stunning. Thanks guys, you totally rock!"</p>  
                    <p className="lighter">Linda Knight</p>
                    <p>Instagram</p>  
            </div>
            <div className="item">
                <div style={{display:'flex', justifyContent:'center'}}>
                    <FontAwesomeIcon className="margin" icon={faStar}/>
                    <FontAwesomeIcon className="margin" icon={faStar}/>
                    <FontAwesomeIcon className="margin" icon={faStar}/>
                    <FontAwesomeIcon className="margin" icon={faStar}/>
                    <FontAwesomeIcon className="margin" icon={faStar}/>
                </div>
                <p className="p">"I must say your customer service is really excellent. No quibbles when I 
                    ordered the wrong size. Easy and painless to return and replace. Thanks!"</p>
                <p className="lighter">Brett Robinson</p>
                <p>Facebook</p>
            </div>
        </Carousel>            
    )
}


export default Slider
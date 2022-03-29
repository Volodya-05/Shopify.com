import React from "react";
import './home.scss'
import NewSeason from "./newSeason";
import Slider from "../slider/slider";
import furgon from '../../../images/iron_resin_headers_and_stopovers_0004_IMG_9387.webp'
import HomeOption from "./homeOption";
import imgSlide1 from '../../../images/slide1_720x.webp'
import imgSlide2 from '../../../images/slide1_74952ff4-d083-4234-b41b-a27c527069e3_720x.webp'
import App from "../slid/App";
import MapImage from '../../../images/map-1_720x.webp'

const Home = () => {
     
    return(
        <div className="home" onScroll={(e)=>console.log('yes')}>
            <App/>
            <NewSeason/>
            <Slider/>
            <div className="furgonCont">
                <img src={furgon} alt="" />
                <div className="absolute">
                    <h1>morning</h1>
                    <p>'Little do ye know your own blessedness; for to travel hopefully 
                        is a better <br></br> thing than to arrive, and the true success is to labour'</p>
                    <p>Robert Louis Stevenson</p>
                    <span>OUR PHILOSOPHY</span>
                </div>
            </div>
            <HomeOption />
            <div className="kartinki">
                <div className="imagesContainers containers">
                    <img src={imgSlide1} alt="" />
                </div>
                <div className="textContainer containers">
                    <p style={{fontSize:'24px'}}>15% Off Sale</p>
                    <div className="border2"></div>
                    <p className="p">Use code EXTRA15 to save even more on oursummer sale. Plus free shipping on orders over $50.</p>
                    <button className="textbtn">SHOP THE SALE</button>
                </div>
                <div className="imagesContainers containers">
                    <img src={imgSlide2} alt="" />
                </div>
            </div>


            <div className="mapSec">    
            
                <div className="Ventour">
                    <div className="Store">
                        <h2>Ventura Store</h2>
                        <p>324 E. Main St, Ventura</p>
                        <p>CA 93001</p>
                        <p>(805) 643-0737</p>
                        <p>store@email.com</p>
                    </div>

                    <div className="Monday">
                        <p>Monday - Thursday, 11:00 to 19:00</p>
                        <p>Friday & Saturday, 10:00 to 19:00</p>
                        <p>Sunday, Closed</p>
                    </div>
                </div>


                <div className="mapImg">
                   <img className='imamap' src={MapImage} />            
                </div>

            </div>
        </div>
    )
}


export default Home
import React from 'react';
import './footer.scss';
import CartImage from '../images/f6de40885a655615dcbcbbb6b5eeca9b.jpg'
import VisaImage from '../images/i.webp'
import BankImage from '../images/png-clipart-bank-name-card-illustration-emv-credit-card-debit-card-smart-card-credit-card-text-payment.png'
import AcraImage from '../images/platinum.jpg'
import InecoImage from '../images/roimg-qy-524x636.jpg'

export default function Footer() {
    return (
        <>
            <hr />
      <div>   
        <div className='footer'>
            <div className="browse">
                <p>Browse</p>
                <ul>
                    <li>All productsdssad</li>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Theme</li>
                </ul>
            </div>
            <div className="help">
                <p>Help</p>
                <ul>
                    <li>FAQ</li>
                    <li>Terms & conditions</li>
                    <li>Contact us  </li>
                </ul>
            </div>
            <div className="about">
                <p>About</p>
                <span>Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</span>
            </div>
            <div className="social">
                <p>Social</p>
                <div className="icons">
                    <a href='https://twitter.com'><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="icons">
                    <a href="https://www.pinterest.ru"><i className="fa-brands fa-pinterest-p"></i></a>
                </div>
                <div className="icons">
                    <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            
        </div>


        <div className='C2022'>
            <div className='Money'>
               <select name="$$$$">
                  <option value="01"selected>UNITED STATES (USD $)</option>
                  <option value="02">Australia (AUD$)</option>
                  <option value="03">France (EUR €)</option>
                  <option value="04">Germany (EUR €)</option>
                  <option value="05">Italy (EUR €)</option>
                  <option value="06">Japan (JPY)</option>
                  <option value="07">Spain (EUR €)</option>
                  <option value="08">United Kingdom (GBP)</option>
               </select>
            </div>

            <div className='ImageCard'>
                <img className='cartImg' src={CartImage} /> 
                <img className='cartImg' src={VisaImage} />            
                <img className='cartImg' src={BankImage} /> 
                <img className='cartImg' src={AcraImage} /> 
                <img className='cartImg' src={InecoImage} /> 
            </div>

            <div className='C22'>
                <p><a href='/all'>Powered by Shopify</a></p> 
                <p>© 2022, Venue Theme Morning</p>
            </div>
            
           </div>
        </div>   
        </>
    )
}

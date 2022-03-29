import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss';
import ModalCart from "../../modalCart/modalCart";
import { useSelector } from "react-redux";


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    const cartLength = useSelector(store => store.shopData.cartLength)
    return(
        <header className="header">
            <div className="blackText">   
                <p>Free shipping on orders over $50</p>
            </div>
            <div className="menuContainer">
                <div className="menuChild leftMenu">
                    <Link to='/' className="smallChilds link">HOME</Link>
                    <Link  to='/all' className="smallChilds link">All Products</Link>
                    <p className="smallChilds">ABOUT</p>
                    <p className="smallChilds">FAQ</p>
                    <p className="smallChilds">BLOG</p>
                    <p className="smallChilds">CONTACT</p>
                    
                </div>
                <h1 className="logo"><Link  className="link" to='/'>morning</Link></h1>
                <div className="menuChild rightMenu">
                
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

                    <Link to="/Login" className="smallChilds link">LOG IN</Link>
                    <p onClick={()=>setModalActive(true)} className="smallChilds" style={{cursor:'pointer'}}>CART 
                    <span style={{color:'red',fontSize:'17px',marginLeft:'5px'}}>{cartLength}</span></p>
                </div>
            </div>
            <ModalCart active={modalActive} setActive={setModalActive}/>
            
        </header>
    )
}


export default Header
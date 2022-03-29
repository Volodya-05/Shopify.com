import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsAll } from "../../redux/reducer";
import './option.scss'
import { faFacebookF } from "@fortawesome/fontawesome-free-brands";
import DownMenu from "./downMenu/downMenu";
import ModalCart from "../../modalCart/modalCart";
import BascketController from "../../bascketController/Controller";


const Option = (props) => {
    const allProducts = useSelector(store => store.shopData.allProducts)
    const dispatch = useDispatch()
    
   
    
    useEffect(()=>{
        dispatch(getProductsAll())
    },[])

    const params = useParams()
    const [ quantity, setQuantity] = useState(1)

    const minusQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    const plusQuantity = () => {
        setQuantity(quantity + 1)
    }
    const [modalActive, setModalActive] = useState(false)
    const [activeColor,setActiveColor] = useState('black')
    const [activeSize,setActiveSize] = useState('XS')


    const addLocalS = (id,item) => {
        let cartItem = {
            id:item.id,
            title:item.title,
            size:activeSize,
            image:item.image,
            rating:item.rating,
            color:activeColor,
            category:item.category,
            description:item.description,
            price:item.price * quantity,
            realPrice:item.price,
            count:quantity,
        }
        if (!BascketController.checkProductInStorage(id,cartItem)) {
            BascketController.saveToLocal(cartItem)
        }
        setModalActive(true)
        setQuantity(1)
    }

   
    return(
        <div>
            {
                allProducts.length > 0 ?
                allProducts.map((item,index) => {
                    if(params.id == index +2){
                        return(
                            <div key={item.id}>
                                <div className="optionContainer">
                                    <div className="optionContainerImage">
                                        <img style={{height:'500px', width:'100%'}} src={item.image} alt="" />
                                    </div>
                                    <div className="optionContainerRight">
                                        <h1>{item.category}</h1>
                                        <div className="border"></div>
                                        <p style={{borderBottom:'1px solid black',paddingBottom:'15px'}} className="material">{item.description}</p>
                                        <h2 style={{color:'red',margin:'30px 0'}}>${item.price}</h2>
                                        <div>
                                            <span style={{backgroundColor:activeColor}} className='colors'>Color {activeColor.toUpperCase()}</span>
                                            <div className="colorsContainer">
                                                {
                                                    item.colors.map((color,index)=> 
                                                        <div key={index} className="childBlack" onClick={()=>setActiveColor(color)} style={{backgroundColor:color}}></div>    
                                                    )                                                
                                                }
                                            </div>
                                        </div>
                                        <p className="sizes">Sizes</p>
                                        <div className="sizeContainer">
                                            {
                                                item.sizes.map((size,index)=>
                                                    <p key={index} className={activeSize === size ? 'black' : 'sizeNumber'}  onClick={()=>setActiveSize(size)}>{size}</p>
                                                )
                                            }
                                        </div>

                                        <div className="quantityContainer">
                                            <p style={{textAlign:'center'}}>Quantity</p>
                                            <div>
                                                <button className="quantityBtn" onClick={minusQuantity}>-</button>
                                                <span className="quantityNumber">{quantity}</span>
                                                <button className="quantityBtn" onClick={plusQuantity}>+</button>
                                            </div>
                                        </div>
                                        <button onClick={(e)=>addLocalS(item.id,item)} className="catrBtn">ADD TO CART +</button>
                                        <button className="buyBtn">BUY IT NOW</button>
                                        <div className="socIconsContainer">
                                            <FontAwesomeIcon className="icons" icon={faFacebookF} />
                                            <FontAwesomeIcon className="icons" icon="fa-brands fa-twitter" />
                                            <FontAwesomeIcon className="icons" icon="fa-brands fa-pinterest-p" />
                                            <FontAwesomeIcon className="icons" icon={faEnvelope} />
                                        </div>
                                        <p style={{margin:'20px 0',lineHeight:'1.5'}}>This is for all the road dogs out there who have iron-assed some 
                                            slab and even for the weekend warriors who embrace vanlife. 
                                            We salute the escapist in you with this style.</p>
                                        <p>Charcoal - 100% Cotton 30/1 Jersey Knit Washed Indigo - 50% Cotton / 50% Polyester 30/1 Jersey Knit</p>
                                    </div>
                                </div>

                                
                                <DownMenu/>
                                <ModalCart  active={modalActive} setActive={setModalActive}/>

                            </div>
                        )
                    }
                }): <div className="loading">LOADING...</div>
            }
        </div>
    )
}

export default Option
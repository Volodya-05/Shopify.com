import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BascketController from "../bascketController/Controller";
import { getCartData, getCartLength } from "../redux/reducer";
import './modalCart.scss'




const ModalCart = (props) => {
    const dispatch = useDispatch()
    let totalCount = 0
    let totalPrice = 0
    const cart = useSelector(store=> store.shopData.cart)
    const [update,setUpdate] = useState(cart.length)

    const minusQuantity = (item,id) => {
        if (item.id === id) {
            setUpdate(update - 1)
            let newCount = --item.count
            let newPrice = item.realPrice * item.count
            let cartItem = {
                id:item.id,
                realPrice:item.realPrice,
                title:item.title,
                size:item.size,
                image:item.image,
                rating:item.rating,
                color:item.color,
                category:item.category,
                description:item.description,
                count:newCount,
                price:newPrice,
            }
            BascketController.updateToLocal(cartItem,item)
        }
    }
    
    const plusQuantity = (item,id) => {
        if (item.id === id ) {
            setUpdate(update + 1)
            let newCount = ++item.count
            let newPrice = item.realPrice * item.count
            let cartItem = {
                id:item.id,
                realPrice:item.realPrice,
                title:item.title,
                size:item.size,
                image:item.image,
                rating:item.rating,
                color:item.color,
                category:item.category,
                description:item.description,
                count:newCount,
                price:newPrice,
            }
            BascketController.updateToLocal(cartItem,item)
        }
    }
    
        
        const deletes = (item) => {
            BascketController.removeToLocal(item)
            setUpdate(update - 1)
        }

        if (cart.length > 0 ) {
            cart.map(item=>{
                ++totalCount  
                totalPrice += +item.price
            })
            dispatch(getCartLength(totalCount))
        }
        
        return(
            <div className={props.active ? 'modal active' : 'modal'} onClick={()=> props.setActive(false)}>
            <div className={props.active ? 'modalContent active' : 'modalContent'} onClick={e => e.stopPropagation()}>
                <p className="cartTitle">Shopping Cart</p>
                {   
                    cart.length > 0 ?
                    cart.map((item ,index) =>
                            <div key={index} className="cartItem">
                                <Link className="linkHome" to={`/product${item.id}`}>
                                    <div className="cartItemImage">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>  
                                    <p className="category">{item.title.toUpperCase()}</p>
                                <div className="cartProductInfo">
                                    <p className="color" style={{backgroundColor:item.color,color:'white'}}>
                                        {item.color.toUpperCase()}
                                    </p>
                                    <p className="size">
                                        {item.size}
                                    </p>
                                </div>
                                <div>
                                    <button  className="quantityBtn" onClick={(e)=>minusQuantity(item,item.id)} >-</button>
                                    <span className="quantityNumber"> {item.count}</span>
                                    <button  className="quantityBtn" onClick={(e)=>plusQuantity(item,item.id)} >+</button>
                                </div>
                                <div >
                                    <span style={{color:'red'}}>~{Math.floor(item.price)}$</span>
                                    <button  onClick={()=>deletes(item)} className="quantityBtn delete"> X</button>
                                </div>
                            </div>
                    ): <div className="emptyCart">Cart is Empty</div>
                    
                }
                <div className="subCont">
                    <p>Shipping & taxes calculated at checkout</p>
                    <p><span className="subtotal" >Subtotal</span> <span style={{color:'red'}}>${totalPrice}</span> </p>
                </div>
                <div className="cartBtns">
                    <button className="continue cartBTN">CONTINUE SHOPPING</button>
                    <button className="check cartBTN">CHECK OUT <FontAwesomeIcon icon={faAngleRight}/> </button>    
                </div>
            </div>
        </div>
    )
}


export default ModalCart
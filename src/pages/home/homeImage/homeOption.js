import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAll } from "../../../redux/reducer";
import { Link } from "react-router-dom";
import ModalCart from "../../../modalCart/modalCart";
import '../../productOption/option.scss'
import BascketController from "../../../bascketController/Controller";





const HomeOption = () => {

    
  const [modalActive, setModalActive] = useState(false)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProductsAll())
        getRandom()
    },[])
    
    const allProducts = useSelector(store => store.shopData.allProducts)
    const [ quantity, setQuantity ]  = useState(1)
    
    const minusQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    const plusQuantity = () => {
        setQuantity(quantity + 1)
    }
    const getRandom = () => {
        const random = Math.random()*20
        const floored = Math.ceil(random)
        localStorage.setItem('floored', floored)
    }
    const flored = localStorage.getItem('floored')

    const [activeColor,setActiveColor] = useState('black')
    const [activeSize,setActiveSize] = useState('XS')
        const addLocalSHome = (id,item) => {
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
    <>
        {
            allProducts.length > 0 &&
            allProducts.map((item,index) => {
                if(flored == index + 1){

                  return(
                     <div key={index}>
                        <div className="optionContainer">
                            <div className="optionContainerImage">
                                <img style={{height:'700px', width:'100%'}} src={item.image} alt="" />
                            </div>
                            <div className="optionContainerRight">
                                <h1>{item.category}</h1>
                                <div className="border"></div>
                                <p style={{borderBottom:'1px solid black',paddingBottom:'15px'}} className="material">{item.description}
                                    <Link className="linkHome" to={`/product${item.id}`}>Learn More</Link>  
                                </p>
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
                                <button onClick={()=>addLocalSHome(item.id, item)}  className="catrBtn">ADD TO CART +</button>
                                <button className="buyBtn">BUY IT NOW</button>
                            </div>
                        </div>
                     </div>
                    )
                }
            })
        }
        <ModalCart  active={modalActive} setActive={setModalActive}/>
    </>
        
    )
}

export default HomeOption
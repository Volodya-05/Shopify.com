import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAll } from "../../redux/reducer";
import './allProducts.scss'
import allImage from '../../images/Fall16_05_1400x_35f79ad1-a25e-4ae5-822f-b945e861d279_1950x (1).webp'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllFilters from "./allFilters";
import ProductsGener from "./productsGener";


const AllProducts = () => {
    const dispatch = useDispatch()
    const [imgActive,setImgActive] = useState(false)
    
    
    useEffect(()=>{
        dispatch(getProductsAll())
        setImgActive(true)
    },[])
    
    const allProducts = useSelector(store => store.shopData.allProducts)

    const [minValue,setMinValue] = useState(0)
    const [maxValue,setMaxValue] = useState(1000)
    const [activeChange,setActiveChange] = useState(false)
    const [filteredProds,seFilteredProds] = useState([])

    
    
    const changeValueMin = (e) => {
        setActiveChange(true)
        seFilteredProds(allProducts.filter((item) => item.price <= maxValue && item.price >= minValue))
        setMinValue(e.target.value)
        if(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1]){
                e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].
                childNodes[1].classList.remove('displayNONE')
            }
    }
    const changeValueMax = (e) => {
        setActiveChange(true)
        seFilteredProds(allProducts.filter((item) => item.price <= maxValue && item.price >= minValue))
        setMaxValue(e.target.value)
        if(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1]){
            e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].
            childNodes[1].classList.remove('displayNONE')
        }
        
    }

    if(minValue > (maxValue - 50)){
        let tarb = maxValue - minValue
        setMaxValue(Number(maxValue) + tarb) 
        setMinValue(Number(minValue) - tarb)
        if(minValue - tarb < 0 ){
            setMinValue(0)
        }
    }


    const clearPriceFilter = (e) => {
        setActiveChange(false)
        setMaxValue(1000)
        setMinValue(0)
        e.currentTarget.classList.add('displayNONE')
    }


    return(
        <div >
            <div className="imageContainerAll">
                <img className={imgActive ? 'allImg' : ''} src={allImage} alt="" />
            </div>
            <div className="theStore">
                <h2 >The store</h2>
                <div className="border" style={{margin:'20px auto'}}></div>
                <p >Choose well and buy less. We believe in owning fewer, quality things and 
                    making them last a long time. That’s why if any of our product ever breaks 
                    down, you can send it back to us and we’ll repair it.</p>    
            </div>
            <div className="containerProds">
                <AllFilters 
                    minvalue={minValue} 
                    maxvalue={maxValue} 
                    changeValueMin={changeValueMin} 
                    changeValueMax={changeValueMax}
                />
                <div className="div2">
                    <h2 style={{display:'inline-block'}}>Filters</h2>
                    {
                        activeChange && 
                        <button className="filterBTNS" onClick={clearPriceFilter}> {minValue} - {maxValue} <span className="deleteBTNFilterSpan">X</span> </button>
                    }
                    {/* <button onClick={clearFilter} className="filterBTNS">Sort <span className="deleteBTNFilterSpan">X</span></button> */}
                </div>
                <div className="products">
                    {
                        activeChange && filteredProds.length > 0 ?
                        filteredProds.map((item)=>
                            <ProductsGener {...item} key={item.id}/>):
                        activeChange && filteredProds.length == 0? 
                        <div className="notFound"> 
                            <p> No products found</p>  
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>:
                        allProducts.length > 0 ?
                        allProducts.map(item => 
                            <ProductsGener {...item}  key={item.id}/>
                        ):<div className="notFound"> <p> LOADING...</p></div>
                    }    
                </div>
            </div>
        </div>
    )
}

export default AllProducts
import {sendRequest} from '../api/api'



const initialState = {
    productsLimit:[],
    allProducts:[],
    cart:[],
    cartLength:0
}


const GET_PRODUCTS_LIMIT = 'GET_PRODUCTS_LIMIT'
const GET_PRODUCTS_ALL = 'GET_PRODUCTS_ALL'
const GET_CART_LENGTH = 'GET_CART_LENGTH'
const GET_CART = 'GET_CART'



const ShopReducer = ( state = initialState, action) =>{
    switch(action.type){
        
        case GET_PRODUCTS_LIMIT:
            return{
                ...state,
                productsLimit: action.productsDatalimit
            }    
        case GET_PRODUCTS_ALL:
            return{
                ...state,
                allProducts: action.productsDataAll
            }      
        case GET_CART_LENGTH:
            return{
                ...state,
                cartLength: action.cartLength
            }
        case GET_CART:
            return{
                ...state,
                cart: action.getCart
            }    
        default:return state

    }
}


export default ShopReducer


const getProductsDataLimit = (productsDatalimit) => ({type:GET_PRODUCTS_LIMIT, productsDatalimit}) 
const getProductsDataAll = (productsDataAll) => ({type:GET_PRODUCTS_ALL, productsDataAll })
export const getCartLength = (cartLength) => ({type:GET_CART_LENGTH, cartLength})
export const getCart = (getCart) => ({type:GET_CART, getCart})


export const getProductsLimit = () => {
    return async (dispatch) => {
        const response = await sendRequest(`http://localhost:8000/products`,'GET')
        const spl = response.splice(2,3)
        dispatch(getProductsDataLimit(spl))
    }
}


export const getProductsAll = () => {
    return async (dispatch) => {
		const response = await sendRequest(`http://localhost:8000/products`,'GET')
        dispatch(getProductsDataAll(response))
        // console.log(response);
    }
}


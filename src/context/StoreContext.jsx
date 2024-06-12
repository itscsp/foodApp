import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets"; //Now we are getting this data from backend
import axios from "axios";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [food_list, setFoodList] = useState([])
    const url = `${__BASE_URL__}`; 
    const [token, setToken] = useState("");



    const addToCart = async (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]:1}))
        } else {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }

        debugger;
        if(token){
            debugger;
            await axios.post(url+'/api/cart/add', {itemId}, {headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));

        if(token){
            await axios.post(url+'/api/cart/remove', {itemId}, {headers:{token}})
        }
    }

    // Cart total
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
      
                let itemInfo = food_list.find((product) => product._id === item);
                console.log('Price',itemInfo.price )
                totalAmount += Number(itemInfo.price ? itemInfo.price : '0') * cartItems[item];
            }
        } 
        return totalAmount; 
    }
 
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }


    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}})
        console.log(response);
        setCartItems(response.data.cartData);

    }


    //To set or get foodlist and token
    useEffect(()=> {
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem('token')) 
            }
        }

        loadData();
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart, 
        getTotalCartAmount,
        url,
        token,
        setToken,
    }

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider> 
    )
}

export default StoreContextProvider; 
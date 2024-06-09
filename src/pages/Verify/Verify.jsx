import './Verify.css';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {

    const [searchParams, setSearchParam] = useSearchParams();
    const {url} = useContext(StoreContext)
    const navigate = useNavigate();

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success) {
            navigate("/myorders")
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
        verifyPayment();
    },[])
  return (
    <div className='spinner__wrapper'>
        <div className="spinner">

        </div>
    </div>
  )
}

export default Verify
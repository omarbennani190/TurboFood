import React, { useContext, useEffect } from 'react';
import './Verify.css';
import axios from 'axios';
import {useNavigate, useSearchParams} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Verify = () => {
  // get params from url
  const [searchParams,setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  // get backend url from context
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url+"/api/order/verify",{success,orderId}); // call api
    if(response.data.success){ // rediriger vers page myorders
      navigate("/myorders");
    }
    else{
      navigate("/");
    }
  }
  
  useEffect(()=>{
    verifyPayment();
  },[])

  return (
    <div className="verify">
      <div className="spinner">

      </div>
    </div>
  )
}

export default Verify
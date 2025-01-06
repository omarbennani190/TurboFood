import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from './../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const { getTotalCartAmount,token,food_list,cardItems,url } = useContext(StoreContext);

  const [data,setData] = useState({
    nom:"",
    prenom:"",
    email:"",
    address:"",
    ville:"",
    region:"",
    codePostal:"",
    pays:"",
    telephone:""
  });

  const onChangeHandler = (event) => { // extracrt name et value
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}));
  }

  // useEffect(()=>{
  //   console.log(data);    
  // },[data])

  // rediriger vers payement
  const PlaceOrder = async (event) => {
    event.preventDefault();  // stop reload page
    
    let orderItems = [];
    food_list.map((item)=>{
      if(cardItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cardItems[item._id]; // get total qte in itemInfo
        orderItems.push(itemInfo); // remplir order data
      }
    })
    let orderData = {
      address:data.data,
      items:orderItems,
      amount:getTotalCartAmount()+2, // delivery charge
    }

    let response = await axios.post(url+"/api/order/place",orderData, {headers:{token}});            
    if(response.data.success){ // get session url
      const {session_url} = response.data;
      window.location.replace(session_url);  //  send user in this session
    }
    else{
      alert("Error in order process");
    }
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/cart");
    }
    else if(getTotalCartAmount===0){
      navigate("/cart")
    }
  },[token]) // executed when ever token is updated



  return (
    <form onSubmit={PlaceOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="nom" onChange={onChangeHandler} value={data.nom} type="text" placeholder='Nom' required />
          <input name="prenom" onChange={onChangeHandler} value={data.prenom} type="text" placeholder='Prenom' required />
        </div>
        <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email adresse' required />
        <input name="address" onChange={onChangeHandler} value={data.address} type="text" placeholder='Address' required />
        <div className="multi-fields">
          <input name="ville" onChange={onChangeHandler} value={data.ville} type="text" placeholder='Ville' required />
          <input name="region" onChange={onChangeHandler} value={data.region} type="text" placeholder='Région' required />
        </div>
        <div className="multi-fields">
          <input name="codePostal" onChange={onChangeHandler} value={data.codePostal} type="text" placeholder='Code postal' required />
          <input name="pays" onChange={onChangeHandler} value={data.pays} type="text" placeholder='Pays' required />
        </div>
        <input name="telephone" onChange={onChangeHandler} value={data.telephone} type="text" placeholder='Telephone' required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivry Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} DH</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
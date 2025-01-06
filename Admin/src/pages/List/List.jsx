import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import './List.css'
import { toast } from 'react-toastify';


const List = ({url}) => {
  // const url = "http://localhost:4000";

  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)    
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList(); // s'execute a chaque chargement de ce component
  },[])

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId}) // api call and delete from db
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }   
  }

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
            return(
              <div key={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price} DH</p>
                <p onClick={()=>removeFood(item._id)} className='cursor' style={{ color: 'red', paddingLeft: 13 }}>X</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

// Adding prop types validation
List.propTypes = {
  url: PropTypes.string.isRequired, // Ensures `url` is a string and is required
};
/*
PropTypes.number: Validates a number.
PropTypes.array: Validates an array.
PropTypes.object: Validates an object.
PropTypes.bool: Validates a boolean.
PropTypes.func: Validates a function.
PropTypes.node: Validates any renderable content (e.g., text, elements). */

export default List
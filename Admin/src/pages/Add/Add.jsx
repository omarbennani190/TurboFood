import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import './Add.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify';


const Add = ({url}) => {
     // const url = "http://localhost:4000";
     const [image, setImage] = useState(false);

     const [data,setData] = useState({
          name:"",
          description:"",
          price:"",
          category:"Salad"
     })

     const onChangeHandler = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setData(data=>({...data,[name]:value}))
     }

     // useEffect(()=>{
     //      console.log(data);
     // },[data]) //state name

     const onSubmitHandler = async (event) => {
          event.preventDefault(); // eviter reload          
          const formData = new FormData(); //envoi des donnee sous format FormData
          formData.append("name",data.name);
          formData.append("description",data.description);
          formData.append("price",Number(data.price));
          formData.append("category",data.category);
          formData.append("image",image);

          const response = await axios.post(`${url}/api/food/add`,formData) // appel de API
          if (response.data.success) {
               setData({  //reset les donnee si add true
                    name:"",
                    description:"",
                    price:"",
                    category:"Salad"
               })
               setImage(false)
               toast.success(response.data.message)
          }
          else{
               toast.error(response.data.message)
          }
     }

     return (
          <div className='add'>
               <form className="flex-col" onSubmit={onSubmitHandler}>
                    <div className="add-img-upload flex-col">
                         <p>Upload Image</p>
                         <label htmlFor="image">
                              <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                              {/* URL.createObjectURL(image) to display image preview */}
                         </label>
                         <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
                    </div>
                    <div className="add-product-name flex-col">
                         <p>Product name</p>
                         <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                    </div>
                    <div className="add-product-descritpion flex-col">
                         <p>Product description</p>
                         <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
                    </div>
                    <div className="add-category-price">
                         <div className="add-category flex-col">
                              <p>Product category</p>
                              <select onChange={onChangeHandler} value={data.category} name="category">
                                   <option value="Salad">Salad</option>
                                   <option value="Rolls">Rolls</option>
                                   <option value="Deserts">Deserts</option>
                                   <option value="Sandwich">Sandwich</option>
                                   <option value="Cake">Cake</option>
                                   <option value="Pure Veg">Pure Veg</option>
                                   <option value="Pasta">Pasta</option>
                                   <option value="Noodles">Noodles</option>
                              </select>
                         </div>
                         <div className="add-price flex-col">
                              <p>Product price</p>
                              <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='20 DH' />
                         </div>
                    </div>
                    <button type="submit" className='add-btn'>Add</button>
               </form>
          </div>
     )
}


// Adding prop types validation
Add.propTypes = {
     url: PropTypes.string.isRequired, // Ensures `url` is a string and is required
};

export default Add
import React, { useState } from 'react'
import { assets } from '../Assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("None");
  const [subCategory, setSubCategory] = useState("None");
  const [accessoryType, setAccessoryType] = useState("None");
  const [bestseller, setBestseller] = useState(false);
  const [accessory, setAccessory] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    console.log("Form Submitted");

    try {

      const formData=new FormData();

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("accessoryType", accessoryType)
      formData.append("bestseller",bestseller)
      formData.append("accessory",accessory)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response =await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}})

      if(response.data.success){
        toast.success(response.data.message);
        setName('')
        setDescription('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setCategory("None");
        setSubCategory("None");
        setAccessoryType("None");
        setBestseller(false);
        setAccessory(false);
        setSizes([]);
      }
      else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form className='flex flex-col w-full items-start gap-3 ' onSubmit={onSubmitHandler}>
      <div>
        <p className='mb-2'>Upload Image</p>
      </div>

      <div className='flex gap-2'>
        <label htmlFor="image1">
          <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
          <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
        </label>
        <label htmlFor="image2">
          <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
          <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
        </label>
        <label htmlFor="image3">
          <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
          <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
        </label>
        <label htmlFor="image4">
          <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
          <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden />
        </label>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here...' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Give Description...' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 sm:gap-8 w-full'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="None">None</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub-Category</p>
          <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
            <option value="None">None</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Accessories</p>
          <select value={accessoryType} onChange={(e) => setAccessoryType(e.target.value)} className='w-full px-3 py-2'>
            <option value="Key Ring">Key Ring</option>
            <option value="Action Figure">Action Figure</option>
            <option value="Devil Fruit">Devil Fruit</option>
            <option value="None">None</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder=' ₹' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])} >
            <p className={`${sizes.includes("S") ? "bg-green-100 border-green-500 border-1 rounded-sm" : "bg-slate-200 rounded-sm"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-green-100 border-green-500 border-1 rounded-sm" : "bg-slate-200 rounded-sm"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
            <p className={`${sizes.includes("L") ? "bg-green-100 border-green-500 border-1 rounded-sm" : "bg-slate-200 rounded-sm"} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-green-100 border-green-500 border-1 rounded-sm" : "bg-slate-200 rounded-sm"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-green-100 border-green-500 border-1 rounded-sm" : "bg-slate-200 rounded-sm"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>

        <input onChange={() => setAccessory(prev => !prev)} checked={accessory} type="checkbox" id='accessory' />
        <label className='cursor-pointer' htmlFor="accessory">Add to Accessory</label>
      </div>

      <button className='border border-black text-black w-28 py-3 mt-4 rounded-md cursor-pointer' type='submit' style={{ backgroundColor: "rgb(102, 204, 255, 0.6)" }}>Add</button>

    </form>
  )
}

export default Add
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productActions'

function ProductDetail() {
  const product = useSelector((state)=>state.product)
  const {productId}=useParams()
  console.log('Params:', useParams());
  console.log('id is :',productId)
  const dispatch = useDispatch()
  const fetchProductDetail =async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
      console.log('Err',err)
    })
    dispatch(selectedProduct(response.data))
  }
  useEffect(()=>{
   if (productId && productId!=="")fetchProductDetail()
  },[])
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail
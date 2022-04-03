import React, { useState , useEffect } from 'react'
import "./products.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { addCard, favProduct,removeFav} from '../../redux/actions';
import CancelIcon from '@mui/icons-material/Cancel';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';

const Products = ({items}) => {
    useEffect(() =>{
   AOS.init({duration:800})
},[])

  return (
    <div className='Products' data-aos="fade-up">
        <div className='Products__Wrapper'>
{items.map((item) => {
return <ItemCard item={item} key={item.id}/> 
})}
        </div>
    </div>
  )
}


const ItemCard = props =>{
const dispatch = useDispatch()
const {pathname} = useLocation();


const [fav, setFav] = useState(false)
const addFavorite = (item) =>{
dispatch(favProduct(item))
setFav(!fav)
}
const item = props.item;
    return <div className='Products__Wrapper__Item'>
   <img src={item.imgSrc} alt="" />
  <h4>{item.name}</h4>
  {pathname === "/" ? (  <div className={`favorite ${fav ? `favactive` : ""}`}  
   onClick={() =>addFavorite(item)}>
    <FavoriteIcon />
    </div>) :(
      <div className="favorite favactive"><CancelIcon onClick={() =>removeFav(item.id) } /></div>
    )}

    <div className='stars'>
<Rating name="size-small" defaultValue={item.ratings} />
    </div>
<div className='price'>
       <span>$</span>{item.price}
</div>
<Fab color="primary" aria-label="add" className='Add' onClick={() =>dispatch(addCard(item))}>
  <AddIcon />
</Fab>
</div>

}


export default Products
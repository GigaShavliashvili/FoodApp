import React, { useEffect } from 'react'
import "./sidebar.scss"
import Card from "../../assets/Card.png"
import Button from '../Button/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux'
import {removeCard, increment, decrement, totalPrice} from "../../redux/actions"
const Sidebar = () => {
    const cart = useSelector(state => state.FoodCard.Cart)
    const total = useSelector(state => state.FoodCard.total)
   const dispatch = useDispatch();

useEffect(() =>{
dispatch(totalPrice())
},[cart])

  return (
    <div className='Home-Sidebar'>
        <div className='Home-Sidebar__Image'>
<img src={Card} alt="Card" />
        </div>
        <div className='Home-Sidebar__Content'>
            {cart.length === 0 ? (
                   <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            ):(
                <div className='Cart'>
                   <div className='Cart__Header'>
 <h4>Menu Caregory</h4>
        <div style={{display:"flex", alignItems:"center"}}>
            <span className='header-span'>View All</span>
            <Button >
                <ArrowForwardIosIcon/>
            </Button>
        </div>
        </div>
                    {cart.map((item) =>{
                      return <div className='Cart__Item' key={item.iteminfo.id}>
                        <div className='Cart__Item__Image'>
                            <img src={item.iteminfo.imgSrc} alt="" />
                        </div>
                         <div className='Cart__Item__Content'>
                           <h5>{item.iteminfo.name}</h5>
                           <div className='Cart__Item__Content__info'>
                             <span>X{item.amount}</span>
                             <div className='Counter'>
                    <span onClick={() =>dispatch(decrement(item.iteminfo.id))}>-</span>
                    <span onClick={() =>dispatch(increment(item.iteminfo.id))}>+</span>
                             </div>
                             <p><span>$</span>{item.iteminfo.price}</p>
                           </div>
                        </div>
                      </div>
                    })}
                    <div className='Total__Wrapper'>
                    <div className='total'>
                      <h5>Total</h5>
                      <span>{total}$</span>
                    </div>
                    <Button className="check-out">Check Out</Button>
                </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Sidebar
import React, { useEffect } from 'react'
import Button from '../Button/Button'
import "./menu.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {MenuItems} from "../../data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { fillterProduct, getProduct } from '../../redux/actions';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
const MenuItemss = document.querySelectorAll(".swiper-slide")


const Menu = () => {

      useEffect(() =>{
   AOS.init({duration:800})
},[])


const dispatch = useDispatch();

useEffect(() =>{
MenuItemss.forEach((item) =>{
    item.addEventListener("click", () =>{
  MenuItemss.forEach((el) =>{
    el.classList.remove("activeMenu")
  })
item.classList.add("activeMenu")
  })
})
},[])

const  GetProductHandler = () =>{
  dispatch(getProduct())
  MenuItemss.forEach((el) =>{
    el.classList.remove("activeMenu")
  })
}

  return (
    <div className='Category-Menu' data-aos="zoom-in">
        <div className='Category-Menu__Header'>
 <h4>Menu Caregory</h4>
        <div style={{display:"flex", alignItems:"center"}}>
            <span>View All</span>
            <Button onClick={() =>GetProductHandler()}>
                <ArrowForwardIosIcon/>
            </Button>
        </div>
        </div>
        <div className='Category-Menu__Wrapper'>
      
              <Swiper
                grabCursor={true}
         slidesPerView={'auto'}
        spaceBetween={1}
        loop={true}
            >
          {MenuItems.map((item, index) =>{
return <SwiperSlide  key={item.id} onClick={() =>dispatch(fillterProduct(item.itemId))}>
  <img src={item.imgSrc}alt="" />
  <p>{item.name}</p>
  <Button classList="btn"><ArrowForwardIosIcon/></Button>
</SwiperSlide>
          })}
              </Swiper>
        </div>
    </div>
  )
}

export default Menu
import React from 'react'
import {  useSelector } from 'react-redux'
import HomeBanner from '../../Components/HomeBanenr/HomeBanner'
import Menu from "../../Components/Menu/Menu"
import Sidebar from '../../Components/SideBar/Sidebar'
import Products from '../../Components/Products/Products';
import "./favorite.scss"
import Banner from "../../assets/favbanner.png"
const Favorite = () => {
  const item = useSelector(state => state.Food.favProducts);
const ThemMode = useSelector(state => state.Them.mode);
const Color = useSelector(state => state.Them.color);

  return (
       <div  className={`${ThemMode} ${Color} Section-Favorite`}>
      <div className='Main'>
          <HomeBanner banner={Banner} />
      <Menu/>
      {item.length === 0 ? (
        <div className='alart'>You haven't Favorite Product</div>
      ) : (
 <Products items={item}/>
      )}
      </div>
<Sidebar/>
    </div>
  )
}

export default Favorite
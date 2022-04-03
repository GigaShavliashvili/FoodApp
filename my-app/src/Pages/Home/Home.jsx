import React, { useEffect } from 'react'
import HomeBanner from '../../Components/HomeBanenr/HomeBanner'
import Menu from "../../Components/Menu/Menu"
import Sidebar from '../../Components/SideBar/Sidebar'
import Products from '../../Components/Products/Products';
import { useSelector } from 'react-redux';
import "./home.scss" ;

const Home = props => {
const Banner = "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fbanner.png?alt=media&token=7e244d84-8821-477d-b273-4c9381a474fb"
const items = useSelector(state => state.Food.products);
const ThemMode = useSelector(state => state.Them.mode);
const Color = useSelector(state => state.Them.color)


  return (
    <div className={`${ThemMode} ${Color} Section-Home`}>
      <div className='Main'>
          <HomeBanner banner={Banner}/>
      <Menu/>
      {!items ? (
        <div>Loading...</div>
      ) : (
 <Products items={items} />
      )}
      </div>
<Sidebar/>
    </div>
  )
}

export default Home
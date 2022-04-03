import React from 'react'
import "./menu.scss"
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
} from "@mui/icons-material";
import {Link ,  useLocation} from "react-router-dom"
import ThemMenu2 from '../ThemMenu/ThemMenu2';


const MenuItem = [
    {
        display:"Home",
        path:"/",
        icon:<HomeRounded/>
    },
        {
        display:"Chat",
        path:"/chat",
        icon:<Chat/>
    },    {
        display:"wallet",
        path:"/wallet",
        icon:< AccountBalanceWalletRounded/>
    },    {
        display:"Favorite",
        path:"/favorite",
        icon:<Favorite/>
    },    {
        display:"Settings",
        path:"/settings",
        icon:<Settings/>
    }
    
]
const BottomMenu = props => {

const {pathname} = useLocation()  
const active =  MenuItem.findIndex((el) => el.path === pathname )

  return (
    <div className={`${props.ThemMode} ${props.Color} BottomMemu`}>
        
        <div className='BottomMemu__Wrapper'>
            <ul>
{MenuItem.map((item, index) =>{
    return <li className={index === active ? "active" : ''} key={index}>
        <div className='li__Wrapper'>
             <Link to={`${item.path}`}>{item.icon}</Link>  
             
        </div>  
        <div className='indicator'>
            <ThemMenu2/>
        </div>
                
    </li>
})}
</ul>

        </div>
    </div>
  )
}

export default BottomMenu
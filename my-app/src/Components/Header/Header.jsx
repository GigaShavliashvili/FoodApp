import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import "./header.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"


const Header = props => {
  return (
    <div className={`${props.ThemMode} Header`}>
        <div className='Header__Logo'>
          
          <Link to="/">
           <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt="" />
           </Link> 
        </div>

        <div className='Header__Search'>
            <div className='Header__Search__Wrapper'>
                <SearchIcon />
             <input type="text" placeholder='Search...'/>
            </div>
        </div>
        <div className='Header__Cart'>
            <Badge badgeContent={4} color="success">
  <ShoppingCartIcon />
</Badge>
        </div>
        <div className='Header__Profile'>
           <AccountCircleIcon/>
           <p className='personName'>Giga Shavliashvili</p>
        </div>
    </div>
  )
}

export default Header
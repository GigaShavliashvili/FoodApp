import React,{useEffect} from 'react'
import Button from '../Button/Button'
import "./banner.scss"
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
const HomeBanner = props => {
  const Bannerbg = props.banner;
      useEffect(() =>{
   AOS.init({duration:1000})
},[])

  return (
    <div className='HomeBanner' data-aos="fade-down">
        <div className='HomeBanner__Wrapper' style={{backgroundImage:`url(${Bannerbg})`}}>
      <div className='HomeBanner__Wrapper__Content'>
            <h3>Hello Giga ,</h3>
            <p>Get free discount for evry <span> $20</span> purchase</p>
            <Button>Learn More</Button>
      </div>
    <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
        </div>
    </div>
  )
}

export default HomeBanner
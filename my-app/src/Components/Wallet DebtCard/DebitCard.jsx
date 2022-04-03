import React,{useEffect} from "react";
import "./debtcard.scss"
  import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import monyImg from "../../assets/mony.png"
function DebitCard() {

    useEffect(() =>{
   AOS.init({duration:1000})
},[])
  return (
  <div className="rightMenu-main" data-aos="fade-right">
    <div className="rightMenu">
    <div className="debitCardContainer">
     <div className="debitCard">
    <div className="cardGroup">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266"
        alt=""
        className="cardLogo"
      />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="cardChip"
      />

      <div className="card_number">1234 567 8920 3200</div>
      <div className="card_name">Vetrivel Ravi</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
    </div>
    </div>
    <div className="MonyConteiner">
      <img src={monyImg} alt="" />
    </div>
    </div>
    </div>
  );
}

export default DebitCard;

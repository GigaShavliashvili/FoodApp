import React,{useState, useEffect} from 'react'
import banner from "../../assets/assistent.png"
import Button from '../../Components/Button/Button'
import SendIcon from '@mui/icons-material/Send'
import MessageIcon from '@mui/icons-material/Message';
import { useSelector } from 'react-redux';
import "./chat.scss"
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';

const Chat = () => {

    useEffect(() =>{
   AOS.init({duration:1000})
},[])

    const [text, setText] = useState([])
    const [value, setValue] = useState("")
const submitHandler = (e) =>{
e.preventDefault()
//setText([...setText, e.target.value])
if(value){
    setText([...text, value ])
setValue("")

}
else{
    console.log("no value");
}

} 
  const ThemMode = useSelector(state => state.Them.mode);
    const Color = useSelector(state => state.Them.color);
const ChartColor = useSelector(state => state.Them.chart);


  return (
    <div className={`${ThemMode} ${Color} Chat-Section`} style={{    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3cpath d='M-17.26 438.01C166.4 436.51 423.92 252.71 693.79 253.21 963.67 253.71 927.52 576.64 1049.32 604.52' stroke='${ChartColor}' stroke-width='2'%3e%3c/path%3e%3cpath d='M-125.07 154.03C66.18 158.7 299.36 419.71 589.28 428.43 879.19 437.15 847.61 594.55 946.45 598.84' stroke='${ChartColor}' stroke-width='2'%3e%3c/path%3e%3cpath d='M-281.48 153.43C-121.05 154.01 81.43 261.46 348.31 276.63 615.2 291.8 546.33 616.21 663.21 654.29' stroke='${ChartColor}' stroke-width='2'%3e%3c/path%3e%3cpath d='M-64.88 216.8C111.85 220.74 248.48 457.36 597.92 463.2 947.35 469.04 1087.82 658.62 1260.71 660.71' stroke='red' stroke-width='2'%3e%3c/path%3e%3cpath d='M-162.09 254.17C-1.12 259.7 121.84 508.68 428.42 511.77 735 514.86 870.18 584.46 1018.93 584.6' stroke='${ChartColor}' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`}}>
        <div className='Chat-Wrapper'>
              <div className='Chat-Wrapper__Content' data-aos="fade-right">
                  <h1>Live Chat</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dignissimos! 
                      Quos sed aliquid nobis odit dolores ipsam veniam totam ipsum doloremque,
                       eaque officia expedita sunt distinctio, pariatur quisquam repudiandae ratione!</p>
                            <Button className="Chatbtn">Read More</Button>
              </div>
            <div className='Chat-Wrapper__Image'  data-aos="zoom-in">
                      <img src={banner} alt="" />
            </div>
        </div>
        <div className='Messenger'
         data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
     >
            <div className='Messenger__Wrapper'>
                <div className='Messenger__Wrapper__Header'>
                    Assistent
                     <MessageIcon/>
                </div>
                <div className='Messenger__Wrapper__Content'>
                    <div className='alart'>
                        <p>How can i help you...</p>
                    </div>
                    <div className='inComing-Message'>
                        <div className='message'>
                             hi
                        </div>
                    </div>
                    {text.map((el) =>{
                        return  <div className='send-Message'>
                 <div className='message'>
                       {el}
                        </div>
                    </div>
                    })}
                </div>
                         <form action="submit" onSubmit={submitHandler}>
                <div className='Messenger__Wrapper__Input'>
                    <input 
                    type="text"
                     placeholder='Message...' 
                     value={value}
                     onChange={(e) => setValue(e.target.value)}/>
                    <SendIcon onClick={submitHandler}/>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Chat
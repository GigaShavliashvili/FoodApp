import React,{useRef,useEffect,useState} from 'react'
import "./ThemMenu2.scss"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

import { useDispatch, useSelector } from 'react-redux';
import { selectColor, selectMode } from '../../redux/actions';
const ThemMenu2 = () => {
const dispatch = useDispatch();
    const ThemMode = useSelector(state => state.Them.mode);
     const PageColor = useSelector(state => state.Them);



const setMode = (mode) =>{
dispatch(selectMode(mode))

}



const setColor = (color,id) =>{
  dispatch(selectColor(color,id))

}

useEffect(() =>{
dispatch(selectMode(mode_settings.Light))
  dispatch(selectColor("theme-color-orange", "rgb(255, 117, 5)" ))
},[])

function actionToggle() {
Action.current.classList.toggle('activeMode')
}
const Action = useRef(null)
const [toggleThem, setToggleThem] = useState("")



const mode_settings = {
    Light:'theme-mode-light',
    Dark: 'theme-mode-dark',
}

const color_settings = [
    {
        id: 'rgb(53,156,253)',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'rgb(255,0,0)',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'rgb(16,212,210)',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'rgb(1,151,7)',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'rgb(255, 117, 5)',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]



  return (
    <div className="actionMode" ref={Action} onClick={() => actionToggle()}>
  <span> <DisplaySettingsIcon className='Logo' onClick={(e) => setToggleThem(!toggleThem)}/></span>
  <ul>
    <li className='Light-Dark'>
          <Brightness7Icon onClick={() => setMode(mode_settings.Light)}/>
      <Brightness4Icon onClick={() => setMode(mode_settings.Dark)}/>
    </li>
    <li>
      {
        color_settings.map((el) =>{
          return <span 
          key={el.id} 
          className='ColorElement'
          style={{backgroundColor:`${el.name}`}}
          onClick={() => setColor(el.class,el.id)}
          ></span>
        })
      }
    </li>
  </ul>
</div>
  )
}

export default ThemMenu2
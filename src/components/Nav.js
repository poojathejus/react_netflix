import './Nav.css';
import React from 'react';
import {useState} from 'react';

function Nav() {

    const [show,setshow] = useState(false)

    window.addEventListener('scroll',()=>{
        if(window.scrollY>200){
            setshow(true)
        }else setshow(false)
    })
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt='netflixlogo' />
    </div>
  )
}

export default Nav
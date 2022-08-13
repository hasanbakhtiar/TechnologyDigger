import React from 'react'
import Aos from 'aos';

import { useState,useEffect } from 'react'

const HomePage = () => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  const [animateone,setAnimateOne] = useState();
  const [animatetwo,setAnimateTwo] = useState();
  return (
    <div>

      
    <div className="animate">
    <img data-aos={animateone} src="https://aztech.az/wp-content/uploads/2022/03/ASUS-ZenBook-14-UX425EA-KI918-90NB0SM1-M00BA0-6.png" alt="" />
      <img data-aos={animatetwo} src="https://notecomp.az/image/cache/catalog/Notebook/Asus/90NB0WC1-M009Z0/ASUS%20ZenBook%20UX3402ZA-KM018W%2090NB0WC1-M009Z0-baku-640x640.jpg" alt="" />
    </div>



      <button onClick={()=>{
      if (!animateone) {
        setAnimateOne("fade-down-right");
        setAnimateTwo("");
      }else if (animateone == "fade-down-right") {
        setAnimateOne("");
        setAnimateTwo("fade-down-right");
      }{

      }
      }}>next</button>


    </div>
  )
}

export default HomePage
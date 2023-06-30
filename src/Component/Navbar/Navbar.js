import React, { useState } from 'react'
import style from "./Navbar.module.css"
import {  Option1,Option2,Option3,Option4 } from './Option'
import Accordian from './Accordian/Accordian'



const Navbar = () => {

const [show ,setShow]= useState(false)
const [show1 ,setShow1]= useState(false)
const [show2 ,setShow2]= useState(false)
const [show3 ,setShow3]= useState(false)
const [showmeu,setShowmenu] = useState(false)


const [id,setId] = useState(0)

const arr =[
   <Option1 Option1={show} />,
   <Option2 Option2={show1}/>,
  < Option3 Option3={show2}/>,
  <Option4 Option4={show3}/>
 ]

 
const Option1Fcn=()=>{
   setId(0)
   setShow(!show)
   setShow1(false)
   setShow2(false)
   setShow3(false)
}
const Option2Fcn=()=>{
   setId(1)
   setShow1(!show1)
   setShow(false)
   setShow2(false)
   setShow3(false)
}
const Option3Fcn=()=>{
   setId(2)
   setShow2(!show2)
   setShow1(false)
   setShow(false)
   setShow3(false)
}
const Option4Fcn=()=>{
   setId(3)
   setShow3(!show3)
   setShow1(false)
   setShow2(false)
   setShow(false)
}

const handleShow=()=>{
   setShowmenu(!showmeu)
}
  return (
    <>
    <div className={style.nav}>
     <div className={style.image}>
        image
     </div>
     <div className={style.dropmenu}>
      {showmeu ? 
        <h1 onClick={handleShow}>x</h1>
      :
      <h1 onClick={handleShow}>☰</h1> 
       }
    
     
     </div>
     {showmeu ?  <div  className={style.Accordian}>
      <Accordian />
      </div> : null}
    
     <div className={style.ipsum}>
          <h4 onClick={Option1Fcn} className={show? style.Active:""}>Option1</h4>
          <h4 onClick={Option2Fcn} className={show1? style.Active:""}>Option2</h4>
          <h4 onClick={Option3Fcn} className={show2? style.Active:""}>Option3</h4>
          <h4 onClick={Option4Fcn} className={show3? style.Active:""}>Option4</h4>
     </div>

   
    </div>

    <div className={style.Dropdown}>
    {arr[id] }
    </div> 

  

    </>
  )
}

export default Navbar

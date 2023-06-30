import React, { useState } from 'react';
import style from './Accordian.module.css';

export default function MyAccordian({ quest, ans }) {
  const [show, setShow] = useState(false);

  function ShowData() {
    setShow(!show);
  }
  return (
    <div >
      <div onClick={ShowData} className={style.body}>
        <h5>{quest}</h5>
        {show ? <p>⮝</p> : <p>⮟</p>}
      </div>
      <div className={style.options}>
      {show && 
      <ul >{ans.map((item)=><li>{item}</li>)}</ul>}
      </div>
    </div>
  );
}

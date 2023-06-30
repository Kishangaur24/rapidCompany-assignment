import React, { useState } from 'react';
import style from './Accordian.module.css';
import { data } from './Const';
import MyAccordian from './MyAccordian';

export default function Accordian() {
  const [post, setPost] = useState(data);
  return (
    <div className={style.main}>
      <section>
        {post.map((item) => (
          <>
            <MyAccordian key={item.id} {...item} />
          </>
        ))}
      </section>
    </div>
  );
}

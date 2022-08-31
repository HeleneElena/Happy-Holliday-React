import React from "react";

import style from './Background.module.css';
import bg from '../../../img/card-bg.jpg';


const Background = () => (
    <img className={style.img} src={bg} alt="greeting" />
  )
  


export default Background;


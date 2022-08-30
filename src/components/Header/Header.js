import React from "react";
import Container from './../Container/Container';
import Choises from './Choises/Choises';

import style from './Header.module.css';

const Header = () => {
 
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}>Поменять поздравление</button>
            <button className={style.button}>Поменять фон</button>
          </div>
            <Choises />
        </div>
      </Container>
    </header> 
  )
  
}

export default Header;
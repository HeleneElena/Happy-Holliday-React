import React from "react";
import Container from './../Container/Container';
import Felicitation from './Felicitation/Felicitation';import Background from './Background/Background';

import style from './Main.module.css';

const Main = () => {
 
  return (
    <main className="main">
      <Container>
       <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <Background />
            <Felicitation />
          </div>
        </div>
       </div>
      </Container>
    </main>
  )
  
}

export default Main;
import Felicitation from './Felicitation/Felicitation';
import Background from './Background/Background';
import Container from '../Container/Container';

import style from './Main.module.css';


const Card = () => (
    <Container> 
       <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <Background  />
            <Felicitation />
          </div>
        </div>
       </div>
    </Container>
)

export default Card;
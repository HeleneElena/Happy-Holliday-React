import Felicitation from './Felicitation/Felicitation';import Background from './Background/Background';

import style from './Main.module.css';
import Container from '../Container/Container';
import bg from '../../img/card-bg.jpg';


const Main = () => (
    <Container> 
       <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <Background bg={bg} />
            <Felicitation />
          </div>
        </div>
       </div>
    </Container>
)

export default Main;
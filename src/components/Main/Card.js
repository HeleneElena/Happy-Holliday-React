import Felicitation from './Felicitation/Felicitation';
import Background from './Background/Background';
import Container from '../Container/Container';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import style from './Main.module.css';
import { fetchTextId } from '../../store/textSlice';
import { fetchImageId } from '../../store/imgSlice';

const Card = () => {
  const { idText, idImg } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(idText && idImg) {
        dispatch(fetchTextId(idText));
        dispatch(fetchImageId(idImg));
    }
  });

  return (
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
}

export default Card;
import { useContext } from 'react';
import style from './Felicitation.module.css';
import { textContext } from './../../../context/textContext';

const Felicitation = () => {
  const {text} = useContext(textContext);
  return (
    <p className={style.text}>
        {text ?? 'Выберите повод для поздравления'}
    </p>
  )
}

export default Felicitation;


import { useState } from 'react';
import style from './Choises.module.css';
import { holidayContext } from './../../../context/holidayContext';

const holidays = {
  newyear: 'Новый год',
  bWomen: 'День рождения Ж',
  bMen: 'День рождения М',
  womenday: '8 марта',
};

const Choises = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [holiday, setHoliday] = useState('Выбрать праздник');

  const handlerToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeHoliday = title => {
    setHoliday(title);
    handlerToggleOpen();
  };

  return ( 
    <div className={style.wrapper}> 
        <button onClick={handlerToggleOpen} className={style.button}>{holiday}</button>
          {
            isOpen && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                      <li 
                          className={style.item} 
                          key={item[0]}
                          onClick={() => {
                            changeHoliday(item[1])
                          }} >
                            {item[1]}
                      </li>
                    ))}
                </ul>
            )
          } 
    </div>
  )
}

export default Choises;
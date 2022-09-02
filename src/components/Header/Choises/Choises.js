import { useState, useContext } from 'react';
import { holidaysContext } from './../../../context/holidaysContext';

import style from './Choises.module.css';

const Choises = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {holidays, holiday, changeHoliday} = useContext(holidaysContext);

  const handlerToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <div className={style.wrapper}> 
        <button onClick={handlerToggleOpen} className={style.button}>
            {holidays[holiday] || 'Выбрать праздник'} 
        </button>
          { isOpen && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                      <li 
                          className={style.item} 
                          key={item[0]}
                          onClick={() => {
                            changeHoliday(item[0]);
                            handlerToggleOpen();
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
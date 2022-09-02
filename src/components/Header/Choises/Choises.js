import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday } from '../../../store/holidaysSlice';

import style from './Choises.module.css';
import { useContext } from 'react';
import { holidaysContext } from './../../../context/holidaysContext';

const Choises = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { holiday } = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  const {holidays} = useContext(holidaysContext)

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
                            dispatch(setHoliday(item[0]));
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
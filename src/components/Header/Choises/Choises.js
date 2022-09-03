import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday, fetchHolidays } from '../../../store/holidaysSlice';

import style from './Choises.module.css';

const Choises = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { holiday, holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();


  const handlerToggleOpen = () => {
    if(loading !== 'success') return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchHolidays())
  }, [dispatch]);

  return ( 
    <div className={style.wrapper}> 
        <button onClick={handlerToggleOpen} className={style.button}>
            { loading!== 'success' ?
            'Загрузка...' :  holidays[holiday] || 'Выбрать праздник'} 
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
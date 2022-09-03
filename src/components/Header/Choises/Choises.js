import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from './../../../store/textSlice';
import { fetchImage } from './../../../store/imgSlice';
import { NavLink, useParams } from 'react-router-dom';

import style from './Choises.module.css';


const Choises = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  const {holiday} = useParams();


  const handlerToggleOpen = () => {
    if(loading !== 'success') return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
    if(holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImage(holiday));
    }
  }, [dispatch, holiday]);

  return ( 
    <div className={style.wrapper}> 
        <button onClick={handlerToggleOpen} className={style.button}>
            { loading !== 'success' ?
            'Загрузка...' :  
            holidays[holiday] || 'Выбрать праздник'} 
        </button>
          { isOpen && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                      <li 
                          className={style.item} 
                          key={item[0]}
                          onClick={() => {
                            handlerToggleOpen();
                      }}>
                          <NavLink 
                            to={`card/${item[0]}`}
                            className={({isActive}) => (isActive ? style.linkActive : '')}
                            > {item[1]} </NavLink>
                      </li>
                    ))}
                </ul>
            )}      
    </div>
  );
};

export default Choises;
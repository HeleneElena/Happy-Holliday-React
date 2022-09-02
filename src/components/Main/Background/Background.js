import { useContext } from 'react';
import { imgContext } from './../../../context/imgContext';
import bg from '../../../img/card-bg.jpg';


const Background = () => {
    const {urlImg} = useContext(imgContext);
    
    return (
        <img src={urlImg || bg} alt="фон открытки" width={840} height={520} />
    )
};

export default Background;


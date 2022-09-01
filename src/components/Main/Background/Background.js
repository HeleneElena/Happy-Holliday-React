import { useContext } from 'react';
import { imgContext } from './../../../context/imgContext';


const Background = ({bg}) => {
    const img = useContext(imgContext);
    
    return (
        <img src={bg} alt="фон открытки" width={840} height={520} />
    )
};

export default Background;


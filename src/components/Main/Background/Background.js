import bg from '../../../img/card-bg.jpg';
import { useSelector } from 'react-redux';


const Background = () => {
    const {urlImg} = useSelector(state => state.image);
    
    return (
        <img src={urlImg || bg} alt="фон открытки" width={840} height={520} />
    )
};

export default Background;


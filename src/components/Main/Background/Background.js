import style from './Background.module.css';

const Background = ({bg}) => (
    <img className={style.img} src={bg} alt="фон открытки" width={840} height={520} />
)

export default Background;


import Container from "../Container/Container";

import style from './Footer.module.css';
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as PinterestIcon } from "../../img/pinterest.svg";
import { ReactComponent as StumbleuponIcon } from "../../img/stumbleupon.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";

const Footer = () => ( 
    <footer className={style.footer}>
      <Container> 
         <div className={style.wrapper}>
            <div className={style.contacts} >
                <p>Design: Anastasia Ilina</p>
                <p> Сoder: <a href="https://github.com/HeleneElena">Helene Ebert</a> </p>
                <p>© HBCard, 2022</p>
            </div>
            <ul className={style.sozial}>
                <li className={style.item}>
                    <a href="https://vk.com" className={style.link}>
                        <VKIcon />
                    </a>
                </li>
                <li className={style.item}>
                    <a href="https://t.me" className={style.link}>
                        <TGIcon />
                    </a>
                </li>
                <li className={style.item}>
                    <a href="https://pinterest.com" className={style.link}>
                        <PinterestIcon />
                    </a>
                </li>
                <li className={style.item}>
                    <a href="https://stumbleupon.com" className={style.link}>
                        <StumbleuponIcon />
                    </a>
                </li>
            </ul>
        </div>
      </Container>
    </footer>
)

export default Footer;
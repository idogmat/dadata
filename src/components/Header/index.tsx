import * as React from 'react';
import s from './header.module.scss'
import {ReactComponent as Tool} from '../../assets/tool.svg';
import {useContext} from "react";
import {MenuContext} from "../Context";
import {ReactComponent as UserSVG} from '../../assets/menulogo/user.svg'

const Header: React.FC = () => {
    const context = useContext(MenuContext);
    const handleItemClick = () => {
        context?.toggleMenu();
    };
    return (
        <div className={s.titleBar}>
            <div className={s.titleBar__logo}>
                <button onClick={handleItemClick} className={s.titleBar__btn}>
                    <Tool/>
                </button>
                <span>
                    Wrench CRM
                </span>
            </div>
            <div className={s.titleBar__user}>
                <button className={s.titleBar__btn}><UserSVG/></button>
                <div>
                <span>{'Имя '}</span>
                <span>{' Фамилия'}</span>
                </div>
            </div>
        </div>
    );
}
export default Header
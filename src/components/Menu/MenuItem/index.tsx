import {FC, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import s from './MenuItem.module.scss'
import {IItem, ISubItem} from "../../../utils/types.ts";
import toggleSVG from '../../../assets/menulogo/settingsToggle.svg'

const MenuItem: FC<IItem> = ({src, title, img, items}) => {
    const [toggle, setToggle] = useState<boolean>(true);
    const toggleHandler = () => {
        setToggle(prevState => !prevState)
    }
    const {pathname} = useLocation()
    const comperePath = pathname.slice(1, pathname.length)

    return (
        <div className={s.menuItem}>
            {!items ?
                <NavLink to={src} className={
                    comperePath === src
                        ? s.link + ' ' + s.active
                        : s.link
                }>
                    <img src={img} alt="logo"/>
                    {title}
                </NavLink>
                : <div className={s.settingsItem}>
                    <div className={s.settingsItem__container} onClick={toggleHandler}>
                        <img src={img} alt="logo"/>
                        <div className={s.settingsItem__title}>{title}</div>
                        <img style={{transform: toggle ? 'rotate(60deg)' : ''}} src={toggleSVG} alt="toggle"/>
                    </div>
                    <div
                        className={toggle
                            ? s.settingsItem__items
                            : s.settingsItem__items + ' ' + s.settingsItem__hide}
                    >
                        {!!items && items.map((el: ISubItem) => (
                            <div key={el.src} className={s.menuItem} style={{gap: '1rem'}}>
                                {
                                    <NavLink to={el.src} className={
                                        comperePath === el.src
                                            ? s.link + ' ' + s.active
                                            : s.link
                                    }>
                                        <img src={el.img} alt="logo"/>
                                        {el.title}
                                    </NavLink>
                                }
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    );
}

export default MenuItem;
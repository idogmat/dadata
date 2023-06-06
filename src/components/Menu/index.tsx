import s from './menu.module.scss'
import MenuItem from "./MenuItem";
import { IItem} from "../../utils/types.ts";
import {envMenuItems} from "../../utils/constants.ts";
import {useContext, useEffect, useRef} from "react";
import {MenuContext} from "../Context";
function Menu() {
    const context = useContext(MenuContext);
    const windowSize = useRef<number[]>([window.innerWidth, window.innerHeight]);
    useEffect(()=>{
        windowSize.current[0] <= 726 ?  context?.closeMenu() : context?.toggleMenu()
    },[])
    return (
        <div className={context?.isOpen ? s.menuContainer : s.menuContainerClosed}>
            <div className={s.menuContainer__title}>Меню</div>
            <div className={s.menuContainer__body}>
                {envMenuItems.map((el:IItem,index:number) => (
                    <MenuItem
                        src={el.src}
                        key={`${el}_${index + 1}`}
                        title={el.title}
                        items={el.items}
                        img={el.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
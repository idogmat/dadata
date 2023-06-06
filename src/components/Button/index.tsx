import s from './Button.module.scss'
import {FC, MouseEventHandler} from "react";
import {ReactComponent as  SearchSVG} from '../../assets/menulogo/search.svg'
interface IProps {
    title: string,
    action: MouseEventHandler
}

const Button:FC<IProps> = ({title, action}) => {
    return (
        <button className={s.customButton} onClick={action}>
            <SearchSVG/>
            <div>{title}</div>
        </button>
    );
};

export default Button;
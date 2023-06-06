import {FC} from "react";
import s from './HeaderComponent.module.scss'
interface PageHeaderProps {
    title: string,
    content: string
}

const HeaderComponent:FC<PageHeaderProps> = ({title, content}) => {
    return (
        <div className={s.header}>
            <div className={s.header__title}>{title}</div>
            <div className={s.header__content}>{content}</div>
        </div>
    );
};

export default HeaderComponent;
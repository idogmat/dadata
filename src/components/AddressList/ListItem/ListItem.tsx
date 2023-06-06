import {FC} from "react";
import s from './ListItem.module.scss'
interface ListItemProps  {
    value: string,
    unrestricted_value: string
}

const ListItem:FC<ListItemProps> = (
    {value, unrestricted_value}
) => {
    return (
        <div className={s.item}>
            <span className={s.item__text}>{value}, {unrestricted_value}</span>
        </div>
    );
};

export default ListItem;
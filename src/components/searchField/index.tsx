import {ChangeEventHandler, FC, MouseEventHandler} from "react";
import s from './searchField.module.scss'
import Button from "../Button";
interface SearchItemProps {
    searchValue: string,
    searchHandler: ChangeEventHandler,
    action: MouseEventHandler,
    clickToggle: boolean
}

const SearchField:FC<SearchItemProps> = ({searchValue, searchHandler, action, clickToggle}) => {
    return (
        <div className={s.searchItem}>
            <input
                className={s.input}
                placeholder='Введите интересующий вас адрес'
                value={searchValue}
                onChange={searchHandler}
            />
            {clickToggle &&
                <span className={s.wrongValue}>
                    Минимальное количество символов : 3
                </span>
            }
            <Button title={'Поиск'} action={action} />
        </div>
    );
};

export default SearchField;
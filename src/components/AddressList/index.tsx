import {useAppSelector} from "../../store";
import s from './AddressList.module.scss'
import ListItem from "./ListItem/ListItem.tsx";
const AddressList = () => {
    const {data} = useAppSelector(state => state.addressReducer)
    return (
        <div className={s.addressList}>
            <div className={s.addressList__header}>Адреса</div>
            <div className={s.addressList__content}>
                {data.map((el,index) => (
                    <ListItem
                        value={el.value}
                        unrestricted_value={el.unrestricted_value}
                        key={`${el}_${index + 1}`}
                    />))
                }
            </div>
        </div>
    );
};

export default AddressList;
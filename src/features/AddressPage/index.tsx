import SearchField from "../../components/searchField";
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../../store";
import {getList} from "../../store/addressActions.ts";
import HeaderComponent from "../../components/HeaderComponent";
import AddressList from "../../components/AddressList";
import s from './AddressPage.module.scss'
import {MenuContext} from "../../components/Context";
function AddressPage() {
    const context = useContext(MenuContext);
    const windowSize = useRef<number[]>([window.innerWidth, window.innerHeight]);
    useEffect(()=>{
        windowSize.current[0] <= 726 ?  context?.closeMenu() : context?.toggleMenu()
    },[])
    const [searchValue, setSearchValue] = useState<string>('')
    const [clickToggle, setClickToggle] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const action = () => {
        if (searchValue.length < 3) {
            setClickToggle(true)
            return
        }
        dispatch(getList(searchValue))
        setClickToggle(false)
    }
    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target) return
        setSearchValue(e.target.value)
    }
    return (
        <div className={(context?.isOpen )? s.container : s.closedMenu}>
            <HeaderComponent title={'Поиск адресов'} content={'Введите интересующий вас адрес'}/>
            <SearchField
                searchValue={searchValue}
                clickToggle={clickToggle}
                action={action}
                searchHandler={searchHandler}
            />
            <AddressList/>
        </div>
    );
}

export default AddressPage;
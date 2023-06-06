import React, {createContext, useState} from "react";
interface IProps{
    children:JSX.Element
}
interface MenuContextProps {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}
export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<IProps> = ({ children }):JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
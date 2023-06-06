import {IItem} from "./types.ts";
import homeSVG from '../assets/menulogo/home.svg'
import searchSVG from '../assets/menulogo/search.svg'
import tableSVG from '../assets/menulogo/table.svg'
import calendarSVG from '../assets/menulogo/calendar.svg'
import mapSVG from '../assets/menulogo/maps.svg'
import widgetsSVG from '../assets/menulogo/widgets.svg'
import settingsSVG from '../assets/menulogo/settings.svg'
import profileSVG from '../assets/menulogo/profile.svg'
import financeSVG from '../assets/menulogo/finance.svg'
import exitSVG from '../assets/menulogo/exit.svg'
export const envMenuItems:IItem[] = [
    {src: '/', title: 'Главная',img:homeSVG},
    {src: 'address', title: 'Поиск адресов',img:searchSVG},
    {src: 'table', title: 'Таблица',img:tableSVG},
    {src: 'calendar', title: 'Календарь',img:calendarSVG},
    {src: 'maps', title: 'Карта',img:mapSVG},
    {src: 'widgets', title: 'Виджеты',img:widgetsSVG},
    {
        src: 'settings', title: 'Настройки', img:settingsSVG,
        items: [
            {src: 'profile', title: 'Настройки профиля',img:profileSVG},
            {src: 'finance', title: 'Управление Финансами',img:financeSVG}
        ]
    },
    {src: 'exit', title: 'Выход',img:exitSVG}
]

export const token = '81cfac739870cdac3dede115ebe79e2bb7afae03'
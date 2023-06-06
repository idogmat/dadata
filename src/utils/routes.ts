import {IRoute} from "./types.ts";
import MainPage from "../features/MainPage";
import AddressPage from "../features/AddressPage";
import NotFoundPage from "../features/NotFound";

export const routes:IRoute[] = [
    {src: '/' , exact: 'true', element: MainPage},
    {src: '/address', exact: 'true', element: AddressPage},
    {src: '*', exact: 'true', element:  NotFoundPage}
]
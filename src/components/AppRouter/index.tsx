import {Route, Routes} from "react-router-dom";
import {routes} from "../../utils/routes.ts";
import s from './AppRouter.module.scss'
import {useContext} from "react";
import {MenuContext} from "../Context";

const AppRouter = () => {
    const context = useContext(MenuContext);

    return (
        <div className={context?.isOpen ? s.router : s.hideMenu}>
            <Routes>
                {routes.map((el) => (
                    <Route
                        key = {el.src}
                        path={el.src}
                        element={<el.element/>}
                    />))}
            </Routes>
        </div>
    );
};

export default AppRouter;
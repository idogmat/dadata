import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {store} from "./store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
)

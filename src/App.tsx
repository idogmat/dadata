import Header from './components/Header/index.tsx'
import {MenuProvider} from "./components/Context";
import Menu from "./components/Menu";
import './App.scss'
import AppRouter from "./components/AppRouter";
function App() {
    return (
        <div className="main">
            <MenuProvider>
                <>
                    <Header/>
                    <div className={'container'}>
                    <Menu/>
                        <AppRouter/>
                    </div>
                </>
            </MenuProvider>
        </div>
    )
}

export default App;
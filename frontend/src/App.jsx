//import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/loginPage.jsx";
import RegistrationPage from "./pages/registerPage.jsx";
import AppPage from "./pages/appPage.jsx";
import NotFoundPage from "./pages/notFoundPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppPage/>}/> {/* Главная страница */}
                <Route path="/login" element={<LoginPage/>}/> {/* Вход */}
                <Route path="/register" element={<RegistrationPage/>}/> {/* Регистрация */}

                {/* Любой несуществующий маршрут → NotFoundPage */}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    );
}


export default App;

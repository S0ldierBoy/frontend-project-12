//import './index.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import LoginForm from "./pages/loginPage.jsx";
import RegistrationForm from "./pages/registerPage.jsx";

function App() {
    return (<Router>
        <Routes>
            <Route path="/" element={<div className="auth-container">
                <div className="card">
                    <LoginForm/>
                </div>
            </div>}/>

            <Route path="/login" element={<div className="auth-container">
                <div className="card">
                    <RegistrationForm/>
                </div>
            </div>}/>
        </Routes>
    </Router>);
}


export default App;

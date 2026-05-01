import { useNavigate } from "react-router-dom"
import { useTheme } from "../store/theme/themeContext"
import "../styles/Home.css"

function Home(){
    const navigate = useNavigate();
    const { theme } = useTheme();

    const handleRegistration = () => {
        navigate('/register');
    }

    return (
        
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-content"> 
                    <h1>Welcome to Student Registration App</h1>
                    <p>Click the button below to register</p>
                    <div className="btn-container">
                        <button className="primary-btn" onClick={handleRegistration}>Register Here</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;
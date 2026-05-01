import { useTheme } from "../store/theme/themeContext"
import "../styles/Navbar.css"

function Navbar() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className="navbar">
            <h1>Student Registration App</h1>
            <button className="toggle-theme-btn" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Navbar;
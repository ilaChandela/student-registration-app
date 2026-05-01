import Navbar from "./Navbar";
import { useTheme } from "../store/theme/themeContext";

function Layout({ children }) {
    const { theme } = useTheme();
    return (
        <div className={`layout ${theme}`}>
            <Navbar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;
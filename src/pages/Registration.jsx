import { useTheme } from "../store/theme/themeContext"
import RegistrationForm from "../components/RegistrationForm"

function Registration() {
    const { theme } = useTheme();
    return (
        
        <div className={`registration-page ${theme}`}>
            <div className="registration-page-content">
                <RegistrationForm />
            </div>
        </div>
    );
}

export default Registration;
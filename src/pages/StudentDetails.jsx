import { useTheme } from "../store/theme/themeContext"
import StudentDetailCard from "../components/StudentDetailCard"
import Navbar from "../components/Navbar"

function StudentDetails() {
    const { theme } = useTheme();
    return(
        <div className={`student-details-page ${theme}`}>
            
            <StudentDetailCard />
        </div>
    )
}

export default StudentDetails;
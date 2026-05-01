import "../styles/StudentDetailCard.css"
import { useUser } from "../store/user/userContext";

function StudentDetailCard(){
    const { user } = useUser();
    if(!user){
        return <div><p className="error-message">No user found</p></div>
    }
    return(
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <h2>{user.name}</h2>
                </div>
                <div className="profile-details">
                    <div className="detail-item">
                        <span className="detail-label">Email:</span>
                        <span className="detail-value">{user.email}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Gender:</span>
                        <span className="detail-value">{user.gender}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Age:</span>
                        <span className="detail-value">{user.age}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Phone:</span>
                        <span className="detail-value">{user.phone}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Course:</span>
                        <span className="detail-value">{user.course}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetailCard;
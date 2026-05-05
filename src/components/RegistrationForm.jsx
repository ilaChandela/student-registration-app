import { useNavigate } from "react-router-dom";
import useStudentForm from "../hooks/useStudentForm";
import Loader from "./Loader";
import "../styles/RegistrationForm.css";

function RegistrationForm() {
  const initialState = {
    name: "",
    email: "",
    gender: "",
    age: "",
    phone: "",
    course: "",
  };

  const navigate = useNavigate();
  const { formData, loading, error, handleChange, handleSubmit, resetForm } =
    useStudentForm(initialState);

  const handleFormSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success) {
      navigate("/student-details");
    }
  };

  if (loading) {
    return <Loader text="Registering Student..." />;
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Registration Form</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleFormSubmit} className="registration-form-content">
          <div className="form-group name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group gender">
            <label htmlFor="gender">Gender</label>
            <div className="gender-options">
                <div className="gender-option">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />
              <label htmlFor="male">Male</label>
              </div>
              <div className="gender-option">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                required
              />
              <label htmlFor="female">Female</label>
              </div>
              <div className="gender-option">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
                required
              />
              <label htmlFor="other">Other</label>
            </div>
            </div>
          </div>
          <div className="form-group age">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              min="10"
              max="100"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="form-group phone">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              required
            />
          </div>
          <div className="form-group course">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter your course"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Registering..." : "Complete Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

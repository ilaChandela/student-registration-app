import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/user/userContext";

function useStudentForm(initialState){
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { addUser } = useUser();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            addUser(formData);
            resetForm();
            navigate("/student-details");
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        error,
        handleChange,
        handleSubmit,
        resetForm,
    };
}

export default useStudentForm;
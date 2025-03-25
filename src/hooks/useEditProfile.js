import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Parse } from "../services/parse";
import { useError } from "../components/context/error/useError";

export function useEditProfile() {
    const [formData, setFormData] = useState({ username: "", email: "" });
    const [loading, setLoading] = useState(true);
    const { showError } = useError();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = Parse.User.current();
            if (!currentUser) {
                showError("No user found!");
                navigate("/login");
                return;
            }

            setFormData({
                username: currentUser.get("username"),
                email: currentUser.get("email"),
            });
            setLoading(false);
        };

        fetchUserData();
    }, [navigate, showError]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const currentUser = Parse.User.current();
            currentUser.set("username", formData.username);
            currentUser.set("email", formData.email);

            await currentUser.save();
            navigate("/MyProfile");
        } catch (error) {
            showError("Failed to update profile: " + error.message);
        }
    };

    return {
        formData,
        loading,
        handleChange,
        handleSubmit,
    };
}




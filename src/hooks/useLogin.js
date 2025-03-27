import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authContext/authCont";
import { useError } from "../components/context/error/useError";
import { Parse } from "../services/parse";



export const useLogin = () => {
  const { login } = useContext(AuthContext);
  const { showError } = useError();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const currentUser = Parse.User.current();
        if (currentUser) {
          navigate("/gallery");
        } else {
          const sessionToken = localStorage.getItem("sessionToken");

          if (sessionToken) {
            try {
              await Parse.User.become(sessionToken);
              navigate("/gallery");
            } catch (error) {
              console.error("Invalid session token, clearing session:", error);
              localStorage.removeItem("sessionToken");
            }
          }
        }
      } catch (error) {
        console.error("Session restore error:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    checkSession();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@") || formData.email.length < 9) {
      showError("Email must included @ and must be min 9 characters.");
      return;
    }

    if (formData.password.length < 6) {
      showError("Password must be min 6 characters.");
      return;
    }

    try {
      await login(formData.email, formData.password, rememberMe);
      navigate("/gallery");
    } catch (error) {
      showError(error.message);
      setFormData((prevData) => ({ ...prevData, password: "" }));
    }
  };

  return {
    formData,
    rememberMe,
    handleChange,
    handleSubmit,
    setRememberMe,
    isLoading, // Връщаме състоянието за зареждане
  };
};

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authContext/authCont";
import { useError } from "../components/context/error/useError"; 
import { Parse } from "../services/parse";

export const useRegister = () => {
  const { login } = useContext(AuthContext);
  const { showError } = useError();   
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username.length < 3) {
      showError("Username must be min 3 characters.");
      return;
    }
    if (!formData.email.includes("@") || formData.email.length < 9) {
      showError("Email must included @ and must be min 9 characters.");
      return;
    }

    if (formData.password.length < 6) {
      showError("Password must be min 6 characters.");
      return;
    }

    if (formData.password !== formData.rePassword) {
      showError("The passwords do not match!");
      setFormData((prevData) => ({ ...prevData, password: "", rePassword: "" }));
      return;
    }

    setIsLoading(true); 

    const user = new Parse.User();
    user.set("username", formData.username);
    user.set("email", formData.email);
    user.set("password", formData.password);

    try {
      await user.signUp();
      await login(formData.email, formData.password, false);
      showError("Registration successful.");
      navigate("/gallery");
    } catch (error) {
      showError("Error: " + error.message);
      setFormData((prevData) => ({ ...prevData, password: "", rePassword: "" }));
    } finally {
      setIsLoading(false); 
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading, 
  };
};

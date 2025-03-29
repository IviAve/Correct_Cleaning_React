import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const showError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const showSuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <ErrorContext.Provider value={{ showError, showSuccess }}>
            {children}
            <ToastContainer />
        </ErrorContext.Provider>
    );
};

export default ErrorContext;

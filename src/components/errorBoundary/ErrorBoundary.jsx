


import { Component } from "react";
import Parse from "parse"; 

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
console.error("Error cautch in boundary:", error)
    return { hasError: true };
  }

  async sendErrorToServer(error, errorInfo) {
    const ErrorLog = Parse.Object.extend("Errors"); 
    const errorLog = new ErrorLog();
  
    errorLog.set("message", error.toString());
    errorLog.set("stack", errorInfo?.componentStack || "No stack trace");
    errorLog.set("timestamp", new Date());
  
    const currentUser = Parse.User.current();
    if (currentUser) {
      errorLog.set("user", currentUser); 
    }
  
    try {
      await errorLog.save();
      console.log("Error logged to Back4App");
    } catch (err) {
      console.error("Failed to log error:", err);
    }
  }
  

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
    this.sendErrorToServer(error, errorInfo); 
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

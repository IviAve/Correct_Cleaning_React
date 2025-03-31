import { Parse } from "../services/parse"; // Път към Parse, ако е нужно

export const registerUser = async (username, email, password) => {
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);

  try {
    await user.signUp();
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


export const loginUser = async (email, password, rememberMe) => {
  try {
    const user = await Parse.User.logIn(email, password);

    
    if (rememberMe) {
      localStorage.setItem("sessionToken", user.getSessionToken());
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const updateUserProfile = async (username, email) => {
  const currentUser = Parse.User.current();
  
  if (!currentUser) {
    throw new Error("No user found!");
  }

  currentUser.set("username", username);
  currentUser.set("email", email);

  try {
    await currentUser.save();
  } catch (error) {
    throw new Error("Failed to update profile: " + error.message);
  }
};
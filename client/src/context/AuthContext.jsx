import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// loggedUser keeps track if user has a token

export const AuthContextProvider = ({ children }) => {
  // make sure null is not read as a string or it wont work
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); // loggedUser values need to be string in local storage
  }, [loggedUser]);

  const login = async (input) => {
    // get loggedUser info from backend and set it with 'setLoggedUser'
    const res = await axios.post("http://localhost:4500/auth/login", input, {
      withCredentials: true,
    });
    setLoggedUser(res.data);
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:4500/auth/logout", null, {
        withCredentials: true,
      });
      setLoggedUser(null);
      localStorage.removeItem("loggedUser");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

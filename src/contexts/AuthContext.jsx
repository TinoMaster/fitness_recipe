import { createContext, useState } from "react";
import { config } from "../configs/db.config";
import { useNavigate } from "react-router-dom";

const USER_NAME = "USER_NAME";
const ROL_USER = "ROL_USER_APP";
const MY_AUTH_TOKEN = "AUTH_APP_TOKEN";

const initialUser = {
  name: window.localStorage.getItem(USER_NAME),
  role: window.localStorage.getItem(ROL_USER),
  token: window.localStorage.getItem(MY_AUTH_TOKEN),
};

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  /* States */
  const [user, setUser] = useState(initialUser);
  const [login, setLogin] = useState({});
  const [signup, setSignup] = useState({});
  /* Errors */
  const [error, setError] = useState(null);
  /* Loading */
  const [loading, setLoading] = useState(false);

  /* handlers */
  const handleSignup = (e) => {
    setError(null);
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  /* validators */
  const validateSignup = () => {
    console.log(signup);
    setError(null);
    const { name, email, password, confirm_password } = signup;
    if (!name || !email || !password || !confirm_password) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    if (password !== confirm_password) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    if (name.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return false;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setError("El correo no es válido");
      return false;
    }
    return true;
  };

  /* actions */
  const signupUser = async (e) => {
    e.preventDefault();
    const validator = validateSignup();
    if (validator) {
      setLoading(true);
      const { name, email, password } = signup;
      const url = `${config.URL}/${config.API}/user/signup`;
      const data = { name, email, password, role: "user" };
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.success) {
        setError(null);
        setSignup({});
        setLoading(false);
        window.location.href = "#/auth";
      } else {
        setLoading(false);
        setError(result.message);
      }
    }
    return false;
  };

  const states = { user, signup, error, loading };
  const functions = { handleSignup, signupUser };
  const data = { states, functions };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;

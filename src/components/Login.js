import React, { useState } from "react";
import { verifyUser } from "../actions";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, toggleAuth } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/todo");
  }

  // Define a styles object
  const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "65vh",
      width: "100%",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      borderRadius: "16px",
      rowGap: "20px",
      backgroundColor: "#f4f4f4",
      width: "35%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "2rem",
      marginBottom: "8px",
    },
    input: {
      padding: "10px",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "20px",
      focus: {},
    },
    button: {
      padding: "10px",
      backgroundColor: "#5bc9e7",
      color: "white",
      border: "none",
      borderRadius: "24px",
      cursor: "pointer",
      width: "50%",
      alignSelf: "center",
      fontSize: "1.5rem",
    },
    labelip: {
      display: "flex",
      flexDirection: "column",
    },
    loginHeader: {
      // size
      fontSize: "4rem",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUser(email, password).then((res) => {
      if (res.success) {
        toggleAuth();
      } else {
        alert("Invalid Credentials");
      }
    });
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.loginHeader}>Login To Your Todo</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.labelip}>
            <label style={styles.label}>Username:</label>
            <input
              className="username"
              style={styles.input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div style={styles.labelip}>
            <label style={styles.label}>Password:</label>
            <input
              className="password"
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button className="login-button" style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

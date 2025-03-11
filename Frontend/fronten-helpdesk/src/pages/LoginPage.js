import React, { useState } from "react";
import axios from "axios";
import Imagen from "../imagenes/logo proyecto color.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        usuario,
        password,
      });

      if (response.status === 200) {
        const { usuario, rol } = response.data;

        // Guardar usuario y rol en localStorage
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("rol", rol);

        // Redirigir según el rol del usuario
        if (rol === "admin") {
          navigate("/admin-dashboard");
        } else if (rol === "referencia") {
          navigate("/referencia-dashboard");
        } else if (rol === "facturacion") {
          navigate("/facturacion-dashboard");
        } else {
          navigate("/dashboard");
        }
      }
      
      setMessage(response.data.mensaje);
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Usuario o Contraseña incorrecta"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <img src={Imagen} alt="Logo" className="empresarial" />
        <h1>BIENVENIDOS A HELP DESK JCDB</h1>
      </header>

      <div className="row">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="bx bx-user"></i>
            <input
              type="text"
              placeholder="USUARIO"
              value={usuario}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <i className="bx bx-lock-open"></i>
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Aceptar"}
          </button>
        </form>

        {message && <p className="mensaje">{message}</p>}
      </div>
    </div>
  );
};

export default Login;

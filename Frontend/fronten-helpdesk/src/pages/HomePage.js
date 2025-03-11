import React from "react";
import { Link } from "react-router-dom";  // Para navegación si usas react-router
import "../styles/HomePage.css";  // Usamos un archivo CSS específico para esta página

function HomePage() {
  return (
    <div className="home-page">
      {/* Encabezado */}
      <header>
        <div className="logo">Help-desk JCDB</div>
        <input type="text" placeholder="Buscar" className="search" />
        <span className="username">Nombre de Usuario</span>
      </header>

      {/* Navegación */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/create-incident">Crear Incidencia</Link></li>
          <li><Link to="/dashboard">Incidencias</Link></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <main>
        <div className="content">
          <h2>Creación de incidencia</h2>
          <table>
            <thead>
              <tr>
                <th>Incidencias</th>
                <th>Número</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nuevo</td><td>0</td></tr>
              <tr><td>En curso</td><td>0</td></tr>
              <tr><td>En espera</td><td>0</td></tr>
              <tr><td>Resueltas</td><td>0</td></tr>
              <tr><td>Cerrado</td><td>0</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

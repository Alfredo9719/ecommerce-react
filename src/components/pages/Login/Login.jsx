import { useState } from "react";
import { loginService } from "../../../services/Auth.service";
import { jwtDecode } from "jwt-decode";
import './Login.css'
import { useAuth } from "../../context/AuthContext";


function Login() {

  const { fnLogin } = useAuth();

    const [formulario, setFormulario] = useState({
      email: '',
      password: ''
    });

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(formulario);

        loginService(formulario)
        .then(response => {
          const token = response.data.data
            fnLogin(token);
        }).catch(error => {
            console.log(error)
        })
    }
    return (
    <section>
  <div className="contenedor">
    <div className="formulario">
      <form onSubmit={enviarDatos}>
        <h2>Iniciar Sesión</h2>
        <div className="input-contenedor">
          <i className="fa-solid fa-envelope" />
          <input 
          type="email" 
          required 
          id="emailInput"
          onChange={handleInputChange}
          value={formulario.email} 
          name="email"
          />
          <label>Email</label>
        </div>

        <div className="input-contenedor">
          <i className="fa-solid fa-lock" />
          <input
          type="password" 
          required 
          onChange={handleInputChange} 
          id="passwordInput"
          value={formulario.password}
          name="password"
          />
          <label>Contraseña</label>
        </div>
        <div className="olvidar">
          <label>
            <input type="checkbox" /> Recordar
            <a href="#">Olvide la contraseña</a>
          </label>
        </div>
      <div>
        <button type="submit">Acceder</button>
        <div className="registrar">
          <p>No tengo Cuenta <a href="#">Crear una cuenta</a></p>
        </div>
      </div>
      </form>
    </div>
  </div>
</section>

    );
}

export default Login;
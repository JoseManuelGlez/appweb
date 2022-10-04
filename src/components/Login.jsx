import "../assets/styles/index.css";
import "../assets/styles/App.css";
import "../assets/styles/style.css";
import Card from "./Card";

function Login() {
    
    const login=[
        {
            titulo: "Correo:",
            input: "email"
        },
        {
            titulo: "Contraseña:",
            input: "password"
        } 
    ]

    return ( 
        <div className="fondo">
            <h1>Inicio de sesión</h1>
            <br />
            {login.map((login) => {
                return <Card titulo={login.titulo} input={login.input}/>;
            })}
            <input className="button" type="button" value="Guardar"/>
            <input className="button" type="reset"/>
            <br />
            <br />
            
        </div>
     );
}

export default Login;
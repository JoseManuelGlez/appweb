import "../assets/styles/index.css";
import "../assets/styles/App.css";
import "../assets/styles/style.css"
import Card from "./Card";

function Registro() {
    
    const registro=[
        {
            titulo: "Busqueda:",
            input: "search"       //      (x + x^2) = x(1+x)
        },
        {
            titulo: "Nombre:",
            input: "text"  //<input type="" />
        },
        
        {
            titulo: "Edad:",
            input: "number"
        },
        {
            titulo: "Correo:",
            input: "email"
        },
        {
            titulo: "Contraseña:",
            input: "password"
        },
        {
            titulo: "Telefono:",
            input: "tel"
        },
        {
            titulo: "Fecha de nacimiento:",
            input: "date"
        },
        
        {
            titulo: "Tiempo local:",
            input: "satetime-local"
        },
        {
            titulo: "Hora aproximada del registro:",
            input: "time"
        },
        {
            titulo: "Meme favorito:",
            input: "file"
        },
    ]

    return ( 
        <div className="fondo">
            <h1>Registro</h1>
            <br />
            {registro.map((registro) => {
                return <Card titulo={registro.titulo} input={registro.input}/>;
            })}
            <input className="button" type="button" value="Guardar"/>
            <input className="button" type="reset"/>
            <br />
            <input type="hidden" value="estoy escondido"/>
            <br />
            
        </div>
     );
}

export default Registro;
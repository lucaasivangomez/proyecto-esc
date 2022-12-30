import React from "react";
import Logo from "./../../images/Logo1.png";
import { useNavigate } from "react-router-dom";

const Main:React.FunctionComponent=()=>{
    const goTo = useNavigate();

    const redirectToDocentes = (e:any) => {
        e.preventDefault();
        goTo("/docentes");
    }
    const redirectToCursos = (e:any) => {
        e.preventDefault();
        goTo("/cursos");
    }
    return(
        <>
            <header>
                <div className="color-fondo">
                    <div className="container">
                        <img src={Logo} alt="Logo de la escuela" className="imagenes"/>
                        <h2 className="color-titulo">
                            "Colegio Tecnico Olga B. de Arko"
                        </h2>
                    </div>
                </div>
                
            </header>
            <main>
                <div>
                    <button onClick={redirectToDocentes}>Docentes</button>
                    <button onClick={redirectToCursos}>Cursos</button>
                </div>
                <hr/>
            </main>
            <footer>
                <p>Desarrollado por @LucasIvanGV</p>
            </footer>
        </>
    )
}
export default Main;
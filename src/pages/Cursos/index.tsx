import { FunctionComponent, useEffect, useState } from "react"
import { deleteCursoService, getCursosService } from "../../api/cursos"
import { useNavigate } from "react-router-dom";
import Logo from "./../../images/Logo1.png";

const Cursos:FunctionComponent=()=>{
    const navigate = useNavigate();
    
    const [cursos, setCursos] = useState<any[]>([])

    const loadData = () => {
        getCursosService()
        .then(data => {
            setCursos(data)
        })
    }
    useEffect(() => {
        loadData();
    },[])
    const redirectToMain = (e:any) => {
        e.preventDefault();
        navigate("/");
    }
    const redirectToCurso = (plazaId:string) => {
        navigate("/cursos/"+plazaId);
    }
    const redirectToCreate = (e:any) =>{
        e.preventDefault();
        navigate("/cursos/create");
    }
    //funcion flecha:
    //tipo de variable | nombre de funcion | async(solo si es asincronico) | parámetros | flecha | llaves
    const deleteCurso = async (plazaId:string) => {
        await deleteCursoService(plazaId);
        loadData();
    }

    return(
        <>  
            <div className="color-fondo">    
                <div className="container">
                    <img src={Logo} alt="Logo de la escuela" className="imagenes"/>
                    <h2>
                        "Cursos del colegio"
                    </h2>
                </div>
            </div>
            <hr/>
            <button onClick={redirectToMain}> ← </button>
            <button onClick={redirectToCreate}> Nuevo </button>

            <hr/>
            <table>
                <tr>
                    <th>
                        Curso
                    </th>
                    <th>
                        Ver detalles
                    </th>
                    <th>
                        Eliminar
                    </th>
                </tr>
                <tbody>
                        {
                            cursos.map((curso) => {
                                return(
                                    <tr> 
                                        <td>{curso.año} {curso.division} {curso.especialidad} {curso.turno}</td>
                                        <td><button onClick={()=>redirectToCurso(curso.plazaId)}> Ver detalles </button></td>
                                        <td><button onClick={()=>deleteCurso(curso.plazaId)}> Eliminar </button></td>
                                        
                                    </tr>
                                )
                            })
                        }

                </tbody>
            </table>
        </>
    )

}
export default Cursos;
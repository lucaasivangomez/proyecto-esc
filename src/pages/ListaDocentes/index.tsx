import { useEffect, useState, FunctionComponent } from "react";
import { getDocentesService, deleteDocenteService } from "../../api/docentes";
import { useNavigate } from "react-router-dom";
import Logo from "./../../images/Logo1.png";

const ListaDocentes:FunctionComponent=()=>{

    const navigate = useNavigate();
    const [docentes, setDocentes] = useState<any[]>([]);

    // carga la pagina
    const loadData = () => {
        getDocentesService()
        .then((data) => {
            setDocentes(data);
        })    
    }

    useEffect(() => {
        loadData();
    },[])
    const redirectToMain = (e:any) => {
        e.preventDefault();
        navigate("/");
    }
    const redirectToCreate = (e:any) => {
        e.preventDefault();
        navigate("/docentes/create");
    }
    const redirectToDocente = (dni:number) =>{
        navigate("/docentes/"+dni);
    }

    const deleteDocente = async (dni:number) =>{
        await deleteDocenteService(dni);
        loadData();
    }

    return(
        <>
            <div className="color-fondo">    
                <div className="container">
                <img src={Logo} alt="Logo de la escuela" className="imagenes" /* onMouseOver={showAlert} *//>
                    <h2>
                        <q>Lista de docentes del establecimiento</q>
                    </h2>
                </div>
            </div>
            <hr/>
            <button onClick={redirectToMain}> ← </button>
            <button onClick={redirectToCreate}> Crear </button>

            <hr/>
            <table>
                <tr>
                    <th>
                        Nombre del docente: 
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
                        docentes.sort().map(function(docente, indice:number){
                            return (
                                <tr key={indice}>
                                    <td>{docente.apellidos}</td>
                                    <td><button onClick={()=>redirectToDocente(docente.dni)}> Ver detalles </button> </td>
                                    <td><button onClick={()=>deleteDocente(docente.dni)}> Eliminar </button> </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <hr/>
            <hr/>
        </>
    )
}
export default ListaDocentes;
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCursoService } from "../../api/cursos";
import Logo from "./../../images/Logo1.png";

const DocenteCreate:FC=()=>{
    const navigate = useNavigate();

    const [plazaId, setPlazaId] = useState<string>("");
    const [año, setAño] = useState<string>("");
    const [division, setDivision] = useState<string>("");
    const [especialidad, setEspecialidad] = useState<string>("");
    const [turno, setTurno] = useState<string>("");


    const handleChangePlazaId = (e:any) =>{
        setPlazaId(e.target.value);
    };
    const handleChangeAño = (e:any) =>{
        setAño(e.target.value);
    };
    const handleChangeDivision = (e:any) =>{
        setDivision(e.target.value);
    };
    const handleChangeEspecialidad = (e:any) =>{
        setEspecialidad(e.target.value);
    };
    const handleChangeTurno = (e:any) =>{
        setTurno(e.target.value);
    };

    const handleSave = () =>{
        postCursoService({plazaId,año,division,especialidad,turno});
    };

    const redirectToCursos = (e:any) => {
        e.preventDefault();
        navigate("/cursos");
    };

    return(
        <>
            <div className="color-fondo">    
                <div className="container">
                    <img src={Logo} alt="Logo de la escuela" className="imagenes" /* onMouseOver={showAlert} *//>
                    <h2>
                        <q>Nuevo Curso</q>
                    </h2>
                </div>
            </div>
            <hr/>
            <button onClick={redirectToCursos}> ← </button>
            <br/>
            <input type="text" value={plazaId} placeholder='Plaza Id'onChange={handleChangePlazaId}/>
            <br/>
            <input type="text" value={año} placeholder='Año'onChange={handleChangeAño}/>
            <br/>
            <input type="text" value={division} placeholder='Division'onChange={handleChangeDivision}/>
            <br/>
            <input type="text" value={especialidad} placeholder='Especialidad'onChange={handleChangeEspecialidad}/>
            <br/>
            <select value={turno} onChange={handleChangeTurno}>
                <option value='TM' >Turno Mañana</option> 
                <option value='TT' >Turno Tarde</option> 
                <option value='TV' >Turno Vespertino</option> 
            </select>
            <br/>
            <button onClick={handleSave}> Guardar </button>

        </>
    )
}
export default DocenteCreate;
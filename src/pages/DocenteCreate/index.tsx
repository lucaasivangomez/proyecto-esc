import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postDocenteService } from "../../api/docentes";
import Logo from "./../../images/Logo1.png";

const DocenteCreate:FC=()=>{
    const navigate = useNavigate();

    const [apellidos, setApellidos] = useState<string>("");
    const [nombres, setNombres] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [direccion, setDireccion] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [celular, setCelular] = useState<string>("");

    const handleChangeApellidos = (e:any) =>{
        setApellidos(e.target.value);
    };
    const handleChangeNombres = (e:any) =>{
        setNombres(e.target.value);
    };
    const handleChangeDni = (e:any) =>{
        setDni(e.target.value);
    };
    const handleChangeDireccion = (e:any) =>{
        setDireccion(e.target.value);
    };
    const handleChangeMail = (e:any) =>{
        setMail(e.target.value);
    };
    const handleChangeCelular = (e:any) =>{
        setCelular(e.target.value);
    };

    //body era el objeto que tiene todo los campos
    const handleSave = () =>{
        postDocenteService({apellidos,nombres,dni:parseInt(dni),direccion,mail,celular});
    };
    const redirectToDocentes = (e:any) => {
        e.preventDefault();
        navigate("/docentes");
    };
    return(
        <>
            <div className="color-fondo">    
                <div className="container">
                    <img src={Logo} alt="Logo de la escuela" className="imagenes"/>
                    <h2>
                        <q>Nuevo docente</q>
                    </h2>
                </div>
            </div>
            <hr/>
            <button onClick={redirectToDocentes}> ← </button>
            <br/>
            <input type="text" value={apellidos} placeholder='Apellidos'onChange={handleChangeApellidos}/>
            <br/>
            <input type="text" value={nombres} placeholder='Nombres'onChange={handleChangeNombres}/>
            <br/>
            <input type="text" value={dni} placeholder='Dni'onChange={handleChangeDni}/>
            <br/>
            <input type="text" value={direccion} placeholder='Direccion'onChange={handleChangeDireccion}/>
            <br/>
            <input type="text" value={mail} placeholder='Mail'onChange={handleChangeMail}/>
            <br/>
            <input type="text" value={celular} placeholder='Celular'onChange={handleChangeCelular}/>
            <br/>
            <button onClick={handleSave}> Guardar </button>

        </>
    )
}
export default DocenteCreate;
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDocenteService } from '../../api/docentes';



const DocenteDetail:React.FC = () => {
    const [docente, setDocente] = useState<any>({});

    const {docenteDni} = useParams();

    const navigate = useNavigate();



    useEffect(() => {
        const dni:number = docenteDni === undefined ? 0 : parseInt(docenteDni);
        getDocenteService(dni)
        .then((data) => {
            setDocente(data);
        })
    }, [docenteDni])

    const redirectToDocentes = (e:any) => {
        e.preventDefault();
        navigate("/docentes");
    }
    return(
        <>
            <div className="color-fondo">    
                <div className="container">
                    <h2>
                        Detalles del docente {docente.apellidos} {docente.nombre}
                    </h2>
                </div>
            </div>
            <hr/>
            <button onClick={redirectToDocentes}>←</button>
            <hr/>
            <p>
                Apellidos: {docente.apellidos} <br/>
                Nombres: {docente.nombres} <br/>
                Dni: {docente.dni} <br/>
                Direccion: {docente.direccion} <br/>
                Mail: {docente.mail} <br/>
                contacto: {docente.celular} <br/>
            </p>


        </>
    );
}
export default DocenteDetail;                                                                            
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCursoService } from '../../api/cursos';
import Cursos from '../Cursos';

export interface Curso{
    plazaId?:string;
    año?:number;
    division?:number;
    especialidad?:string;
    turno?:'TT' | 'TM' | 'TV' ;
}

const CursoDetail:React.FC = () => {
    const [curso, setCurso] = useState<Curso>({});
    const {plazaId} = useParams();

    const goTo = useNavigate();

    useEffect(() =>{
        let _plazaId:string = plazaId?plazaId:"";
        getCursoService(_plazaId)
        .then((data)=>{
            setCurso(data);
        });


    },[])
    const redirectToCursos = (e:any) => {
        e.preventDefault();
        goTo("/Cursos");
    }
    return(
        <>
            <div className="color-fondo">    
                <div className="container">
                    <h2>
                        Detalles del curso {curso.año}° {curso.division}°
                    </h2>
                </div>
            </div>
            <hr/>
            <button onClick={redirectToCursos}>←</button>

            <hr/>
            <p>
                Plaza SIGE ID: {curso.plazaId} <br/> 
                Año: {curso.año} <br/> 
                División: {curso.division} <br/> 
                Especialidad: {curso.especialidad} <br/> 
                Turno: {curso.turno} <br/>
            </p>

        </>
    )
}
export default CursoDetail;

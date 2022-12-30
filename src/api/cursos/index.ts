import axios from "axios";

export async function getCursosService(){
    const {data} = await axios.get("http://localhost:8080/cursos");
    return data;
}
export async function getCursoService(plazaId:string){
    const {data} = await axios.get("http://localhost:8080/cursos/"+plazaId);
    return data;
}
export async function postCursoService(body:any){
    const {data} = await axios.post("http://localhost:8080/cursos",body);
    return data;
}

//funcion normal:
//async(solo si es asincrónico) | function | nombre de la función | parámetros y tipos | llaves
export async function deleteCursoService(plazaId:string){
    const {data} = await axios.delete("http://localhost:8080/cursos/"+plazaId);
    return data;
}
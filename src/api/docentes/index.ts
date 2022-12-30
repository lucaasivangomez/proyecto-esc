import axios from "axios";

export async function getDocentesService(){
    const {data} = await axios.get("http://localhost:8080/docentes");
    return data;
}
export async function getDocenteService(dni:number){
    const {data} = await axios.get("http://localhost:8080/docentes/"+dni);
    return data;
}
export async function postDocenteService(body:any){
    const {data} = await axios.post("http://localhost:8080/docentes/",body);
    return data;
}
export async function deleteDocenteService(dni:number) {
    const {data} = await axios.delete("http://localhost:8080/docentes/"+dni);
    return data;
}
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursoDetail from "./CursoDetail";
import Cursos from "./Cursos";
import DocenteDetail from "./DocenteDetail";
import DocenteCreate from "./DocenteCreate";
import CursoCreate from "./CursoCreate";
import ListaDocentes from "./ListaDocentes";
import Main from "./Main";



const Pages:React.FunctionComponent=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/docentes" element={<ListaDocentes/>}/>
                <Route path="/docentes/create" element={<DocenteCreate/>}/>
                <Route path="/docentes/:docenteDni" element={<DocenteDetail/>}/>
                <Route path="/cursos" element={<Cursos/>}/>
                <Route path="/cursos/create" element={<CursoCreate/>}/>
                <Route path="/cursos/:plazaId" element={<CursoDetail/>}/>
            </Routes> 
        </BrowserRouter>
    )
}
export default Pages;
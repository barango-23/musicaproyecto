import { Route, Routes } from "react-router-dom"
import {Home} from "../Home/Home"
import { Members } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
import { Tienda } from "../Tienda/Tienda"
import { Fans } from "../Fans/Fans"
import { Footer } from "../Footer/Footer"
import { Carga } from "../Hook/Carga"
import { Music } from "../Music/Music"


export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/Fans" element={<Fans />} />
            <Route path="/hook" element={<Carga />} />
            <Route path="/Musica" element={<Music />} />
        </Routes>
        
        <Footer/>
        </>
    )
}
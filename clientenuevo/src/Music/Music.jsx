import '../Music/Music.css'
import { consultarCanciones } from "../services/servicioCanciones"
//HOOK
import { useState, useEffect } from "react"
export function Music() {

    const [canciones, setCanciones] = useState(null)
    const [estacargando, setEstaCargando] = useState(true)
    useEffect(function () {

        consultarCanciones().then(function (respuesta) {
            setCanciones(respuesta.tracks)
            console.log(respuesta)
            setEstaCargando(false)
        })

    }, [])

    if (estacargando) {
        return (
            <>
                <h1>esta cargando...</h1>
            </>
        )
    } else {
        return (
            <>
            <div className="row row cols-1 row-cols-md-3 g-3" >
                {
                    canciones.map(function (cancion) {
                        console.log(cancion)
                        return (

                            <>
                                
                                    <div className="col contenido">
                                        <div className="card h-20 shadow">
                                            <h1>Nombre cancion: {cancion.name}</h1>,
                                            <img src="https://i.scdn.co/image/ab67616d0000b273868ffb12d42a0a8a463a8c6d" alt="" />
                                            <center><audio controls src={cancion.preview_url}></audio></center>
                                            <h5>Popularidad: {cancion.popularity}</h5>
                                            <h5>Duracion: {cancion.duration_ms}</h5>
                                                                                 
                                        </div>
                                    </div>
                                

                            </>


                        )
                    })
                }
                </div>
            </>
        )
    }



}
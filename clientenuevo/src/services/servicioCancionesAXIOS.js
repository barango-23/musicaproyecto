import axios from 'axios'
export async function consultarCancion(){

    const IDARTISTA="6oMuImdp5ZcFhWP0ESe6mG"
    const URI=`https://api.spotify.com/v1/artists/13y7CgLHjMVRMDqxdx0Xdo/top-tracks?market=us`
    const TOKEN="Bearer BQAsU8K1Lq3zTvN1bGCxEop-Pa5dS6P9Zq8ThJAwjj8YP4AaC2RMiQL0fi4Rvuf7T79kw6YjWF2S75pwlhEF831xz4h4mpeJVuj1sC10PbBDR9pkjFo"

    //SE CONSTRUYE LA PETICION
    const PETICION={
        headers:{
            "Authorization":TOKEN
        }
    }

    //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
    try{
        let respuesta= await axios.get(URI,PETICION)
        let canciones=respuesta.data //EL DATA SE USA COMO PALABRA RESERVADA ES DECIR UNICA
        return canciones
    }catch (error){
        throw new Error("upss fallamos"+error)

    }
}

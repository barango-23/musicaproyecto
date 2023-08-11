import axios from 'axios';

let nuevoToken='';
let tokenExpirado = false;

export async function consultarCanciones() {
  const IDARTISTA = "13y7CgLHjMVRMDqxdx0Xdo";
  const URI = `https://api.spotify.com/v1/artists/13y7CgLHjMVRMDqxdx0Xdo/top-tracks?market=us`;
  let TOKEN = `Bearer ${nuevoToken}`;

  try {
    // Realizar la solicitud utilizando Axios
    const respuesta = await axios.get(URI, {
      headers: {
        "Authorization": TOKEN
      }
    });

    // Obtener los datos de la respuesta
    const canciones = respuesta.data;

    return canciones;
  } catch (error) {
    // Verificar si el error es debido a un token expirado
    if (error.response && error.response.status === 401 && !tokenExpirado) {
      // Aquí debes reemplazar 'NUEVO_TOKEN' por el valor del nuevo token que obtuviste
      const nuevoToken = await renovarToken(); // Llama a una función para renovar el token
      
      // Actualizar el valor del token
      TOKEN = `Bearer ${nuevoToken}`;

      // Marcar el token como expirado para evitar ciclos infinitos en caso de errores recurrentes
      tokenExpirado = true;

      // Intentar nuevamente la solicitud
      return consultarCanciones();
    } else {
      // Manejar el error en caso de que no sea debido a un token expirado
      console.error(error);
      throw error;
    }
  }
}

// Función para renovar el token
async function renovarToken() {
  const CLIENT_ID = '5938fd7d0e5f4d889ba4db749d5780ad';
  const CLIENT_SECRET = '63d8eca3cf88416ca881b4f92588b05b';
  const AUTH_URI = 'https://accounts.spotify.com/api/token';

  try {
    // Realizar la solicitud para obtener el nuevo token
    const respuesta = await axios.post(AUTH_URI, {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    });

    // Obtener el nuevo token de la respuesta
    const nuevoToken = respuesta.data.access_token;
    
    return nuevoToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
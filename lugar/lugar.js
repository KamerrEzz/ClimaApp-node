const axios = require('axios');

const getlugarlatlng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    // cuando tienes espacios por ejemplo san jose costa
    //let encodedUrl = encodeURI( argv.direccion );
    // y se pone ${ encodedUrl}
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getlugarlatlng
}

//const axios = require('axios')
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getinfo = async(direccion) => {

    try {

        let coors = await lugar.getlugarlatlng(direccion);
        let temp = await clima.getclima(coors.lat, coors.lng);
    
        return ` El clima de ${coors.direccion} es de ${temp} `
    } catch (e) {
        
        return `El clima de ${direccion} no existe!!.`
    }
}

getinfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e))

// lugar.getlugarlatlng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getclima(23.634501, -102.552784)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));
const axios = require('axios');

const getclima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=700524bf4fab5e1cf2a1ce6ce4ecf6b4`);

    return resp.data.main.temp;
}

module.exports = {
    getclima
}
require('dotenv').config()
const axios = require("axios");

const GIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs";
const SEARCH_KEY = "kanye";

axios.get(`${GIPHY_API_BASE_URL}/search?api_key=${process.env.GIPHY_API_KEY}&q=${SEARCH_KEY}`)
    .then(function (res) {
        const gifs = res.data.data;
        gifs.forEach(gif => {
            console.log(gif.images.downsized.url);
        });
    });
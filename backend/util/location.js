const API_KEY = "AIzaSyAn1m7hAmKy4iOH0ZU4GuQAAR0xrFxediU";
const axios = require("axios");
const HttpError = require("../models/http-error");

async function getCoordsForAddress(address) {
  return  {
      lat: 40.7484474,
      lng: -73.9871516,
    };

//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );

//   const data = response.data;

//   if (!data || data.status === "ZERO_RESULTS") {
//     const error = new HttpError(
//       "Could not find location for the specified address.",
//       422
//     );
//     throw error;
//   }
//   console.log(data);
//   const coordinate = data.results[0].geometry.location;
//   return coordinate;
}

module.exports=getCoordsForAddress;

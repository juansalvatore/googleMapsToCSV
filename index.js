/*
  To run the script:
  node index.js lat,lng file_name types

  eg:
  node index.js -34.7663315,-58.442647 lomas restaurant
*/
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const axios = require('axios')
const fs = require('fs')
var jsonexport = require('jsonexport')
const API_KEY = require('./config/keys').mapsApiKey
// bank, hospital, restaurant
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
  process.argv[2]
}&radius=50000&type=${process.argv[4]}&key=${API_KEY}`

const createCSV = async () => {
  try {
    const res = await axios.get(url)
    const data = []
    const content = res.data.results
    content.forEach(item => {
      const newItem = {
        name: item.name,
        vicinity: item.vicinity,
        lat: item.geometry.location.lat,
        lng: item.geometry.location.lng,
      }
      data.push(newItem)
    })
    jsonexport(data, function(err, csv) {
      if (err) return console.log(err)
      fs.writeFile(
        `./data/${process.argv[4]}s/${process.argv[3]}.csv`,
        csv,
        err => {
          if (err) {
            return console.log(err)
          }
          console.log('Done!')
        }
      )
    })
  } catch (err) {
    console.log(err)
  }
}
createCSV()

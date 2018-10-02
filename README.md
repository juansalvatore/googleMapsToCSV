# Google Maps CSV Creator

## What is it for?

You can use this script to make a request to Google Map's API to get a CSV of nearby places (With the maximum radius allawed of 50 000 meters).

## How to run it?

First you should:
`npm install`

Second you should create a file named keys.js inside ./config, copy and paste the contents inside keys_dev.js and finally replace the string GOOGLE_MAPS_API_KEY with your Google Maps API key.

### Arguments

For the script to run you are required to pass this three arguments:

- First argument: lat,lng
- Second argument: file name for the final .csv file
- Third argument: any search type allowed by the api (eg: bank, hospital, etc.)

Important: If you use a type which doesn't have a folder inside ./data, you should add a new one before running the script. Eg: if you use the type bank, you should create a folder ./data/banks

## License

MIT © **[`Juan Salvatore`](http://juansalvatore.com)**

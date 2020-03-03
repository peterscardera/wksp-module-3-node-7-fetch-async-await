// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    

    try {

        let initialServerData = await request("http://api.open-notify.org/iss-now.json");
        console.log(initialServerData)

        let parsedData = JSON.parse(initialServerData)
        
        let data = {
            lat:parsedData.iss_position.latitude,
            long:parsedData.iss_position.latitude
        }

            console.log(data)



    }catch(err) {
        console.log(err)
    }






}

getIssPosition();
const request = require('request-promise');

const getGeekJoke = async () => {

    try {
        let initialData = await request( {
            uri: "https://geek-jokes.sameerkumar.website/api ",
            headers: {
                "Accept":"application/json" //give me the joke as a json obj
            }
        })

  let parsedData = JSON.parse(initialData)
    return parsedData

    }catch(err) {
        console.log(err)
    }

}


// getGeekJoke()



module.exports = { getGeekJoke}
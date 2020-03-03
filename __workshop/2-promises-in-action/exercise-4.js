const request = require('request-promise');

const getTronaldDump = async () => {


try {
    let initialData = await request( {
        uri:"https://api.tronalddump.io/random/quote",
        headers: {
            "Accept":"application/json" //give me the joke as a json obj
        }
    })
    let parsedData = JSON.parse(initialData)
    console.log(parsedData)
    return parsedData.value

    }catch(err) {
        console.log(err)
    }
}


module.exports = {getTronaldDump}
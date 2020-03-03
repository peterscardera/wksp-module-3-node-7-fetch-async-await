const request = require('request-promise');

const getDadJoke = async () => {

    try {

        let initialData = await request({
            uri: "https://icanhazdadjoke.com/", //going to the website
            headers: {
                "Accept":"application/json" //give me the joke as a json obj
            }
        
        })
        let parsedData = JSON.parse(initialData)
        //console.log(parsedData)
        return parsedData;



    }catch(err) {
        console.log(err)
    }

}
// getDadJoke()

module.exports = {getDadJoke}
const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        const options = {
            uri: 'https://api.tronalddump.io/random/quote',
            headers: {
                'Accept': 'application/json'
            }
        }
        let  quoteObj = await request(options);
        const parsedQuote = JSON.parse(quoteObj)
        return parsedQuote;
    } catch (err) { console.log(err) }
}

// getTronaldDump().then(data => console.log(data));

module.exports = { getTronaldDump };
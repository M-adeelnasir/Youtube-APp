const express = require('express');
const axios = require('axios');
const app = express()
const port = 5000;
const apiKey = 'AIzaSyDVb3hi5_Clwwo0RfC3Ete4pywFXF5sOo8';
const baseApiUrl = "https://www.googleapis.com/youtube/v3";


app.get('/search', async (req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const searchQuery = req.query.search_query;
        const url = `${baseApiUrl}/search?key=${apiKey}&maxResults=3&type=vidoe&part=snippet&q=${searchQuery}`
        console.log(url);
        const response = await axios.get(url)
        console.log(response)

        const channels = response.data.items
        if (channels.length == 0) {
            return res.send('No Channel founed')
        } else {
            res.send(channels)

        }
    } catch (err) {
        next(err)
    }


})
const server = app.listen(port, console.log(`Server is running at Port ${port}`))


//handle unhandle promise rejections
process.on('unhandledRejection', (err, Promise) => {
    console.log(`ERROR : ${err.message}`);
    //close the application and server
    server.close(() => { process.exit(1) })
})

const http = require('http')
const axios = require('axios');
const cheerio = require('cheerio')
const port = 8081

async function diningScrape() {
    let toScrape;

    await axios.get('http://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=03&locationName=Buckley+Dining+Hall&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=1%2f18%2f2022')
        .then(res => {
            console.log("We are scraping")
            toScrape = res.data
        })

        .catch(err => {
            console.log(err)
    })
    // console.log(toScrape)
    const $ = cheerio.load(toScrape)

    console.log($('.shortmenuinstructs').text())


}


const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, () => {
    console.log(`Server is running`);
    diningScrape()
})


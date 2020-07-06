const axios = require("axios");

module.exports = {
    list: (req, res) => {
        console.log('LISTING BOK', process.env.RAPIDAPI_KEY);
        axios({
            "method":"GET",
            "url":"https://google-books.p.rapidapi.com/volumes?filter=full",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"google-books.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPIDAPI_KEY,
            "useQueryString":true
            }
        })
        .then((response)=>{
              console.log(response.data.items);
              res.add('books', response.data.items);
              return res.success();
        })
        .catch((error)=>{
              console.log(error)
        })
    }
}

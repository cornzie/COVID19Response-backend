const axios = require("axios");

module.exports = {
    list: (req, res) => {
        console.log('LISTING BOK');
        axios({
            "method":"GET",
            "url":"https://google-books.p.rapidapi.com/volumes?filter=full",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"google-books.p.rapidapi.com",
            "x-rapidapi-key":"6b0c036e8fmsh0795d1677ec060dp1a3b41jsn7bb204331959",
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

const axios = require("axios")
axios.defaults.baseURL = 'http://localhost';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

module.exports.search = () => {
  return new Promise((resolve, reject) => {
    const baseUrl = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
    const apiKey = "xxxx-xxxx-xxxxx" // ご自身のキーをお使いください/環境変数から取得する
    const uri = `${baseUrl}`
    const encoded = encodeURI(uri);
    axios.get(encoded)
    .then((response) => {
      console.log(response.data)
      resolve(response.data.username)
    }).catch((error) => {
      console.log('ERROR!! occurred in Backend.')
      resolve(`${error}`)
    });
  })
}

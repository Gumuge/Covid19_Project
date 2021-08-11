const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        createProxyMiddleware("/api", {
            target: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=ZaPUTS2Fj0BUcvXIXTJxWWMI18uWdSPdMkk%2BsMIGA1D%2FhtaTwTvZq2CJ5dgSj5OJH7djKxNMKp2Z7Q1rnIDBjg%3D%3D&pageNo=1&numOfRows=10",
            changeOrigin: true
        })
    )
}
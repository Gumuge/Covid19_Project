import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";

interface Item{
  decideCnt:number;
}
interface Data{
  item:Array<Item>
}
//https://xiubindev.tistory.com/115
//https://baegofda.tistory.com/213?category=970192
//https://webdoli.tistory.com/181
//https://youtu.be/BHSJw8PDwj0
//https://redshell.tistory.com/4
function App() {
  const encodingkey = "ZaPUTS2Fj0BUcvXIXTJxWWMI18uWdSPdMkk%2BsMIGA1D%2FhtaTwTvZq2CJ5dgSj5OJH7djKxNMKp2Z7Q1rnIDBjg%3D%3D";
  const decodingkey = "ZaPUTS2Fj0BUcvXIXTJxWWMI18uWdSPdMkk+sMIGA1D/htaTwTvZq2CJ5dgSj5OJH7djKxNMKp2Z7Q1rnIDBjg==";
  const [data, setdata] = useState<Data>();
  //&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315
  useEffect(() => {
  axios.get(`api&startCreateDt=20200310&endCreateDt=20200325`)
  .then(response => {
    console.log(response);
    setdata(response.data.response.body.items);
  })
  // fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=ZaPUTS2Fj0BUcvXIXTJxWWMI18uWdSPdMkk%2BsMIGA1D%2FhtaTwTvZq2CJ5dgSj5OJH7djKxNMKp2Z7Q1rnIDBjg%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315')}`)
  // .then(response => {
  //   if (response.ok) return response.json()
  //   throw new Error('Network response was not ok.')
  // })
  // .then(data => console.log(data.contents));
 
  }, [])
  // axios.defaults.baseURL = 'http://localhost:3001';
  // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  console.log(data);
  return (
    <div className="App">
      확진자 수 : {data?.item[0].decideCnt}
    </div>
  );
}

export default App;

import express from 'express';
import {createConnection} from "typeorm";
import router from './router';
import {AuthMiddleware} from "./middleware/AuthMiddleware";
import {readFile} from "fs";
import {cors} from "cors";
import jwt from 'jsonwebtoken';

let app = express();

// body-parser는 내장되어있음.  json 파싱하기 위해서 설정만 추가
app.use(express.json());

// express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
// 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
app.use(express.urlencoded({
  extended: true
}))

// app.use(cors({exposedHeaders: ['Authorization'],}),);

app.use("/api",express.static(__dirname + '/public'));
// app.use("",express.static(__dirname + '/public'));
// app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
// app.use(express.static(__dirname+"/public"));

// GET만 허용
app.get('/header', (req, res) => {
  res.render("header.ejs");
  // res.render(__dirname + '/views/game.html');
  //res.send("<h1>은재 바보</h1>");
})


app.use('/api', router);



createConnection().then(connection => {
  console.log("DB CONNNECTION!")
  app.listen(8080, () => {
    console.log('server is listening 8080');
  });
});



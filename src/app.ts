import express, { Request, Response, NextFunction } from "express";
import userRouter from "./router/users";
import db from './models/index'
import * as bodyParser from 'body-parser';
db();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

const port:number = 3000

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`${port}에서 인생게임 서버를 열었습니다.`);
});
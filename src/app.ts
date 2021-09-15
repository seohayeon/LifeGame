import express, { Request, Response, NextFunction } from "express";
import userRouter from "./router/users";
import mineRouter from "./router/mine";
import fishingRouter from "./router/fishing";
import orchardRouter from "./router/orchard";

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

const port:number = 3002

app.use("/users", userRouter);
app.use("/fishing", fishingRouter);
app.use("/mine", mineRouter);
app.use("/orchard", orchardRouter);


app.listen(port, () => {
  console.log(`${port}에서 인생게임 서버를 열었습니다.`);
});
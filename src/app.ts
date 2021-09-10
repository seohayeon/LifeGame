import express, { Request, Response, NextFunction } from "express";
import userRouter from "./router/users";
import db from './models/index'
db();
const app = express();
const port:number = 8080
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`${port}에서 인생게임 서버를 열었습니다.`);
});
import express, { Request, Response, NextFunction } from "express";
import User from '../models/users';

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    
  User.find({ username: 'simi' }, (err, user) => {
    res.send(user);
  });
  
});

router.get("/save", (req: Request, res: Response, next: NextFunction) => {
    
    const data = new User({
        hash: 668429,
        username: "",
        email: "hyseo0208@gmail.com",
        password: "tj07*",
        date: new Date()
    })
    
    data.save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
  
});

export default router;

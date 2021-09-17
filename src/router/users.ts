import express, { Request, Response, NextFunction } from "express";
import User from '../models/users';
import GameUser from '../models/game/user';
import Inventory from '../models/game/inventory';

const router = express.Router();

router.post("/sign_up", (req: Request, res: Response, next: NextFunction) => {
    
  let body = req.body
  console.log(body)
  const data = new User({
        hash: body.hash,
        username: body.name,
        email: body.email,
        password: body.password,
        date: new Date()
    })
    
  const data2 = new GameUser({
      name:body.name
  })

  const inventory = new Inventory({
    hash:body.hash
})
  
    
  data.save()
    .then((result) => {
      data2.save()
      inventory.save()
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
  
});

router.post("/getUserInfo", async (req: Request, res: Response, next: NextFunction) => {
    let body = req.body
    
    let userInfo = await GameUser.findOne({name:body.name})
    if(userInfo) res.send(userInfo)
    else res.send("no user")
  
});




export default router;
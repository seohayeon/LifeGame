import express, { Request, Response, NextFunction } from "express";
import Inventory from '../models/game/inventory';

const router = express.Router();

router.post("/save", async (req: Request, res: Response, next: NextFunction) => {
    let body = req.body
    let done = await Inventory.update(
        { hash: body.hash },{ $push: { fishBucket: {name:body.fishName,weight:body.weight,level:body.level} } }
    );
    console.log(done)
})

export default router;
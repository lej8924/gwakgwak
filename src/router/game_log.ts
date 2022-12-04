import {Router} from "express";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { GameController } from "../controller/GameController";

const routes = Router();
//log upload
//routes.post('',AuthMiddleware.verifyToken,GameController.addLog);
routes.get('/:id',AuthMiddleware.verifyToken, GameController.findMyLogs);

export default routes;

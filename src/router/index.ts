import {Router} from "express";
import image from "./image";
import auth from "./auth";
import admin from "./admin";
import {AuthMiddleware} from "../middleware/AuthMiddleware";
import board from "./board";
import comment from "./comment";
import moderator from "./moderator";
import game_log from "./game_log";
import game from "./game";

const routes = Router();

routes.use('/board', board);

routes.use('/image', image);

routes.use('/comment', comment);

routes.use('/auth', auth);

routes.use('/gameLog', game_log);

routes.use('/game', game);

routes.use('/admin',  AuthMiddleware.verifyToken, AuthMiddleware.hasRole, admin);

routes.use('/moderator',  AuthMiddleware.verifyToken, AuthMiddleware.hasRole, moderator);

export default routes;
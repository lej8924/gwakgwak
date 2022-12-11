import {Router} from "express";
import {BoardController} from "../controller/BoardController";
import {AuthMiddleware} from "../middleware/AuthMiddleware";

const routes = Router();
// routes.get('',function(req,res,next){
//     res.render("board.ejs");
// })

// routes.get('', AuthMiddleware.verifyToken, BoardController.addBoard);
routes.get('/create',(req,res,next)=>{res.render("create.ejs")});
routes.post('/create',AuthMiddleware.verifyToken, BoardController.addBoard);

routes.get('', BoardController.findAllBoard );
// routes.post('', AuthMiddleware.verifyToken, BoardController.addBoard);

routes.get('/count', BoardController.countBoard);
// routes.get(/^\/(\d+)$/, BoardController.findOneBoard);
routes.get('/edit/:id' ,(req,res,next)=>{
    console.log(req.params.id);next();},BoardController.findOneBoard);
routes.put('/edit/:id', AuthMiddleware.verifyToken, BoardController.modifyBoard);

routes.get('/delete/:id',(req,res,next)=>{res.render("create.ejs")})
routes.delete('/delete/:id', AuthMiddleware.verifyToken, BoardController.removeBoard);

export default routes;
import {Router} from "express";
import {AuthController} from "../controller/AuthController";

const routes = Router();
routes.get('/signup',function(req,res,next){
    res.render("signup.ejs");
})

routes.get('/signin',function(req,res,next){
    res.render("signin.ejs");
})

routes.post('/signin', AuthController.signIn);

routes.post('/signup', (AuthController.signUp));

export default routes;
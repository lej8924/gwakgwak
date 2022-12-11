import {Router} from "express";
import {AuthController} from "../controller/AuthController";
import { BoardController } from "../controller/BoardController";
import { Board } from "../entity/Board";


import {getConnection} from "typeorm";
import {User} from "../entity/User";
import {hashSync, compareSync} from 'bcryptjs';
import {Role} from "../entity/Role";

const routes = Router();
routes.get('/signup',function(req,res,next){
    res.render("signup.ejs")
        
})

routes.get('/signin',function(req,res,next){
    res.render("signin.ejs");
})


// routes.post('/signin', async(req,res)=>{
//     const {email, password} = req.body;

//     const user = await getConnection().getRepository(User)
//       .findOne({relations: ["roles"], where: {email}});

//     if (!user) {
//       return res.status(400).send({ message: "User Not found." });
//     }

//     if (!compareSync(password, user.password)) {
//       return res.status(400).send({ message: "Invalid password" });
//     }

//     const token = jwt.sign({ jti: user.id, email: user.email, roles: user.roles.map(role => role.name) },
//       process.env.secret, {
//       subject: user.username,
//       algorithm: 'HS512',
//       expiresIn: process.env.expirationSecondMs
//     });
//     res.render("board.ejs",{token : token});
//     });

routes.post('/signin', AuthController.signIn);
routes.post('/signup', AuthController.signUp);

export default routes;
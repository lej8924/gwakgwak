import {Board} from "../entity/Board";
import {getConnection} from "typeorm";
import {User} from "../entity/User";
import {hashSync, compareSync} from 'bcryptjs';
import {Role} from "../entity/Role";
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import axios from "axios";

export class AuthController {
  static signIn = async (req, res, next) => {
    const {email, password} = req.body;

    const user = await getConnection().getRepository(User)
      .findOne({relations: ["roles"], where: {email}});

    if (!user) {
      return res.status(400).send({ message: "User Not found." });
    }

    if (!compareSync(password, user.password)) {
      return res.status(400).send({ message: "Invalid password" });
    }
  

    // // token 생성
    const token = jwt.sign({ jti: user.id, email: user.email, roles: user.roles.map(role => role.name) },
      process.env.secret, {
      subject: user.username,
      algorithm: 'HS512',
      expiresIn: process.env.expirationSecondMs
    });

    res.cookie('token',token, {httpOnly:true});
    res.redirect('http://localhost:8080/api/board/list');
  
    // res.send({token});

    // const headers = {'Authorization': ('Bearer '+ token)};

    // axios.post('http://localhost:8080/api/board',{headers}).then(res=>(console.log(headers)));
    

    // res.redirect('http://localhost:8080/api/board');
    // res.send({jwt: token});
    // res.redirect(307, `http://localhost:8080/?key=value#token=${token}`)

    // res.setHeader('Authorization', ("Bearer " + token ));
    // res.redirect('http://localhost:8080/api/board');
  }

  static signUp = async (req, res, next) => {
    const {email, password, username, roles, nickname} = req.body;

    const user = new User();
    user.email = email;
    user.password = hashSync(password, 8);
    user.username = username;
    user.nickname = nickname;

    // 이메일 중복 체크
    const existUser = await getConnection().getRepository(User)
      .findOne({where: {email}});

    if (existUser) {
      return res.status(400).send({ message: "User Not found." });
    }

    // roles 설정
    user.roles = [];

    if (roles && roles.length > 0) {
      // where a 혹은 b or 조건 [{ name: 'a'}, {name: 'b'}]
      const res = await getConnection().getRepository(Role).find({
        where: roles.map(name => ({name}))
      })
      user.roles = res;
    } else {
      // 기본 role은 USER
      const res = await getConnection().getRepository(Role).find({
        where: {name: 'ROLE_USER'}
      })
      user.roles = res;
    }

    const result = await getConnection().getRepository(User).save(user).then(result=> res.redirect("/api/auth/signup"));

    res.redirect('http://localhost:8080/api/board/list');
    
  }
}
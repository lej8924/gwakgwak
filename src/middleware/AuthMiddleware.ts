import {verify} from 'jsonwebtoken';
import {decodeToken} from "./decodeToken";

export class AuthMiddleware {
  static verifyToken = async(req, res, next) => {
    console.log("first==>"+req.cookies.authorization);
    // const cookie = parseCookie(req.headers.cookie);
    
    if (!req.cookies.authorization || !req.cookies.authorization.startsWith("Bearer ")) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }

    const token = req.cookies.authorization.substring(7);
    console.log("this is my toked: " + token);

    verify(token, process.env.secret, (err, decoded) => {
      console.log(err);
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      else{console.log(decoded);}

      
      req.body.userId = decoded.jti;
      req.body.roles = decoded.roles;
      console.log(req.body.userId);
      next();
    });
  }
  

  static hasRole = async (req, res, next) => {
    console.log(req.userId, req.roles);

    if (req.baseUrl.startsWith('/api/admin')) {
      if (req.roles.indexOf('ROLE_ADMIN') < 0) {
        return res.status(401).send({
          message: "Admin Role is needed!"
        });
      }
    } else if (req.url.startsWith('/api/moderator')) {
      if (req.roles.indexOf('ROLE_MODERATOR') < 0) {
        return res.status(401).send({
          message: "Moderator Role is needed!"
        });
      }
    }

    next();
  }
}
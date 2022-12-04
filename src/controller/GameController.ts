import {User} from "../entity/User";
import {Game_log} from "../entity/Game_log"
import {getConnection} from "typeorm";


export class GameController{
    static addLog = async(req, res)=>{
        const {score, user_id} = req.body;

        const user = await getConnection().getRepository(User).findOne({id:user_id});

        const game_log = new Game_log();
        game_log.user = user;
        game_log.score = score;
        const result = await getConnection().getRepository(Game_log).save(game_log);

        res.send(result);
    }

    static findMyLogs = async (req,res)=>{
        const id = req.params;
        console.log({id});

        const game_log = await getConnection().getRepository(Game_log).find({relations: ['user'], where: {id}});

        // const game_log = await getConnection().getRepository(Game_log).find({
        //     relations :['user'],
        //     where: {
        //         user_id: id
        //     },
        // });

        res.send(game_log);
    }

    // static findBestlog = async(req,res)=>{
    //     const {id} = req.params;

    //     //group by querybuilder
    //     const best_score = await getConnection()
    //     .createQueryBuilder()
    //     .select("game_log.score")
    //     .where("id= :id",{id})
    //     .orderBy("game_log.score","DESC")
    //     .getRawOne()

    //     res.send(best_score);
    // }

}
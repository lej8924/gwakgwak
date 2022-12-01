import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
  } from "typeorm";
  
  import {User} from "./User";

@Entity()
export class Game_log{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created:Date;

    @Column({type:"int"})
    score:number;
    
    @ManyToOne(type=>User, user=>user.game_logs)
    user: User;
}
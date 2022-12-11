import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable
} from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";
import {Comment} from './Comment';
import {User} from "./User";

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  title: string;

  @Column("text")
  content: string;

  @CreateDateColumn()
  created: Date;


  @UpdateDateColumn()
  updated: Date;

 
  @OneToMany(type => Comment, comment => comment.board)
  comments: Comment[];
  

  @ManyToOne(type => User, user => user.boards)
  @JoinTable({
    name: "user",
    joinColumn: {name: "user_id", referencedColumnName: "user_id"},
    inverseJoinColumn: {name: "id", referencedColumnName: "id"}
  })
  user:User;

}
import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./User";
import Tag from "./Tag";

@Entity('UserTag')
export default class UserTag 
{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @ManyToOne(type => User, user => user.ID)
    user_ID: User;
    
    @ManyToOne(type => Tag, tag => tag.ID)
    tag_ID: Tag;
}
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType() // return data DB => app
@Entity() //create table
export class Post extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field((_type) => String)
  @Column({ unique: true })
  title!: string;

  @Field((_type) => String)
  @Column({ unique: true })
  text!: string;

  @Field()
  @CreateDateColumn()
  createAt: Date;

  @Field()
  @UpdateDateColumn()
  updateAt: Date;
}

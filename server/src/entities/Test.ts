import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Test extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  test!: string;

  @Column()
  text!: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

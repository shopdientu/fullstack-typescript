import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    createAt: Date;
    updateAt: Date;
}

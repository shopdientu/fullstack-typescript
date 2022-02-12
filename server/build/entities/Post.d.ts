import { BaseEntity } from "typeorm";
export declare class Post extends BaseEntity {
    id: number;
    title: string;
    text: string;
    createAt: Date;
    updateAt: Date;
}

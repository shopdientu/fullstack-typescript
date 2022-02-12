import { BaseEntity } from "typeorm";
export declare class Test extends BaseEntity {
    id: number;
    test: string;
    text: string;
    createAt: Date;
    updateAt: Date;
}

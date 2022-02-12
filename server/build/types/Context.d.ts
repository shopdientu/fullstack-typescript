import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
export declare type Context = {
    req: Request & {
        session: Session & Partial<SessionData> & {
            userId?: number;
        };
    };
    res: Response;
};

/// <reference types="qs" />
/// <reference types="express" />
import { FieldStoreMongo } from "../mongoDB/fieldStoreMongo";
export declare const createSessionMongo: ({ name, mongoUrl, maxAge, _prop_, secret, }: FieldStoreMongo) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;

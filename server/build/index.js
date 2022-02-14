"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv").config();
require("reflect-metadata");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const connect_1 = require("./mongoDB/connect");
const connect_2 = require("./apollo/connect");
const connect_3 = require("./postgresDB/connect");
const mongoSession_1 = require("./session/mongoSession");
const constants_1 = require("./constants");
// import cors from "cors";
const cors = require("cors");
const main = async () => {
    await (0, connect_1.connectMongo)(process.env.MONGO_URI || "");
    const app = (0, express_1.default)();
    const port = process.env.PORT || 5000;
    app.use(cors({
        origin: "*",
        credentials: true,
    }));
    // Connect PostgresDB
    await (0, connect_3.connectPostgresDB)(process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASS, process.env.POSTGRES_DB_NAME);
    // Connect mongoDB
    // Create Session and Cookie in client  --  save in MongoDb
    app.use((0, mongoSession_1.createSessionMongo)({
        maxAge: 60 * 60 * 1000 * 24 * 30,
        name: constants_1.COOKIE_NAME,
        _prop_: constants_1.__prop__,
        mongoUrl: process.env.MONGO_URI,
        secret: process.env.SESSION_SECRET,
    }));
    //Start server Apollo
    await (0, connect_2.connectApolloServer)(app);
    //Start server
    app.listen(port, async () => {
        console.log(`Server started on port  ${port}`);
    });
};
main().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectPostgresDB = void 0;
const Test_1 = require("../entities/Test");
const typeorm_1 = require("typeorm");
const Post_1 = require("../entities/Post");
const User_1 = require("../entities/User");
const connectPostgresDB = async (username, password, database) => {
    await (0, typeorm_1.createConnection)({
        type: "postgres",
        database,
        username,
        password,
        logging: true,
        synchronize: true,
        entities: [User_1.User, Post_1.Post, Test_1.Test],
    });
    console.log("connected postgresDB");
};
exports.connectPostgresDB = connectPostgresDB;
//# sourceMappingURL=connect.js.map
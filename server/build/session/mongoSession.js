"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionMongo = void 0;
const tslib_1 = require("tslib");
const connect_mongo_1 = (0, tslib_1.__importDefault)(require("connect-mongo"));
const express_session_1 = (0, tslib_1.__importDefault)(require("express-session"));
const createSessionMongo = ({ name, mongoUrl, maxAge, _prop_, secret, }) => {
    console.log("create session mongo");
    return (0, express_session_1.default)({
        name,
        store: connect_mongo_1.default.create({ mongoUrl }),
        cookie: {
            maxAge,
            httpOnly: true,
            secure: _prop_,
            sameSite: "lax", // protection against CSRF
        },
        secret,
        saveUninitialized: false,
        resave: false,
    });
};
exports.createSessionMongo = createSessionMongo;
//# sourceMappingURL=mongoSession.js.map
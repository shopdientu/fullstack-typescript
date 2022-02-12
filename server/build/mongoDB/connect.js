"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const connectMongo = async (uri) => {
    await mongoose_1.default.connect(uri, {});
    console.log("connected mongoDB");
};
exports.connectMongo = connectMongo;
//# sourceMappingURL=connect.js.map
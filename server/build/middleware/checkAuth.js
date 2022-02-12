"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const checkAuth = ({ context: { req } }, next) => {
    if (!req.session.userId) {
        throw new apollo_server_core_1.AuthenticationError("Not authentication to perform Graphql operation 1111");
    }
    return next();
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map
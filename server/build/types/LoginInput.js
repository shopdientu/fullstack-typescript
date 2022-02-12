"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let LoginInput = class LoginInput {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginInput.prototype, "usernameOrEmail", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = (0, tslib_1.__decorate)([
    (0, type_graphql_1.InputType)()
], LoginInput);
exports.LoginInput = LoginInput;
//# sourceMappingURL=LoginInput.js.map
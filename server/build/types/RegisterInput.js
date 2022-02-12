"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let RegisterInput = class RegisterInput {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], RegisterInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], RegisterInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], RegisterInput.prototype, "password", void 0);
RegisterInput = (0, tslib_1.__decorate)([
    (0, type_graphql_1.InputType)()
], RegisterInput);
exports.RegisterInput = RegisterInput;
//# sourceMappingURL=RegisterInput.js.map
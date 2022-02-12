"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutationResponse = void 0;
const tslib_1 = require("tslib");
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const MutationResponse_1 = require("./MutationResponse");
const FieldError_1 = require("./FieldError");
let UserMutationResponse = class UserMutationResponse {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", User_1.User)
], UserMutationResponse.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => [FieldError_1.FieldError], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserMutationResponse.prototype, "errors", void 0);
UserMutationResponse = (0, tslib_1.__decorate)([
    (0, type_graphql_1.ObjectType)({ implements: MutationResponse_1.IMutationResponse })
], UserMutationResponse);
exports.UserMutationResponse = UserMutationResponse;
//# sourceMappingURL=UserMutationResponse.js.map
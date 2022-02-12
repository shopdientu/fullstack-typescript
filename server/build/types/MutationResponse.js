"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMutationResponse = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let IMutationResponse = class IMutationResponse {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", Number)
], IMutationResponse.prototype, "code", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], IMutationResponse.prototype, "success", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], IMutationResponse.prototype, "message", void 0);
IMutationResponse = (0, tslib_1.__decorate)([
    (0, type_graphql_1.InterfaceType)()
], IMutationResponse);
exports.IMutationResponse = IMutationResponse;
//# sourceMappingURL=MutationResponse.js.map
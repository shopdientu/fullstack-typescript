"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldError = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let FieldError = class FieldError {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], FieldError.prototype, "field", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = (0, tslib_1.__decorate)([
    (0, type_graphql_1.ObjectType)()
], FieldError);
exports.FieldError = FieldError;
//# sourceMappingURL=FieldError.js.map
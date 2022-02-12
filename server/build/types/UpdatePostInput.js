"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let UpdatePostInput = class UpdatePostInput {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.ID),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdatePostInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, tslib_1.__metadata)("design:type", String)
], UpdatePostInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, tslib_1.__metadata)("design:type", String)
], UpdatePostInput.prototype, "title", void 0);
UpdatePostInput = (0, tslib_1.__decorate)([
    (0, type_graphql_1.InputType)()
], UpdatePostInput);
exports.UpdatePostInput = UpdatePostInput;
//# sourceMappingURL=UpdatePostInput.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let CreatePostInput = class CreatePostInput {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePostInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePostInput.prototype, "text", void 0);
CreatePostInput = (0, tslib_1.__decorate)([
    (0, type_graphql_1.InputType)()
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;
//# sourceMappingURL=CreatePostInput.js.map
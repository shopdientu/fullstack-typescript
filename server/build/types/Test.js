"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let Test = class Test {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, tslib_1.__metadata)("design:type", String)
], Test.prototype, "test", void 0);
Test = (0, tslib_1.__decorate)([
    (0, type_graphql_1.InputType)()
], Test);
exports.Test = Test;
//# sourceMappingURL=Test.js.map
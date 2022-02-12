"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Test = class Test extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Test.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Test.prototype, "test", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Test.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.CreateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Test.prototype, "createAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Test.prototype, "updateAt", void 0);
Test = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Test);
exports.Test = Test;
//# sourceMappingURL=Test.js.map
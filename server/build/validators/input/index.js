"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidator = exports.minValidator = exports.maxValidator = exports.emailValidator = void 0;
const emailValidator = (email) => {
    //check email
    const check = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return check ? true : false;
};
exports.emailValidator = emailValidator;
const maxValidator = (value, n) => {
    return value.length <= n;
};
exports.maxValidator = maxValidator;
const minValidator = (value, n) => {
    return value.length >= n;
};
exports.minValidator = minValidator;
const inputValidator = (value) => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return value.match(format) ? false : true;
};
exports.inputValidator = inputValidator;
//# sourceMappingURL=index.js.map
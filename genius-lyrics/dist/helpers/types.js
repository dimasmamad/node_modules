"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinTypes = exports.isArray = exports.isObject = exports.isNumberOrNaN = exports.isBoolean = exports.isNumber = exports.isString = exports.isUndefined = exports.isNull = void 0;
const isNull = (data) => data === null;
exports.isNull = isNull;
const isUndefined = (data) => data === undefined;
exports.isUndefined = isUndefined;
const isString = (data) => typeof data === "string";
exports.isString = isString;
const isNumber = (data) => typeof data === "number" && !isNaN(data);
exports.isNumber = isNumber;
const isBoolean = (data) => typeof data === "boolean";
exports.isBoolean = isBoolean;
const isNumberOrNaN = (data) => typeof data === "number";
exports.isNumberOrNaN = isNumberOrNaN;
const isObject = (data) => !(0, exports.isNull)(data) && typeof data === "object";
exports.isObject = isObject;
const isArray = (data) => Array.isArray(data);
exports.isArray = isArray;
const joinTypes = (...types) => types.map((x) => `'${x}'`).join(" | ");
exports.joinTypes = joinTypes;
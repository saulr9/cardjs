"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardTypesValidations = exports.ECARD_TYPES = void 0;
var ECARD_TYPES;
(function (ECARD_TYPES) {
    ECARD_TYPES["VISA"] = "VISA";
    ECARD_TYPES["MASTERCARD"] = "MASTERCARD";
    ECARD_TYPES["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
    ECARD_TYPES["DISCOVER"] = "DISCOVER";
    ECARD_TYPES["JCB"] = "JCB";
    ECARD_TYPES["MAESTRO"] = "MAESTRO";
    ECARD_TYPES["UNSUPPORTED"] = "UNSUPPORTED";
})(ECARD_TYPES = exports.ECARD_TYPES || (exports.ECARD_TYPES = {}));
exports.cardTypesValidations = (_a = {},
    _a[ECARD_TYPES.VISA] = /^4[0-9]{12}(?:[0-9]{3})?$/,
    _a[ECARD_TYPES.MASTERCARD] = /^5[1-5][0-9]{14}$/,
    _a[ECARD_TYPES.AMERICAN_EXPRESS] = /^3[47][0-9]{13}$/,
    _a[ECARD_TYPES.DISCOVER] = /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    _a[ECARD_TYPES.JCB] = /^(?:2131|1800|35\d{3})\d{11}$/,
    _a[ECARD_TYPES.MAESTRO] = /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/,
    _a);
//# sourceMappingURL=card-types.enum.js.map
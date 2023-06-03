"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHiddenCardNumber = exports.getCardType = void 0;
var card_types_enum_1 = require("./enums/card-types.enum");
/**
 *
 * @param cardNumber: string | number
 * @returns string | null
 * @description
 * This function takes a card number as a number or string and returns
 * a string with the card type or UNSUPPORTED if the card type is not supported.
 */
var getCardType = function (cardNumber) {
    var cardNumberString = typeof cardNumber === "number" ? cardNumber.toString() : cardNumber;
    if (cardNumberString.length < 12) {
        return null;
    }
    var cardType = Object.keys(card_types_enum_1.cardTypesValidations).find(function (cardType) {
        return card_types_enum_1.cardTypesValidations[cardType].test(cardNumberString);
    }) || card_types_enum_1.ECARD_TYPES.UNSUPPORTED;
    return cardType;
};
exports.getCardType = getCardType;
/**
 *
 * @param cardNumber: number | string
 * @returns string | null
 * @description
 * This function takes a card number as a number or string and returns
 * a string with the first 4 and last 4 digits visible and the rest of the digits hidden.
 */
var getHiddenCardNumber = function (cardNumber) {
    var cardNumberString = typeof cardNumber === "number" ? cardNumber.toString() : cardNumber;
    if (cardNumberString.length < 12) {
        return null;
    }
    var cardType = (0, exports.getCardType)(cardNumberString);
    if (cardType === card_types_enum_1.ECARD_TYPES.UNSUPPORTED) {
        return null;
    }
    var cardNumberLength = cardNumberString.length;
    var hiddenCardNumber = "".concat(cardNumberString.slice(0, 4)).concat("*".repeat(cardNumberLength - 8)).concat(cardNumberString.slice(cardNumberLength - 4));
    return hiddenCardNumber;
};
exports.getHiddenCardNumber = getHiddenCardNumber;
//# sourceMappingURL=card.js.map
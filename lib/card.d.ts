import { ECARD_TYPES } from "./enums/card-types.enum";
/**
 *
 * @param cardNumber: string | number
 * @returns string | null
 * @description
 * This function takes a card number as a number or string and returns
 * a string with the card type or UNSUPPORTED if the card type is not supported.
 */
export declare const getCardType: (cardNumber: string | number) => ECARD_TYPES;
/**
 *
 * @param cardNumber: number | string
 * @returns string | null
 * @description
 * This function takes a card number as a number or string and returns
 * a string with the first 4 and last 4 digits visible and the rest of the digits hidden.
 */
export declare const getHiddenCardNumber: (cardNumber: number | string) => string;

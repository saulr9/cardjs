import { ECARD_TYPES, cardTypesValidations } from "./enums/card-types.enum";
/**
 *
 * @param cardNumber: string | number
 * @returns string | null
 * @description
 * This function takes a card number as a number or string and returns
 * a string with the card type or UNSUPPORTED if the card type is not supported.
 */
export const getCardType = (cardNumber: string | number) => {
  const cardNumberString =
    typeof cardNumber === "number" ? cardNumber.toString() : cardNumber;

  if (cardNumberString.length < 12) {
    return null;
  }

  const cardType =
    Object.keys(cardTypesValidations).find((cardType) => {
      return cardTypesValidations[cardType as ECARD_TYPES].test(
        cardNumberString
      );
    }) || ECARD_TYPES.UNSUPPORTED;

  return cardType as ECARD_TYPES;
};
/**
 *
 * @param cardNumber: number | string
 * @returns string | null
 * @description
 * This function takes a card number as a number or string and returns
 * a string with the first 4 and last 4 digits visible and the rest of the digits hidden.
 */
export const getHiddenCardNumber = (cardNumber: number | string) => {
  const cardNumberString =
    typeof cardNumber === "number" ? cardNumber.toString() : cardNumber;

  if (cardNumberString.length < 12) {
    return null;
  }

  const cardType = getCardType(cardNumberString);

  if (cardType === ECARD_TYPES.UNSUPPORTED) {
    return null;
  }

  const cardNumberLength = cardNumberString.length;

  const hiddenCardNumber = `${cardNumberString.slice(0, 4)}${"*".repeat(
    cardNumberLength - 8
  )}${cardNumberString.slice(cardNumberLength - 4)}`;

  return hiddenCardNumber;
};

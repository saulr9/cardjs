import { getCardType, getHiddenCardNumber } from "../src/card";
import { ECARD_TYPES } from "../src/enums/card-types.enum";

describe("Card", () => {
  it("Should return MASTERCARD", async () => {
    const cardNumber = "5555555555554444";
    const cardType = getCardType(cardNumber);
    expect(cardType).toBe(ECARD_TYPES.MASTERCARD);
  });

  it("Should return UNSUPPORTED", async () => {
    const cardNumber = "0000000000000";
    const cardType = getCardType(cardNumber);
    expect(cardType).toBe(ECARD_TYPES.UNSUPPORTED);
  });

  it("Should return the first 4 and last 4 digits visible and the rest of the digits hidden", async () => {
    const cardNumber = "5555555555554444";
    const hiddenCardNumber = getHiddenCardNumber(cardNumber);
    expect(hiddenCardNumber).toBe("5555********4444");
  });
});

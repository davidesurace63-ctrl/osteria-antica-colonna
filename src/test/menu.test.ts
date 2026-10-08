import { describe, expect, it } from "vitest";
import { menu } from "@/data/menu";

describe("Prices from the supplied menu", () => {
  const expected: [string, number[]][] = [
    ["Antipasti", [14, 15, 12, 12]],
    ["Primi piatti", [13, 13, 11, 15]],
    ["Secondi piatti", [24, 5, 17, 20, 20, 22]],
    ["Contorni", [5, 7, 6, 6, 7]],
    ["Vini rossi", [26, 24, 22, 22, 26, 26]],
    ["Bianchi fermi", [26, 22, 21, 22, 22]],
    ["Bollicine", [20, 80]],
    ["Vino della casa", [4, 4, 3]],
  ];
  for (const [category, prices] of expected) {
    prices.forEach((price, index) => {
      it(`${category}, item ${index + 1} costs €${price}`, () => {
        expect(menu[category]?.[index]?.price).toBe(price);
      });
    });
  }
  it("the large mixed cold cuts plate costs €16", () => {
    expect(menu.Antipasti?.[0]?.largePrice).toBe(16);
  });
  it("the €5 steak price is per hectogram", () => {
    expect(menu["Secondi piatti"]?.[1]?.unit).toBe("hg");
  });
});
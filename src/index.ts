import { FontType } from "./FontType.js";
import { Fonts } from "./FontData.js";

export function convert(
  text: string,
  inputFont: FontType,
  outputFont: FontType
): string {
  const input = Fonts[inputFont];
  const output = Fonts[outputFont];

  const textArray = text.split("");
  const outputArray = textArray.map((c) => {
    const idx = input.charMap[c];
    return idx !== undefined ? output.chars[idx] : c;
  });
  let outputShifted = outputArray;
  if (input.invertedPunctuatuion && !output.invertedPunctuatuion) {
    const puncChars = [
      output.chars[output.chars.length - 2],
      output.chars[output.chars.length - 4],
    ];
    outputShifted = shiftPunc(outputArray, puncChars, "left");
  } else if (!input.invertedPunctuatuion && output.invertedPunctuatuion) {
    const puncChars = [
      output.chars[output.chars.length - 2],
      output.chars[output.chars.length - 4],
    ];
    outputShifted = shiftPunc(outputArray, puncChars, "right");
  }
  return outputShifted.join("");
}

function shiftPunc(
  text: string[],
  puncChars: string[],
  direction: "left" | "right"
) {
  if (direction === "left") {
    const length = text.length;
    for (let i = 1; i < length; i++) {
      if (puncChars.includes(text[i])) {
        [text[i - 1], text[i]] = [text[i], text[i - 1]];
      }
    }
  } else if (direction === "right") {
    for (let i = length - 2; i >= 0; i--) {
      if (puncChars.includes(text[i])) {
        [text[i], text[i + 1]] = [text[i + 1], text[i]];
      }
    }
  }
  return text;
}

export { FontType } from "./FontType.js";
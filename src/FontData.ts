import { FontType } from "./FontType.js";

export interface Font {
  chars: string[];
  charMap: Record<string, number>;
  invertedPunctuatuion: boolean;
}

export const Fonts: Record<FontType, Font> = {
  [FontType.CS_NEW_ATHANASIUS]: {
    chars:
      "abgde6zy;iklmnxoprctuv,'wsfqhj[]ABGDE6ZY:IKLMNXOPRCTUV<\"WSFQHJ{}`.=@".split(
        ""
      ),
    charMap: {},
    invertedPunctuatuion: false,
  },
  [FontType.AVVA_SHENOUDA]: {
    chars:
      "abjde6z30iklmn7oprctvfxyw24qhgs5ABJDE^Z#)IKLMN&OPRCTVFXYW@$QHGS%`.=:".split(
        ""
      ),
    charMap: {},
    invertedPunctuatuion: false,
  },
  [FontType.ABRAAM]: {
    chars:
      "abgde,zhqiklmn[oprctuvxyw]f'\\js;ABGDE<ZHQIKLMN{OPRCTUVXYW}F\"|JS:`.?>".split(
        ""
      ),
    charMap: {},
    invertedPunctuatuion: false,
  },
  [FontType.UNICODE]: {
    chars:
      "ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱϣϥϧϩϫϭϯⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰϢϤϦϨϪϬϮ̀.̅:".split(
        ""
      ),
    charMap: {},
    invertedPunctuatuion: true,
  },
};
for (const font of Object.values(Fonts)) {
  font.chars.forEach((char, idx) => {
    font.charMap[char] = idx;
  });
}

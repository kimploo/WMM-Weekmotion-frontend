// large button css
export const btnYellow =
  'btn w-full h-14 rounded-full bg-emotion-yellow border-emotion-yellow font-sans text-mono-100 text-base font-bold';
export const btnYellowBorder =
  'btn w-full h-14 border-2 rounded-full bg-mono-100 border-emotion-yellow font-sans text-emotion-yellow text-base font-bold';
export const btnGray =
  'btn w-full h-14 rounded-full bg-mono-300 border-mono-300 font-sans text-mono-100 text-base font-bold';
export const btnGrayBorder =
  'btn w-full h-14 border-2 rounded-full bg-mono-100 border-mono-300 font-sans text-mono-300 text-base font-bold';
// small button css
export const smBtnYellow =
  'flex justify-center items-center grow h-10 rounded-full bg-emotion-yellow border-emotion-yellow font-sans text-mono-100 text-sm font-bold';
export const smBtnYellowBorder =
  'flex justify-center items-center grow h-10 border-2 rounded-full bg-mono-100 border-emotion-yellow font-sans text-emotion-yellow text-sm font-bold';
export const smBtnGray =
  'btn min-w-[103px] h-10 rounded-full bg-mono-300 border-mono-300 font-sans text-mono-100 text-sm font-bold';
export const smBtnGrayBorder =
  'btn min-w-[103px] h-10 border-2 rounded-full bg-mono-100 border-mono-300 font-sans text-mono-300 text-sm font-bold';
// chips css
export const chipsPink =
  'badge h-7 bg-emotion-lightPink border-emotion-lightPink text-mono-700 cursor-pointer p-3';
export const chipsPinkBorder =
  'badge badge-outline h-7 bg-mono-100 border-emotion-lightPink text-mono-700 cursor-pointer p-3';
export const chipsBlue =
  'badge h-7 bg-emotion-lightBlue border-emotion-lightBlue text-mono-700 cursor-pointer p-3';
export const chipsBlueBorder =
  'badge badge-outline h-7 bg-mono-100 border-emotion-lightBlue text-mono-700 cursor-pointer p-3';
export const chipsYellow =
  'badge h-7 bg-emotion-lightYellow border-emotion-lightYellow text-mono-700 cursor-pointer p-3';
export const chipsYellowBorder =
  'badge badge-outline h-7 bg-mono-100 border-emotion-lightYellow text-mono-700 cursor-pointer p-3';
// tab css
export const tabActive =
  'text-lg w-1/2 h-full text-emotion-yellow border-b-4 border-emotion-yellow';
export const tab = 'text-lg w-1/2 h-full text-mono-400';
// color picker function
export const chipsColorPicker = (tagSeq: string) => {
  if (tagSeq === '1') {
    return 'badge h-7 bg-emotion-lightPink border-emotion-lightPink text-mono-700 cursor-pointer p-3';
  } else if (tagSeq === '2') {
    return 'badge h-7 bg-emotion-lightBlue border-emotion-lightBlue text-mono-700 cursor-pointer p-3';
  } else {
    return 'badge h-7 bg-emotion-lightYellow border-emotion-lightYellow text-mono-700 cursor-pointer p-3';
  }
};

export const baseCard = `
  border
  shadow-md
  absolute inset-0
  flex items-center justify-center
  rounded-xl
  p-8
  text-center
  text-xl
  font-semibold
  [backface-visibility:hidden]
`;
export const front = `
  ${baseCard}
  bg-white
  text-gray-900
`;
export const back = `
  ${baseCard}
  bg-red-600
  border-red-700
  text-white
  [transform:rotateY(180deg)]
`;

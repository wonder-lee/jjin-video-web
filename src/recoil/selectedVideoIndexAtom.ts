import { atom } from "recoil";

const selectedVideoIndexAtom = atom({
  key: "selectedVideoIndex",
  default: 0,
});

export { selectedVideoIndexAtom };

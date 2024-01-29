import { atom } from "recoil";

const isSearchAtom = atom({
  key: "isSearchAtom",
  default: false,
});

export { isSearchAtom };

import { atom } from "recoil";

const videoListAtom = atom({
  key: "videoListAtom",
  default: {
    list: [],
  },
});

export { videoListAtom };

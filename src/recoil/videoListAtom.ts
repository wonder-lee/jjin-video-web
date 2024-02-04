import { atom } from "recoil";

interface Video {
  channelName: string;
  title: string;
  publishedTime: string;
  viewCount: number;
  browseId: string;
  videoId: string;
  subscribers: number;
  id: number;
  point: number;
  thumbnails: any;
  channelThumbnail: any;
}

const videoListAtom = atom<Video[]>({
  key: "videoListAtom",
  default: [],
});

export { videoListAtom };

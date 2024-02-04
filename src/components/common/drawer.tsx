"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { videoListAtom } from "@/recoil/videoListAtom";
import { selectedVideoIndexAtom } from "@/recoil/selectedVideoIndexAtom";
import VideoDetail from "../home/videoDetail";

interface Props {
  children: ReactNode;
}

const Drawer = ({ children }: Props) => {
  const videoList = useRecoilValue(videoListAtom);
  const selectedVideoIndex = useRecoilValue(selectedVideoIndexAtom);
  const vidoePause = () => {
    const player = document.getElementById(
      videoList[selectedVideoIndex].videoId
    ) as HTMLIFrameElement;
    player?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: [],
      }),
      "*"
    );
  };

  return (
    <div className="drawer pt-[80px]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={vidoePause}
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <VideoDetail data={videoList[selectedVideoIndex]} />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

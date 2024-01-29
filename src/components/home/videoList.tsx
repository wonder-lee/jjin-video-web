"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { videoListAtom } from "@/recoil/videoListAtom";
import { isSearchAtom } from "@/recoil/isSearchAtom";
import PostCard from "./postCard";

const VideoList = () => {
  const router = useRouter();
  const videoList = useRecoilValue(videoListAtom);
  const isSearch = useRecoilValue(isSearchAtom);

  useEffect(() => {
    if (!isSearch) {
      router.push("/");
    }
  }, [isSearch]);
  return (
    <div>
      {videoList.list.length > 0 ? (
        videoList.list.map((data) => <PostCard data={data} />)
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
    </div>
  );
};

export default VideoList;

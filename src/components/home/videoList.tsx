"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { videoListAtom } from "@/recoil/videoListAtom";
import { isSearchAtom } from "@/recoil/isSearchAtom";
import PostCard from "./postCard";
import PostSkeleton from "../common/postSkeleton";

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
      {videoList.list.length > 0
        ? videoList.list.map((data: any, index: number) => (
            <PostCard data={data} key={data.title} index={index} />
          ))
        : new Array(3).fill("").map((_, index) => <PostSkeleton key={index} />)}
    </div>
  );
};

export default VideoList;

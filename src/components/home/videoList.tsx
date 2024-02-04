"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { videoListAtom } from "@/recoil/videoListAtom";
import { isSearchAtom } from "@/recoil/isSearchAtom";
import { selectedVideoIndexAtom } from "@/recoil/selectedVideoIndexAtom";
import PostCard from "@/components/home/postCard";
import PostSkeleton from "@/components/common/postSkeleton";

const VideoList = () => {
  const router = useRouter();
  const videoList = useRecoilValue(videoListAtom);
  const isSearch = useRecoilValue(isSearchAtom);
  const setSeletedVideoIndex = useSetRecoilState(selectedVideoIndexAtom);

  const onClickVideoCard = (index: number) => {
    setSeletedVideoIndex(index);
  };

  useEffect(() => {
    if (!isSearch) {
      router.push("/");
    }
  }, [isSearch]);
  return (
    <div>
      {videoList.length > 0
        ? videoList.map((data: any, index: number) => (
            <div onClick={() => onClickVideoCard(index)}>
              <PostCard data={data} key={data.title} index={index} />
            </div>
          ))
        : new Array(3).fill("").map((_, index) => <PostSkeleton key={index} />)}
    </div>
  );
};

export default VideoList;

import React from "react";
import Image from "next/image";
import convertToKoreanTime from "@/utils/convertToKoreanTime";
import { shareKakao } from "@/utils/shareKakao";

const VideoDetail = ({ data }: any) => {
  const defaultDescription = (text: string) => {
    return <span className="text-gray-400 text-[12px]">{text}</span>;
  };
  const onClickYoutubeLogo = () => {
    const url = `https://www.youtube.com/watch?v=${data?.videoId}`;
    window.open(url, "_blank");
  };

  const onClickKakaoLogo = () => {
    const messageTitle = `🥳 "{searchKeyword}" 키워드의 찐영상 입니다. 🏆 찐영상 점수는 ${data?.point} 입니다.`;
    const route = `https://www.youtube.com/watch?v=${data?.videoId}`;
    const imageUrl = data?.thumbnails[0]?.url;
    shareKakao(route, messageTitle, data?.title, imageUrl);
  };

  return (
    <div>
      <h1 className="text-lg mb-3">{data?.title}</h1>
      <div className="divider"></div>
      <iframe
        id={data?.videoId}
        width="100%"
        src={`https://www.youtube.com/embed/${data?.videoId}?enablejsapi=1`}
        title={data?.title}
        allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"
        allowFullScreen
        className="mb-3"
      />
      <div className="flex items-center gap-2 mb-3">
        {/* <Image
          className="w-[40px] h-[40px] rounded-3xl border"
          src={data?.channelThumbnail?.url}
          width={50}
          height={50}
          alt={data?.channelName}
        /> */}
        <img
          src={data?.channelThumbnail?.url}
          alt={data?.channelName}
          className="w-[40px] h-[40px] rounded-3xl border"
        />
        <h2>{data?.channelName}</h2>
      </div>
      <h2 className="mb-3">{data?.title}</h2>
      <div className="flex flex-col gap-2 mb-10">
        <p>
          {data?.subscribers?.toLocaleString()}명
          {defaultDescription("(구독자수)")}
        </p>
        <p>
          {data?.viewCount?.toLocaleString()}회{defaultDescription("(조회수)")}
        </p>
        <p>
          {convertToKoreanTime(data?.publishedTime)}
          {defaultDescription("(업로드 시기)")}
        </p>
        <p>
          {data?.point}점{defaultDescription("(영상 가치 점수)")}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onClickYoutubeLogo}
          className="btn btn-active btn-ghost"
        >
          보러가기
        </button>
        <button onClick={onClickKakaoLogo} className="btn btn-active btn-ghost">
          공유하기
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;

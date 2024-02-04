import React from "react";
import Image from "next/image";
import Badge from "../common/badge";
import truncateString from "@/utils/truncateString";
import convertToKoreanTime from "@/utils/convertToKoreanTime";

interface Props {
  data: any;
  index: number;
  search: boolean;
}

const PostCard = ({
  data: {
    title,
    channelName,
    thumbnails,
    subscribers,
    viewCount,
    publishedTime,
    point,
  },
  index,
  search,
}: Props) => {
  return (
    <div className="min-h-[120px] pt-4 border-solid border-b">
      <label htmlFor={search ? "my-drawer" : ""}>
        <div className="flex flex-row gap-3 justify-between cursor-pointer">
          {thumbnails.length > 0 && (
            <div className="flex flex-col gap-1">
              <Image
                className="w-[180px] h-[90px] object-cover object-center rounded-md"
                src={thumbnails[0].url}
                width={180}
                height={90}
                alt={title}
              />
              <div className="w-[180px] text-[12px] my-2">
                <h2 className="break-keep">{truncateString(title, 30)}</h2>
              </div>
            </div>
          )}
          <div className="flex flex-col content-around">
            <Badge index={index} point={point} />
            <div className="flex flex-col gap-1 text-[14px] text-right px-3 py-1">
              <p>{subscribers.toLocaleString()}명</p>
              <p>{viewCount.toLocaleString()}회</p>
              <p>{convertToKoreanTime(publishedTime)}</p>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default PostCard;

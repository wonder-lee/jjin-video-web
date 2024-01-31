import React from "react";
import Image from "next/image";
import { truncateString } from "@/utils/truncateString";

interface Props {
  data: any;
}

const PostCard = ({
  data: {
    title,
    channelName,
    thumbnails,
    subscribers,
    viewCount,
    publishedTime,
  },
}: Props) => {
  return (
    <div className="min-h-[120px] pt-4 border-solid border-b">
      <div className="flex flex-row gap-3 justify-between">
        <div>
          <div className="text-[15px] min-h-[50px] font-medium">
            <h2 className="break-keep">{truncateString(title, 33)}</h2>
          </div>
          <p className="text-[12px] text-gray-500">
            {truncateString(channelName, 10)}
          </p>
          <div className="text-[12px] text-gray-500 flex gap-1">
            <span>{subscribers.toLocaleString()}명</span>/
            <span>{viewCount.toLocaleString()}회</span>/
            <span>{publishedTime}</span>
          </div>
        </div>
        {thumbnails.length > 0 && (
          <div className="flex flex-col gap-1 items-center">
            <Image
              className="w-[100px] h-[50px] object-cover object-center rounded-md"
              src={thumbnails[0].url}
              width={180}
              height={108}
              alt={title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;

import React from "react";
import Image from "next/image";
import { truncateString } from "@/utils/truncateString";

interface Props {
  data: any;
}

const PostCard = ({ data: { title, channelName, thumbnails } }: Props) => {
  return (
    <div className="min-h-[120px] pt-4 border-solid border-b">
      <div className="flex flex-row gap-3">
        {thumbnails.length > 0 && (
          <div className="flex flex-col gap-1 items-center">
            <Image
              className="w-[80px] h-[44px] object-cover object-center rounded-md"
              src={thumbnails[0].url}
              width={160}
              height={88}
              alt={title}
            />
            <p className="text-[12px] text-gray-500">
              {truncateString(channelName, 10)}
            </p>
          </div>
        )}
        <div>
          <div className="text-[15px] min-h-[50px] font-medium">
            <h2 className="break-keep">{truncateString(title, 30)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

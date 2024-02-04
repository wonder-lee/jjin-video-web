import React from "react";

const PostSkeleton = () => {
  return (
    <div className="flex pt-4 justify-between w-full">
      <div className="flex flex-col gap-4 mb-4 w-[180px]">
        <div className="skeleton h-[90px]"></div>
        <div className="skeleton h-4"></div>
      </div>
      <div className="flex flex-col gap-4 w-52 items-end">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-20"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;

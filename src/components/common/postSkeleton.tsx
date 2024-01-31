import React from "react";

const PostSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-6 mb-4 border-solid border-b">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-[230px]"></div>
          <div className="skeleton h-4 w-[150px]"></div>
          <div className="skeleton h-4 w-[150px]"></div>
        </div>
        <div className="skeleton w-[80px] h-[80px] rounded-full shrink-0"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;

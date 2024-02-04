import React from "react";
import PostCard from "./postCard";
import { RESPONSE_EXAMPLE } from "@/constants/responseExample";

const PostList = ({ search }: any) => {
  return (
    <div>
      {RESPONSE_EXAMPLE.list.map((data, index) => (
        <div key={data.title + index}>
          <PostCard data={data} index={index} search={search} />
        </div>
      ))}
    </div>
  );
};

export default PostList;

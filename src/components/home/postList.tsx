import React from "react";
import PostCard from "./postCard";
import { RESPONSE_EXAMPLE } from "@/constants/responseExample";
import Badge from "../common/badge";

const PostList = () => {
  return (
    <div>
      {RESPONSE_EXAMPLE.list.map((data, index) => (
        <div key={data.title + index}>
          <PostCard data={data} index={index} />
        </div>
      ))}
    </div>
  );
};

export default PostList;

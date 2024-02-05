import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PostDetailContainer = ({ children }: Props) => {
  return <div className="min-h-screen px-5 pt-[80px]">{children}</div>;
};

export default PostDetailContainer;

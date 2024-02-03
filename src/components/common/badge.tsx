import React from "react";

interface Props {
  index: number;
  point: number;
}

const Badge = ({ index, point }: Props) => {
  const badgeDefaultStyle = "border border-1 px-3 py-1 text-[12px] rounded-md";
  return (
    <span
      className={
        index === 0
          ? `${badgeDefaultStyle} border-rose-500 bg-rose-50 text-rose-500`
          : badgeDefaultStyle
      }
    >
      {`${index + 1}위 / ${point}점`}
    </span>
  );
};

export default Badge;

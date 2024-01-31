import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  AiOutlineEye,
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineGlobal,
  AiFillHome,
  AiTwotoneHome,
  AiOutlineHome,
} from "react-icons/ai";

const Filter = ({ setFormData }: any) => {
  const router = useRouter();
  const FILTER_ITEMS = [
    // { title: "조회수", items: ["500", "1000"] },
    // { title: "기간", items: ["1개월간", "6개월간"] },
    // { title: "길이", items: ["20분 ⬇️", "20분 ⬆️"] },
    // { title: "국가", items: ["한국", "미국"] },
    { title: "조회수", icon: <AiOutlineEye />, items: ["준비중.."] },
    { title: "기간", icon: <AiOutlineCalendar />, items: ["준비중.."] },
    { title: "길이", icon: <AiOutlineFieldTime />, items: ["준비중.."] },
    { title: "국가", icon: <AiOutlineGlobal />, items: ["준비중.."] },
  ];
  const onClicHome = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ keyword: "" });
    router.push("/");
  };
  return (
    <div className="flex justify-between">
      {FILTER_ITEMS.map(({ title, icon, items }) => (
        <div className="dropdown dropdown-top" key={title}>
          <div
            tabIndex={0}
            role="button"
            className="m-1 flex flex-col items-center text-gray-500 gap-1"
          >
            <span className="text-[20px]">{icon}</span>
            <span className="text-[10px]">{title}</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-20"
          >
            {items.map((data) => (
              <li key={data} className="dropdown-end text-[0.55rem]">
                <a>{data}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={onClicHome} className="btn btn-circle text-rose-500">
        <AiFillHome />
      </button>
    </div>
  );
};

export default Filter;

"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Filter from "./filter";
import { getListByKeyword } from "@/api/getListByKeyword";
import { useRecoilState } from "recoil";
import { videoListAtom } from "@/recoil/videoListAtom";
import { isSearchAtom } from "@/recoil/isSearchAtom";
const Search = () => {
  const router = useRouter();
  const [videoList, setVideoList] = useRecoilState(videoListAtom);
  const [isSearch, setIsSearch] = useRecoilState(isSearchAtom);
  const [formData, setFormData] = useState({
    keyword: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { keyword } = formData;
    if (keyword) {
      setVideoList([]);
      setIsSearch(true);
      router.push("?search=true");
      const { list } = await getListByKeyword({ keyword });
      setVideoList(list);
      // setFormData({ keyword: "" });
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-screen">
      <form
        onSubmit={handleSubmit}
        className="max-sm:w-[100vw] w-[500px] py-3 px-4 fixed bottom-0 bg-gray-50 mx-auto left-1/2 transform -translate-x-1/2 shadow-lg  border-solid border-t border-gray-200"
      >
        <Filter setFormData={setFormData} />
        <div className="flex justify-center">
          <div className="join mt-3 w-full">
            <input
              onChange={handleChange}
              name="keyword"
              value={formData.keyword}
              autoComplete="off"
              placeholder=""
              className="input input-bordered join-item w-full"
              disabled={isSearch && videoList.length === 0}
            />
            <button
              type="submit"
              className="btn join-item"
              disabled={isSearch && videoList.length === 0}
            >
              🔍
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;

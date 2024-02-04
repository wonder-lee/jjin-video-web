"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import JJIN_ICON from "@/static/jjin-logo.svg";

const Header = () => {
  const router = useRouter();
  const onClicHome = (e: FormEvent) => {
    e.preventDefault();
    // setFormData({ keyword: "" });
    router.push("/");
  };
  return (
    <header className="max-sm:w-[100vw] w-[500px] fixed top-0 backdrop-blur-lg px-5 z-10">
      <JJIN_ICON className="fill-rose-500" />
    </header>
  );
};

export default Header;

"use client";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface Props {
  children: ReactNode;
}

const LayoutProvider = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default LayoutProvider;

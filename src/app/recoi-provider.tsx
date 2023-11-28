"use client";
import { atom, RecoilRoot } from "recoil";

export const activeMenu = atom({
  key: "activeMenu",
  default: "menu-1",
});

export default function RecoilProvider({ children }: any) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

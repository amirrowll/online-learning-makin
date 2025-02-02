/* eslint-disable tailwindcss/classnames-order */
"use client";
import { useState } from "react";
import InfoValue1 from "./InfoValue/InfoValue1";

type TabKey = "درباره دوره" | "درباره استاد" | "سر فصل ها";
type TabContentsType = Record<TabKey, () => JSX.Element>;

const TabContents: TabContentsType = {
  "درباره دوره": () => <InfoValue1 />,
  "درباره استاد": () => <div>بیوگرافی استاد...</div>,
  "سر فصل ها": () => <div>لیست سرفصل‌ها...</div>,
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("درباره دوره");
  const tabs: TabKey[] = ["درباره دوره", "درباره استاد", "سر فصل ها"];

  const ActiveComponent = TabContents[activeTab];

  return (
    <div className="w-full">
      <div className="bg-white mt-10 rounded-xl py-[23px] px-4 flex flex-wrap md:flex-nowrap gap-8 items-center justify-around">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xl h-full font-kalamehMedium cursor-pointer ${
              activeTab === tab
                ? " underline decoration-[#F28C28] underline-offset-[36px] decoration-4 pb-2"
                : "pb-1"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      <div className="mt-20 p-4 rounded-xl">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default MenuTabs;
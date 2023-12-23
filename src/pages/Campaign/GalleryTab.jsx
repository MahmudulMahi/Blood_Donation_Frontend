import React, { useState } from "react";
import { FaImage, FaCamera, FaVideo } from "react-icons/fa";
import CampaignGallerPage from "./CampaignGallerPage";
import CampaignGalleryPhoto from "./CampaignGalleryPhoto";
import CampaignGalleryVideo from "./CampaignGalleryVideo";

export default function GalleryTab() {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "All":
        return <CampaignGallerPage />;
      case "Photo":
        return <CampaignGalleryPhoto />;
      case "Video":
        return <CampaignGalleryVideo />;
      default:
        return null;
    }
  };

  const tabs = [
    { name: "All", icon: <FaImage /> },
    { name: "Photo", icon: <FaCamera /> },
    { name: "Video", icon: <FaVideo /> },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="max-w-md rounded-lg shadow-lg">
          <div className="flex justify-between bg-white p-2 rounded-t-lg">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`flex flex-col items-center px-8 py-2 rounded focus:outline-none ${
                  selectedTab === tab.name
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <div>{tab.icon}</div>
                <div className="text-sm">{tab.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {renderComponent()}
    </div>
  );
}

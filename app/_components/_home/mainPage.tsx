"use client";
import { FC, useState } from "react";
import Sidebar from "./sidebar"; // Corrija o caminho se necessário

import ContentArea from "./contentArea";

import Image from "next/image";
import MobileSidebar from "./mobileSidebar";
const MainPage: FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");

  return (
    <>
      {/* Layout para desktops */}
      <div className="hidden sm:block">
        <div className="flex h-screen">
          <Sidebar onSelectMenuItem={setSelectedMenuItem} />
          <div className="flex-1 bg-gray-100 p-6">
            <ContentArea selectedMenuItem={selectedMenuItem} />
          </div>
        </div>
      </div>

      {/* Layout para dispositivos móveis */}
      <div className="block sm:hidden">
        <div className="flex justify-center py-4">
          <Image
            src="/images/logo.png"
            alt="Mustachebarber"
            width={150}
            height={150}
          />
        </div>
        <div className="h-screen">
          <MobileSidebar onSelectMenuItem={setSelectedMenuItem} />
          <div className="flex-1 bg-gray-100 p-6">
            <ContentArea selectedMenuItem={selectedMenuItem} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

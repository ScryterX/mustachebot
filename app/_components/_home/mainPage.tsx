// src/app/_home/MainPage.tsx

import { FC, useState } from "react";
import Sidebar from "./sidebar"; // Corrija o caminho se necessário
import { Button } from "@/app/_components/ui/button";
import ContentArea from "./contentArea";

const MainPage: FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");
  return (
    <div className="flex h-screen">
      <Sidebar onSelectMenuItem={setSelectedMenuItem} />
      <div className="flex-1 bg-gray-100 p-6">
        <ContentArea selectedMenuItem={selectedMenuItem} />
      </div>
    </div>
  );
};

export default MainPage;

"use client";

import React from "react";
import { useSession } from "next-auth/react";
import HomePage from "@/app/_components/_home/homePage";
import MainPage from "@/app/_components/_home/mainPage"; // Crie este componente conforme necessário

const Page = () => {
  const { data: session } = useSession();

  if (session) {
    return <MainPage />;
  } else {
    return <HomePage />;
  }
};

export default Page;

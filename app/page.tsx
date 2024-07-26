import React from "react";
import { useSession } from "next-auth/react";
import HomePage from "@/app/_components/_home/homePage";
import MainPage from "@/app/_components/_home/mainPage"; // Crie este componente conforme necessário
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";

const Page = async () => {
  //const { data: session } = useSession();
  const session = await getServerSession(authOptions);
  if (session) {
    return <MainPage />;
  } else {
    return <HomePage />;
  }
};

export default Page;

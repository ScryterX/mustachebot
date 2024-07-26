import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import { Home, Calendar, Settings, Bot } from "lucide-react";
import { signOut } from "next-auth/react";
import { Separator } from "../ui/separator";
import Image from "next/image";

interface SidebarProps {
  onSelectMenuItem: (item: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ onSelectMenuItem }) => {
  return (
    <div className="hidden w-64 bg-gray-800 p-4 text-white lg:block">
      <div className="flex justify-center py-4">
        <Image
          src="/images/logo.png"
          alt="Mustachebarber"
          width={150}
          height={150}
        />
      </div>
      <h2 className="mb-6 text-2xl font-bold">Painel de Controle</h2>
      <div className="space-y-2">
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onSelectMenuItem("home")}
        >
          <Home className="mr-2" /> Início
        </Button>

        <Separator />

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onSelectMenuItem("appointments")}
        >
          <Calendar className="mr-2" /> Agendamentos
        </Button>

        <Separator />

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onSelectMenuItem("chatbot")}
        >
          <Bot className="mr-2" /> Atendente virtual
        </Button>

        <Separator />

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onSelectMenuItem("settings")}
        >
          <Settings className="mr-2" /> Configurações
        </Button>
      </div>
      <Button
        variant="secondary"
        className="mt-4 w-full"
        onClick={() => signOut()}
      >
        Sair
      </Button>
    </div>
  );
};

export default Sidebar;

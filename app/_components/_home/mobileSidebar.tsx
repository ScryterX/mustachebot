import { FC, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Home, Calendar, Settings, Bot, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import { Separator } from "../ui/separator";

interface MobileSidebarProps {
  onSelectMenuItem: (item: string) => void;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ onSelectMenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="secondary"
        className="m-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="mr-2" /> : <Menu className="mr-2" />} Menu
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 p-4 text-white">
          <h2 className="mb-6 text-2xl font-bold">Painel de Controle</h2>
          <div className="space-y-2">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                onSelectMenuItem("home");
                setIsOpen(false);
              }}
            >
              <Home className="mr-2" /> Início
            </Button>

            <Separator />

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                onSelectMenuItem("appointments");
                setIsOpen(false);
              }}
            >
              <Calendar className="mr-2" /> Agendamentos
            </Button>

            <Separator />

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                onSelectMenuItem("chatbot");
                setIsOpen(false);
              }}
            >
              <Bot className="mr-2" /> Atendente virtual
            </Button>

            <Separator />

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                onSelectMenuItem("settings");
                setIsOpen(false);
              }}
            >
              <Settings className="mr-2" /> Configurações
            </Button>
          </div>
          <Button
            variant="secondary"
            className="mt-4 w-full"
            onClick={() => {
              signOut();
              setIsOpen(false);
            }}
          >
            Sair
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;

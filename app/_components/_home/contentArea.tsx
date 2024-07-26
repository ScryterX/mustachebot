import AIChatComponent from "@/app/chat/components/Chat";
import { FC } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useSession } from "next-auth/react";
import { AvatarImage } from "@radix-ui/react-avatar";

interface ContentAreaProps {
  selectedMenuItem: string;
}

const ContentArea: FC<ContentAreaProps> = ({ selectedMenuItem }) => {
  const { data } = useSession();
  return (
    <>
      <div className="flex justify-between">
        <Avatar>
          <AvatarImage src={data?.user?.image ?? undefined} />
          <AvatarFallback>
            {data?.user?.name?.split(" ")[0][0]}
            {data?.user?.name?.split(" ")[1][0]}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="p-4">
        {selectedMenuItem === "home" && (
          <div>
            {/*<h1 className="mb-4 text-2xl font-bold sm:text-3xl">
              Bem-vindo ao Painel de Controle
            </h1>*/}
            {/* Conteúdo da Home */}
          </div>
        )}
        {selectedMenuItem === "appointments" && (
          <div>
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
              Agendamentos
            </h1>
            {/* Conteúdo dos Agendamentos */}
          </div>
        )}
        {selectedMenuItem === "chatbot" && (
          <div>
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
              Atendente virtual
            </h1>
            {/* Conteúdo da Atendente virtual */}
            <AIChatComponent />
          </div>
        )}
        {selectedMenuItem === "settings" && (
          <div>
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
              Configurações
            </h1>
            {/* Conteúdo das Configurações */}
          </div>
        )}
      </div>
    </>
  );
};

export default ContentArea;

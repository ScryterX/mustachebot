// src/app/_home/ContentArea.tsx

import AIChatComponent from "@/app/chat/components/Chat";
import { FC } from "react";

interface ContentAreaProps {
  selectedMenuItem: string;
}

const ContentArea: FC<ContentAreaProps> = ({ selectedMenuItem }) => {
  return (
    <div>
      {selectedMenuItem === "home" && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">
            Bem-vindo ao Painel de Controle
          </h1>
          {/* Conteúdo da Home */}
        </div>
      )}
      {selectedMenuItem === "appointments" && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Agendamentos</h1>
          {/* Conteúdo dos Agendamentos */}
        </div>
      )}
      {selectedMenuItem === "chatbot" && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Atendente virtual</h1>
          {/* Conteúdo das Atendente virtual */}
          <AIChatComponent />
        </div>
      )}
      {selectedMenuItem === "settings" && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Configurações</h1>
          {/* Conteúdo das Configurações */}
        </div>
      )}
    </div>
  );
};

export default ContentArea;

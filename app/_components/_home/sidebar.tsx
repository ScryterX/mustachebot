// // src/app/_home/Sidebar.tsx

// import { FC } from "react";
// import { Button } from "@/app/_components/ui/button";
// import { Home, Calendar, Settings, Sun, Moon } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { useTheme } from "next-themes";
// import { signOut } from "next-auth/react";

// const Sidebar: FC = () => {
//   const { setTheme } = useTheme();
//   return (
//     <div className="w-64 bg-gray-800 p-4 text-white">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="secondary" size="icon">
//             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("system")}>
//             System
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       <ul>
//         <li className="mb-4">
//           <Button variant="secondary" className="w-full">
//             <Home className="mr-2" /> Início
//           </Button>
//         </li>
//         <li className="mb-4">
//           <Button variant="secondary" className="w-full">
//             <Calendar className="mr-2" /> Agendamentos
//           </Button>
//         </li>
//         <li>
//           <Button variant="secondary" className="w-full">
//             <Settings className="mr-2" /> Configurações
//           </Button>
//         </li>
//       </ul>
//       <Button onClick={() => signOut()}>Sair</Button>
//     </div>
//   );
// };

// export default Sidebar;

// src/app/_home/Sidebar.tsx

// src/app/_home/Sidebar.tsx

import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import { Home, Calendar, Settings, Sun, Moon, Bot } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { signOut } from "next-auth/react";
import { Separator } from "../ui/separator";

interface SidebarProps {
  onSelectMenuItem: (item: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ onSelectMenuItem }) => {
  const { setTheme } = useTheme();
  return (
    <div className="w-64 bg-gray-800 p-4 text-white">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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

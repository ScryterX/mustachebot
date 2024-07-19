import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      role?: string; // Adicione esta linha
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    user_role?: string; // Adicione esta linha
  }
}

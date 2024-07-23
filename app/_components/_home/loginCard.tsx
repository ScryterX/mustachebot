"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/app/_components/ui/card";

const LoginCard = () => {
  return (
    <Card className="space-y-4 p-8">
      <CardHeader>
        <h1 className="text-2xl font-bold">Bem-vindo à Mustache Barbearia</h1>
      </CardHeader>
      <CardContent>
        <Button onClick={() => signIn("google")} className="w-full">
          Entrar com Google
        </Button>
      </CardContent>
      <CardFooter>
        {/* Adicione qualquer conteúdo de rodapé aqui, se necessário */}
      </CardFooter>
    </Card>
  );
};

export default LoginCard;

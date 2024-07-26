"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { useChat } from "ai/react";
import { SendIcon } from "lucide-react";
import { useSession } from "next-auth/react";

interface ChatProps {}

const AIChatComponent = (props: ChatProps) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { data } = useSession();
  return (
    <div className="w-full max-w-full">
      <Card className="grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Mustachebot</CardTitle>
          <CardDescription>Assistente virtual Mustachebarber</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4 md:h-[600px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className="mt-2 flex gap-2 text-sm text-slate-600"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>
                      {data?.user?.name?.split(" ")[0][0]}
                      {data?.user?.name?.split(" ")[1][0]}
                    </AvatarFallback>
                    <AvatarImage src={data?.user?.image ?? undefined} />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>MB</AvatarFallback>
                    <AvatarImage src="https://static.vecteezy.com/ti/vetor-gratis/p1/4476066-isolado-macho-bigode-design-gratis-vetor.jpg" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user"
                      ? (data?.user?.name ?? "Usuário")
                      : "Mustachebot"}
                  </span>
                  {message.content}
                </p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex w-full gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="Em que posso ajudar?"
              value={input}
              onChange={handleInputChange}
              className="flex-1"
            />
            <Button type="submit" variant={"outline"} className="flex-shrink-0">
              <SendIcon />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIChatComponent;

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
    <div>
      <Card className="w-[440px] grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Mustachebot</CardTitle>
          <CardDescription>Assistente virtual Mustachebarber</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="mt-2 flex gap-2 text-sm text-slate-600"
                >
                  {message.role === "user" && (
                    <Avatar>
                      <AvatarFallback>US</AvatarFallback>
                      <AvatarImage src={data?.user?.image ?? undefined} />
                    </Avatar>
                  )}

                  {message.role === "assistant" && (
                    <Avatar>
                      <AvatarFallback>MB</AvatarFallback>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/10850412?v=4" />
                    </Avatar>
                  )}
                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === "user"
                        ? data?.user?.name
                        : "Mustachebot"}
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form
            className="flex w-full justify-between gap-1"
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="Em que posso ajudar?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit" variant={"outline"}>
              <SendIcon />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIChatComponent;

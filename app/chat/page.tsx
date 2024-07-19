import { SendIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Input } from "../_components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import AIChatComponent from "./components/Chat";
const AiChatPage = async () => {
  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

  const model = groq("llama3-8b-8192");

  const { text } = await generateText({
    model: groq("llama3-8b-8192"),
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
  });
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <AIChatComponent />
    </div>
  );
};

export default AiChatPage;

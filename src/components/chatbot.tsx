'use client';

import { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, MessageCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { chatbotAssistant } from '@/ai/flows/chatbot-assistant';
import { Logo } from './icons';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isPending, setIsPending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsPending(true);

    try {
      const response = await chatbotAssistant({ query: inputValue });
      const assistantMessage: Message = { role: 'assistant', content: response.answer };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-accent shadow-lg hover:bg-accent/90 focus:ring-2 focus:ring-ring focus:ring-offset-2 animate-pulse"
        aria-label="Open Chatbot"
      >
        <MessageCircle className="h-8 w-8 text-accent-foreground" />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="flex flex-col w-full sm:max-w-md">
          <SheetHeader className="text-left">
            <SheetTitle className="font-headline flex items-center gap-2">
                <Logo className="h-6 w-6 text-primary" />
                Sikkim Cultural Assistant
            </SheetTitle>
            <SheetDescription>
              Ask me about monastery history, routes, events, and culture.
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="flex-1 my-4 pr-4 -mr-6" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.length === 0 && (
                 <div className="p-4 text-center text-sm text-muted-foreground">
                    Start a conversation by typing your question below.
                 </div>
              )}
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 border-2 border-primary/50">
                      <AvatarFallback>
                        <Logo className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg px-4 py-2 max-w-[80%] text-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                   {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                       <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {isPending && (
                <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 border-2 border-primary/50">
                        <AvatarFallback>
                            <Logo className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-3 bg-secondary text-secondary-foreground">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                </div>
               )}
            </div>
          </ScrollArea>
          
          <SheetFooter>
            <form onSubmit={handleSubmit} className="relative w-full">
              <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask about a monastery..."
                className="pr-12 h-12 text-base"
                disabled={isPending}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9"
                disabled={isPending || !inputValue.trim()}
              >
                <CornerDownLeft className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

"use client";
import React from "react";
import { Label } from "@/components/ui/contact-label";
import { Input } from "@/components/ui/contact-input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Textarea } from "./ui/contact-textarea";

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="py-20 bg-black px-10" id="contact-us">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
            <h2 className="font-bold text-xl text-neutral-200">
                Leave a Message
            </h2>
            <p className="text-neutral-300 text-sm">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you! Whether you're interested in working together or simply want to drop us a line, feel free to leave us a message below.
            </p>
        
            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="firstname">Name</Label>
                    <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="Your Message"/>
                </LabelInputContainer>
                
        
                <button
                className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                >
                  Send Message
                <BottomGradient />
                </button>
            </form>
        </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

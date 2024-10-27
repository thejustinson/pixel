"use client"

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { API_URL } from "@/app/constants";


export const NewsLetter = () => {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");    

    // Get the email from sessionStorage
    const newsletterEmail = sessionStorage.getItem('newsletterEmail');

      if (newsletterEmail !== null) {
          // If newsletterEmail is not null, append it to the FormData
          const formdata = new FormData();
          formdata.append("newsletterEmail", newsletterEmail);
          
          fetch(`${API_URL}emailtonewsletter`, {
            method: 'POST',
            body: formdata
          })
          .then(res => res.json())
          .then(data => {
              if(data.success) {
                  setSubscribed(true)
              } else {
                  // If the operation fails
                  console.error("Failed to add email:", data.error);
              }
          })
          .catch(error => {
              // If there's an error in the fetch request
              console.error("Error:", error);
          });
             
        
      } else {
          console.error("newsletterEmail is null");
          // Handle the case when newsletterEmail is null
      }
  };

  return (
    <div className="py-20 bg-white px-10">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ">
        <h2 className="font-bold text-xl text-neutral-800">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2">
          Stay in the loop with the latest news, trends, and updates from Aceternity! Our newsletter is packed with exclusive content, insightful articles, and exciting announcements that you won't want to miss.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email"/>
          </LabelInputContainer>
          
          {
            !subscribed ? (
              <button
                className="bg-purple-900 relative block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                type="submit"
              >
                Subscribe &rarr;
                <BottomGradient />
              </button>
            ):(
              <div
                className="bg-purple-900 relative w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] flex justify-center items-center"
              >
                You have subscribed successfully
                <BottomGradient />
              </div>
            )
          }
          
        </form>
      </div>
    </div>
  );
};

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

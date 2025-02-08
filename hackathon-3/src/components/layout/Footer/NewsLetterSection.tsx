'use client'

import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import React, { useState } from "react";

const NewsLetterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email) return;
    
    try {
      setStatus("loading");
      
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <p className={cn([integralCF.className, "font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0"])}>
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex items-center">
        <div className="flex flex-col max-w-[349px] mx-auto">
          <InputGroup className="flex bg-white mb-[14px]">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/envelope.svg"
                height={20}
                width={20}
                alt="email"
                className="min-w-5 min-h-5"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base"
            />
          </InputGroup>
          <Button
            variant="secondary"
            className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3"
            aria-label="Subscribe to Newsletter"
            onClick={handleSubscribe}
            disabled={status === "loading"}
            type="button"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
          {status === "success" && (
            <p className="text-green-400 mt-2 text-sm text-center">Successfully subscribed!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;

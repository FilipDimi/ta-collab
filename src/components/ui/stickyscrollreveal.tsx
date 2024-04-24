"use client";
import React from "react";
import { StickyScroll } from "../aceternity/sticky-scroll-reveal";

const content = [
  {
    title: "Contact Your TA",
    description:
      "Get in touch with your teaching assistant directly. Ask questions, seek advice, and discuss your coursework. Our platform makes it easy to connect and get the support you need to succeed in your studies.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Contact Your TA
      </div>
    ),
  },
  {
    title: "Check TA Hours",
    description:
      "See when your teaching assistant is available. Schedule a time that works for you and get the help you need with your assignments. Our platform keeps their hours up-to-date, making it easy to plan your study sessions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Check TA Hours
      </div>
    ),
  },
  {
    title: "Forum",
    description:
      "Dive into discussions tailored to your classes or explore broader topics in our general forum. Engage with classmates, share insights, and expand your understanding. Our platform connects you directly to the conversations that matter in your academic journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Forum
      </div>
    ),
  },
  {
    title: "Contribute to Open Source",
    description:
      "Dive into open source by coding on this very platform! Teaching assistants are here to help you find diverse projects or contribute directly to the tools and features you use every day. If there’s a feature you want to see, you can create it here. Gain practical experience and graduate with real-world skills by helping us evolve and enhance this platform—making it better for you and future students.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Contribute to Open Source
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}

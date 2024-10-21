"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./CardContent";

const cardData = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/float"
  },
  {
    title: "Explore the cosmos",
    description: "Journey through space with stunning visuals and 3D effects",
    imageSrc: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/cosmos"
  },
  {
    title: "Dive into the ocean",
    description: "Discover the wonders of the deep sea with immersive 3D cards",
    imageSrc: "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/ocean"
  },
  {
    title: "Uncover ancient mysteries",
    description: "Explore historical artifacts with interactive 3D perspectives",
    imageSrc: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/history"
  }
];

export function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.imageSrc}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            {/* <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Learn More →
              </CardItem>
            </div> */}
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { CombinedComponent } from "../components/CombinedComponent";
import { Example } from "../components/MerchSection/Example";
import { Hero } from "../components/HeroCursor/Hero";
import { HeroCursor } from "../components/HeroCursor/HeroCursor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <HeroCursor />
      <HeroParallax products={products} />
      <CombinedComponent />
      <Example />
    </main>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/gallery/1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    "/gallery/2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
    "/gallery/3.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
    "/gallery/4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    "/gallery/5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    "/gallery/6.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
    "/gallery/7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
    "/gallery/8.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
    "/gallery/9.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
    "/gallery/10.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    "/gallery/6.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/11.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/12.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/13.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/14.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/1.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/11.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/17.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/18.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/19.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/gallery/20.jpg",
  },
];

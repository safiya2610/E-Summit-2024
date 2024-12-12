"use client";
import ZoomParallax from "./ZoomParallax";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Sponsors from "./Sponsors/page"; 


export const CombinedComponent = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
  
   
      <ZoomParallax />
      <HorizontalScrollCarousel />
      <Sponsors />
   
  </div>

  );
};
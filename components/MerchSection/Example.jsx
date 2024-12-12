"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalScrollCarousel from './HorizontalScrollCarousel';

export const Example = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="" id="Merch">
      <div className="flex items-center justify-center">
        <motion.span
          ref={targetRef}
          className="font-semibold font-serif uppercase text-slate-300 text-8xl mt-48 mb-20"
          style={{ scale }}
        >
          GET YOUR SWAG ON
        </motion.span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        {/* <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span> */}
      </div>
    </div>
  );
};


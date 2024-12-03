"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from './Card';
// import merch1 from '../public/assets/merch1.png';
// import merch2 from '../public/assets/merch2.png';

const cards = [
  {
    url: '/assets/merch1.png',
    title: "Hoodie",
    id: 1,
  },
  {
    url: '/assets/merch2.png',
    title: "Hoodie",
    id: 2,
  },
  {
    url: "https://www.pngarts.com/files/12/Plain-Black-T-Shirt-PNG-Download-Image.png",
    title: "T Shirt",
    id: 3,
  },
  {
    url: "https://www.pngall.com/wp-content/uploads/5/Black-Coffee-Mug-PNG-Free-Download.png",
    title: "Mug",
    id: 4,
  },
  {
    url: "https://www.pngmart.com/files/6/Baseball-Cap-Transparent-Background-1.png",
    title: "Cap",
    id: 5,
  },
  {
    url: "https://pngimg.com/d/keychain_PNG155.png",
    title: "KeyChain",
    id: 6,
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["14%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

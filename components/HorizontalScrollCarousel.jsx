

import { motion, useTransform, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const cards = [
  {
    url: "/imgs/1.jpeg",
    title: "Event 1",
    id: 1,
  },
  {
    url: "/imgs/2.jpeg",
    title: "Event 2",
    id: 2,
  },
  {
    url: "/imgs/3.jpeg",
    title: "Event 3",
    id: 3,
  },
  {
    url: "/imgs/4.jpeg",
    title: "Event 4",
    id: 4,
  },
  {
    url: "/imgs/5.jpeg",
    title: "Event 5",
    id: 5,
  },
  {
    url: "/imgs/6.jpeg",
    title: "Event 6",
    id: 6,
  },
  {
    url: "/imgs/7.jpeg",
    title: "Event 7",
    id: 7,
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card, index) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const cardRef = useRef(null);
  const cardX = useMotionValue(0);
  const cardOpacity = useTransform(cardX, [-300, 0, 300], [0.2, 1, 0.2]);
  const cardOpacitySpring = useSpring(cardOpacity, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        cardX.set(rect.left + rect.width / 2 - window.innerWidth / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cardX]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: cardOpacitySpring }}
      key={card.id}
      onHoverStart={() => cardOpacity.set(1)}
      onHoverEnd={() => {
        const rect = cardRef.current.getBoundingClientRect();
        cardX.set(rect.left + rect.width / 2 - window.innerWidth / 2);
      }}
      className="group relative h-[450px] w-[650px] overflow-hidden bg-neutral-200 transform transition-transform duration-500 hover:scale-105 cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default HorizontalScrollCarousel;

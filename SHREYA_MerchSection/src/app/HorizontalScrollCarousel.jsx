import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import merch1 from './assets/merch1.png';
import merch2 from './assets/merch2.png';


const Example = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  return (
    <div className="bg-darkGreenishBlue">
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

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["14%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-darkGreenishBlue">
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

const Card = ({ card }) => {
  return (
    <div>
    <a href="">
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden border-2 border-white  transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-30"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "70%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between">
          <p className="text-2xl font-bold text-slate-50 uppercase">
            {card.title}
          </p>
          <a href="" className="self-end">
            <button className="bg-black text-white px-4 py-2 mt-4">
              Details
            </button>
          </a>
        </div>
      </div>
    </a>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: merch1,
    title: "Hoodie",
    id: 1,
  },
  {
    url: merch2,
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
"use client";

const Card = ({ card }) => {
    return (
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
    );
  };
  
  export default Card;
  
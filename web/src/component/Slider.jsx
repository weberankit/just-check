import { useState } from "react";

const Slider = () => {
  // Links of images and corresponding texts
  const linkImg = ["image.jpg", "vite.svg", "mqdefault.jpg"];
  const text = ["TCS is Back", "TCS is Coming", "Let's Rock It"];
  const [curr, setCurr] = useState(0);

  const handleNext = () => setCurr((prev) => (prev + 1) % linkImg.length);
  const handlePrev = () => setCurr((prev) => (prev === 0 ? linkImg.length - 1 : prev - 1));

  return (
    <div className="bg-black p-4 relative">
      <div className="w-[80%] m-auto">
        <h1 className="text-white font-sans font-extrabold text-7xl absolute top-1/3 left-1/2 transform -translate-x-1/2 p-2">
          {text[curr]}
        </h1>
        <img
          className="w-full h-[540px] rounded-lg object-cover"
          key={curr}
          src={`/${linkImg[curr]}`}
          alt={text[curr]}
        />
      </div>
      <div className="w-[80%] m-auto flex justify-center mt-4">
        <button className="p-2 m-1 bg-red-500 rounded-sm hover:bg-red-700" onClick={handlePrev}>
          Prev
        </button>
        <button className="p-2 m-1 bg-red-500 rounded-sm hover:bg-red-700" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;


import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-8 mt-0">
      <div className="mx-auto grid grid-cols-3 lg:gap-7 md:gap-4 gap-2">
        {counterItems.map((item) => (
          <div className="bg-blue-150 rounded-lg lg:p-10 md:p-5 p-2 flex flex-col justify-center">
            <div
              key={counterItems.label}
              className="counter-number text-gold-100 lg:text-5xl md:text-3xl text-lg font-bold mb-2 flex justify-between"
            >
              <CountUp suffix={item.suffix} end={item.value} />
              <img
                src={item.imgPath}
                alt="icons"
                className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4"
              />
            </div>
            <div
              className="text-white-25 lg:text-lg md:text-sm text-[9px]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

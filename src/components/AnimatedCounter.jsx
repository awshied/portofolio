import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-8 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-blue-150 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={counterItems.label}
              className="counter-number text-gold-100 text-5xl font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div
              className="text-white-50"
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

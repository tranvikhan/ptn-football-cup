import { useMemo } from "react";
import { CountdownRenderProps } from "react-countdown";
import { formatClock } from "../utils/format";
import { IoIosFootball } from "react-icons/io";

export const Clock = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed)
    return (
      <div className="flex flex-col items-center text-white bg-gray-800 py-4 px-6 rounded-lg">
        <h2 className="text-3xl font-orbitron"> GAME STARTED</h2>
        <IoIosFootball className="text-5xl animate-spin" />
      </div>
    );
  return (
    <div className="flex flex-row items-stretch gap-4 lg:gap-8">
      {<NumberCard num={days} text={"day"} />}
      <NumberCard num={hours} text={"hour"} />
      <NumberCard num={minutes} text={"minute"} />
      <NumberCard num={seconds} text={"second"} />
    </div>
  );
};

interface NumberCardProps {
  num: number;
  text: string;
}
const NumberCard = ({ num, text }: NumberCardProps) => {
  const textRender = useMemo(() => (num > 1 ? `${text}S` : text), [num]);
  if (!num) return null;
  return (
    <div className="flex flex-col justify-center items-center text-white bg-gray-900 bg-opacity-80 backdrop-blur-md border-gray-900 border w-16 lg:w-20 h-16 lg:h-20 rounded-lg shadow-2xl">
      <h2 className="text-xl lg:text-2xl font-orbitron">{formatClock(num)}</h2>
      <h3 className="font-light text-[10px] lg:text-xs uppercase">
        {textRender}
      </h3>
    </div>
  );
};

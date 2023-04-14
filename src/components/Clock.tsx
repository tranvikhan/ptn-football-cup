import { useMemo } from "react";
import { CountdownRenderProps } from "react-countdown";
import { formatClock } from "../utils/format";
import { Ranking } from "./Ranking";

export const Clock = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) return <Ranking />;
  return (
    <div className="flex flex-row items-stretch gap-4 lg:gap-8 mt-16">
      <NumberCard num={days} text={"day"} hiddenZero />
      <NumberCard num={hours} text={"hour"} hiddenZero={!days} />
      <NumberCard num={minutes} text={"minute"} hiddenZero={!hours} />
      <NumberCard num={seconds} text={"second"} hiddenZero={!minutes} />
    </div>
  );
};

interface NumberCardProps {
  num: number;
  text: string;
  hiddenZero?: boolean;
}
const NumberCard = ({ num, text, hiddenZero = true }: NumberCardProps) => {
  const textRender = useMemo(() => (num > 1 ? `${text}S` : text), [num]);
  if (!num && hiddenZero) return null;
  return (
    <div className="flex flex-col justify-center items-center text-white bg-gray-900 bg-opacity-80 backdrop-blur-md border-gray-900 border w-16 lg:w-20 h-16 lg:h-20 rounded-lg shadow-2xl">
      <h2 className="text-xl lg:text-2xl font-orbitron">{formatClock(num)}</h2>
      <h3 className="font-light text-[10px] lg:text-xs uppercase">
        {textRender}
      </h3>
    </div>
  );
};

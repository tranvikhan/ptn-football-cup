import { clubs } from "../constants/clubs";

export const Ranking = () => {
  return (
    <div className="flex flex-col space-y-8 items-center">
      <h2 className="text-gray-900 font-rajdhani font-[600] text-4xl">
        RANKING
      </h2>
      <div className="flex flex-col gap-4 lg:gap-6 items-stretch">
        <div className="py-2 px-6  bg-white bg-opacity-70 backdrop-blur-md border-white border rounded-lg flex justify-between items-center gap-8">
          <img src={clubs[1].logo} className={"w-14 lg:w-16 h-14 lg:h-16"} />
          <h2 className="text-gray-600 font-rajdhani font-[600] text-base lg:text-xl">
            {clubs[1].name}
          </h2>
          <img src={"/img/one.png"} className={"w-8 lg:w-10"} />
        </div>
        <div className="py-2 px-6 bg-white bg-opacity-70 backdrop-blur-md border-white border rounded-lg flex justify-between items-center">
          <img src={clubs[0].logo} className={"w-14 lg:w-16 h-14 lg:h-16"} />
          <h2 className="text-gray-600 font-rajdhani font-[600] text-base lg:text-xl">
            {clubs[0].name}
          </h2>
          <img src={"/img/two.png"} className={"w-8 lg:w-10"} />
        </div>
        <div className="py-2 px-6  bg-white bg-opacity-70 backdrop-blur-md border-white border rounded-lg flex justify-between items-center">
          <img src={clubs[2].logo} className={"w-14 lg:w-16 h-14 lg:h-16"} />
          <h2 className="text-gray-600 font-rajdhani font-[600] text-base lg:text-xl">
            {clubs[2].name}
          </h2>
          <img src={"/img/three.png"} className={"w-8 lg:w-10"} />
        </div>
      </div>
    </div>
  );
};

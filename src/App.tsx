import { format } from "date-fns";
import Countdown from "react-countdown";
import { HiClock, HiLocationMarker } from "react-icons/hi";
import { Clock } from "./components/Clock";
import { clubs } from "./constants/clubs";
import { setupConfig } from "./constants/setup";

export const App = () => {
  const startDate = new Date(setupConfig.date);
  return (
    <>
      <div className="bg-blue-950 bg-stadium bg-cover bg-center bg-no-repeat overflow-auto">
        <div className="flex flex-col items-center">
          <section className="min-h-screen flex flex-col items-center justify-center py-6 px-4 gap-16">
            <div className="flex flex-col items-center">
              <img
                src={"/img/ptn.png"}
                alt={"PTN Global"}
                className={"h-28 lg:h-44"}
              />
              <h2 className="text-slate-800 text-3xl lg:text-5xl font-train-one">
                Football Cup 2023
              </h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-gray-600 text-base lg:text-xl font-rajdhani font-[600] flex flex-row items-center">
                <HiClock className="-mt-1" />
                {`${format(startDate, "HH")}h ${format(
                  startDate,
                  "dd/MM/yyyy"
                )}`}
              </h3>
              <a
                title="Click to open Google Map"
                href={setupConfig.addressUrl}
                target={"_blank"}
                className=" text-gray-600 text-base lg:text-xl font-rajdhani font-[600] flex flex-row items-center hover:text-gray-800 transition-all"
              >
                <HiLocationMarker className="-mt-1" />
                {setupConfig.address}
              </a>
            </div>
            <Countdown date={startDate} renderer={Clock} />
          </section>
          <section className="min-h-screen flex flex-col  items-center justify-center py-6 px-4">
            <div className="grid grid-col-1 lg:grid-cols-3 gap-16 lg:gap-28">
              {clubs.map((club) => (
                <div
                  key={club.id}
                  className="bg-white flex flex-col items-center p-8 rounded-lg"
                >
                  <img src={club.logo} className={"w-20 h-20"} />
                  <h2 className="text-gray-600 font-rajdhani font-[600] text-xl">
                    {club.name}
                  </h2>
                  <h2 className="text-gray-600 font-rajdhani text-base">
                    {club.desc}
                  </h2>
                  <div className="flex flex-col items-center mt-8">
                    {club.player.map((player) => (
                      <div
                        key={player.id}
                        className="text-gray-600 font-[500] font-rajdhani text-base"
                      >
                        {player.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-gray-800">
        <div className="container mx-auto px-4 py-2">
          <h6 className="text-white font-rajdhani text-center">
            Copyright 2023 © Khan Tran PTN - Version 1.0
          </h6>
        </div>
      </footer>
    </>
  );
};

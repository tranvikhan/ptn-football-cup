import { format } from "date-fns";
import Countdown from "react-countdown";
import { HiClock, HiLocationMarker } from "react-icons/hi";
import { Clock } from "./components/Clock";
import { clubs } from "./constants/clubs";
import { matches } from "./constants/matches";
import { setupConfig } from "./constants/setup";

export const App = () => {
  const startDate = new Date(setupConfig.date);
  return (
    <div className="bg-blue-300 bg-stadium bg-cover bg-center bg-no-repeat overflow-y-auto h-screen flex flex-col items-stretch justify-start">
      <section className="flex flex-col items-center py-12 px-4 gap-16">
        <div className="flex flex-col items-center">
          <img
            src={"/img/ptn.png"}
            alt={"PTN Global"}
            className={"h-28 lg:h-44"}
          />
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-train-one ">
            Football Cup 2023
          </h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-gray-700 text-base lg:text-xl font-rajdhani font-[600] flex flex-row items-center">
            <HiClock className="-mt-1" />
            {`${format(startDate, "HH")}h ${format(startDate, "dd/MM/yyyy")}`}
          </h3>
          <a
            title="Click to open Google Map"
            href={setupConfig.addressUrl}
            target={"_blank"}
            className=" text-gray-700 text-base lg:text-xl font-rajdhani font-[600] flex flex-row items-center hover:text-gray-900 transition-all"
          >
            <HiLocationMarker className="-mt-1" />
            {setupConfig.address}
          </a>
        </div>
        <Countdown date={startDate} renderer={Clock} />
      </section>
      <section className="flex flex-col items-center justify-center py-20 px-4 gap-20">
        <h2 className="text-gray-900 font-rajdhani font-[600] text-4xl">
          TEAMS
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-16 lg:gap-28">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-white bg-opacity-70 backdrop-blur-md border-white border flex flex-col items-center p-8 rounded-lg shadow-2xl"
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
      <section className="flex flex-col items-center justify-center py-20 px-4 gap-20">
        <h2 className="text-gray-900 font-rajdhani font-[600] text-4xl">
          MATCHES
        </h2>
        <div className="flex flex-col items-start justify-stretch gap-16">
          {matches.map((match) => (
            <div
              key={match.id}
              className="grid grid-cols-2 gap-14 lg:gap-[6.5rem]"
            >
              {match.team.map((team, index) => (
                <div
                  key={team.id}
                  className="flex flex-row relative items-center bg-white bg-opacity-70 backdrop-blur-md border-white border px-4 lg:px-8 py-2 gap-2 lg:gap-4 rounded-lg shadow-2xl"
                >
                  <img
                    src={team.logo}
                    className={"w-10 lg:w-14 h-10 lg:h-14"}
                  />
                  <h2 className="text-gray-600 font-rajdhani font-[600] text-base lg:text-xl">
                    {team.name}
                  </h2>
                  {index === 0 && (
                    <div
                      className={
                        "absolute -right-12 lg:-right-20 top-2 z-10 flex flex-col items-center"
                      }
                    >
                      <img
                        src={"/img/vs.png"}
                        className={"w-10 lg:w-14 h-10 lg:h-14"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-900">
        <div className="container mx-auto px-4 py-2">
          <h6 className="text-white font-rajdhani text-center">
            Copyright 2023 © Khan Tran PTN - Version 1.0
          </h6>
        </div>
      </section>
    </div>
  );
};

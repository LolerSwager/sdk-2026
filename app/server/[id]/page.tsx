import CopyButton from "@/components/ui/CopyButton";
import DiscordWidget from "@/components/ui/discordWidget";
import { Globe } from "lucide-react";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const server = {
    info: {
      name: "Reforger Tactical EU #3",
      description: "Hardcore tactical server focused on teamwork and realism.",
      discordServerI: "521608697764380694", // this is a sting do to lemitactions with a long integers
      discordServerId: "219210401307557888", // this is a sting do to lemitactions with a long integers
      website: "http://localhost:3000",
      ip: "203.0.113.25",
      port: "2001",
      map: "Everon",
      seed: null,
      game: {
        name: "Arma Reforger",
        version: "1.2.1",
        appid: 1874880,
        onSteam: true,
      },
    },

    live: {
      playerCount: 3,
      players: ["Razor", "Ghost", "Maverick"],
      ping: 62,
      isOnline: true,
    },

    metrics: {
      uptime: [
        { t: 0, value: 99.8 },
        { t: 1, value: 99.7 },
        { t: 2, value: 100 },
        { t: 3, value: 98.9 },
        { t: 4, value: 99.5 },
        { t: 5, value: 99.9 },
        { t: 6, value: 100 },
        { t: 7, value: 99.6 },
        { t: 8, value: 99.4 },
        { t: 9, value: 99.8 },
        { t: 10, value: 100 },
        { t: 11, value: 99.9 },
        { t: 12, value: 99.7 },
        { t: 13, value: 99.3 },
        { t: 14, value: 99.6 },
        { t: 15, value: 99.8 },
        { t: 16, value: 100 },
        { t: 17, value: 99.9 },
        { t: 18, value: 99.5 },
        { t: 19, value: 99.7 },
        { t: 20, value: 89.8 },
        { t: 21, value: 80 },
        { t: 22, value: 98.9 },
        { t: 23, value: 89.6 },
      ],
    },

    mods: ["Conflict Enhanced", "Realism Overhaul"],
  };

  return (
    <main className="p-4 flex flex-col items-center gap-4">
      <section className="max-w-280 w-full p-4 flex gap-4">
        {/* header */}
        <Image
          src="/images/logo.png"
          alt="icon"
          width={70}
          height={70}
          className="border-2 rounded-full"
        />
        <div className="flex flex-col justify-around">
          <h1 className="text-2xl font-semibold">{server.info.name}</h1>
          <p className="text-gray-400">{server.info.game.name}</p>
        </div>
      </section>

      <section className="max-w-280 w-full rounded-2xl flex gap-4">
        <article className="w-full bg-[#141414] text-[#EEEEEE] rounded-2xl">
          <section className=" p-4">
            <h3 className="font-semibold">About</h3>
            <p>{server.info.description}</p>
          </section>

          <section className="grid p-4 gap-4">
            <p>Ping: {server.live.ping}ms</p>
            <p>Version: {server.info.game.version}</p>
            {server.info.seed ? (
              <p>Seed: {server.info.seed}</p>
            ) : (
              <p>map: {server.info.map}</p>
            )}
          </section>

          <section className="grid p-4 gap-4">
            <div>
              <h3 className="font-semibold">
                Players {server.live.playerCount}
              </h3>
              <ul className="pl-2">
                {server.live.players.map((player) => (
                  <li key={player}>{player}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Mods</h3>
              <ul className="pl-2">
                {server.mods.map((mod) => (
                  <li key={mod}>{mod}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className=" p-4">
            <h3 className="font-semibold pb-2">Status</h3>
            <ul className="flex gap-2">
              {server.metrics.uptime.map((item) => (
                <li
                  key={item.t}
                  className={`w-2 h-8 cursor-pointer ${
                    item.value >= 99
                      ? "bg-green-500"
                      : item.value >= 97
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  title={`${item.value}%`}
                ></li>
              ))}
            </ul>
          </section>
        </article>
        <article className="flex flex-col gap-4">
          <section className="bg-[#141414] text-[#EEEEEE] p-4 rounded-2xl">
            <h3 className="font-semibold pb-2">Connect to server </h3>
            <span className="flex flex-col gap-4 ">
              {server.info.game.onSteam ? (
                <a
                  href={`steam://connect/${server.info.ip}:${server.info.port}`}
                  className="w-fit bg-sky-500 p-2 rounded-md cursor-pointer flex gap-2 hover:bg-gray-800"
                >
                  Join
                  <Image
                    src="/images/steam.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                <CopyButton copy={`${server.info.ip}:${server.info.port}`} />
              )}
            </span>
          </section>

          <section className="bg-[#141414] text-[#EEEEEE] p-4 rounded-2xl">
            <h3 className="font-semibold pb-2">links</h3>
            <div>
              <a href={server.info.website || "#"} className="flex gap-4 w-fit">
                <Globe /> <p> website.gg</p>
              </a>
            </div>
          </section>

          <DiscordWidget id={server.info.discordServerId} />
        </article>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import CopyButton from "./ui/CopyButton";

type props = {
  appId: number;
  serverId: string;
};

type steamResponse = {
  [appId: string]: {
    success: boolean;
    data: {
      name: string;
      short_description: string;
      header_image: string;
    };
  };
};

export default async function GameCard({
  appId,
  serverId,
  subIp,
  ip,
  port,
  password,
}: props) {
  const SteamStoreDetails = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appId}`,
  );

  if (!SteamStoreDetails.ok) {
    return (
      <section className="p-10 relative rounded-lg overflow-hidden w-full max-w-150">
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none z-0"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.70"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="relative z-10 flex flex-col">
          <h1 className="text-4xl font-bold">Steam</h1>
          <p>Failed to load data from api try agin later.</p>
        </div>
      </section>
    );
  }

  const res: steamResponse = await SteamStoreDetails.json();
  const data = res[appId];

  if (!data?.success) {
    return (
      <section className="p-10 relative rounded-lg overflow-hidden w-full max-w-150">
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none z-0"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.70"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="relative z-10 flex flex-col">
          <h1 className="text-4xl font-bold">Steam</h1>
          <p>
            Game with id <span className="text-purple-700">{appId} </span>
            not found
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col gap-4 rounded-lg overflow-hidden  w-full  max-w-150 ">
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none z-0"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.70"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="relative z-10 flex flex-col ">
        <Image
          src={data.data.header_image}
          alt={data.data.short_description}
          width={500}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex justify-between items-center gap-2 flex-wrap  p-4 ">
          {/*  <Link
            href={`server/${serverId}`}
            className="py-2 px-4 border-2 border-zinc-700 rounded-md text-white font-bold cursor-pointer transition-colors duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 hover:border-transparent"
          >
            connect
          </Link> */}

          <span className="flex flex-wrap gap-4 ">
            <a
              href={`steam://connect/${ip}:${port}`}
              className="w-fit bg-sky-500 p-2 rounded-md cursor-pointer flex gap-2 hover:bg-gray-800"
            >
              connect
              <Image
                src="/images/steam.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </a>

            <CopyButton copy={`${subIp}:${port}`} />
          </span>
        </div>
      </div>
    </section>
  );
}

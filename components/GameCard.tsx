import Image from "next/image";

type props = {
  appId: number;
  url: string;
  ip: string;
  port: number;
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

export default async function GameCard({ appId, url, ip, port }: props) {
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
          {url && (
            <a
              href={"https://" + url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border-2 border-zinc-700 rounded-md text-white font-bold cursor-pointer transition-colors duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 hover:border-transparent"
            >
              {url}
            </a>
          )}
          {ip && (
            <a
              href={"steam://connect/" + ip + ":" + port}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border-2 border-zinc-700 rounded-md text-white font-bold cursor-pointer transition-colors duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 hover:border-transparent"
            >
              {ip + ":" + port}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

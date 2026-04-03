import Image from "next/image";

type props = {
  url: string;
};

type discordResponse = {
  name: string;
  presence_count: number;
  instant_invite: string;
  members: {
    id: string;
    username: string;
    channel_id?: string;
  }[];
};

export default async function DiscordCard({ url }: props) {
  const discordApi = await fetch(url, { cache: "no-store" });

  if (!discordApi.ok) {
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
          <h1 className="text-4xl font-bold">Discord</h1>
          <p>Failed to load data from api try agin later.</p>
        </div>
      </section>
    );
  }

  const data: discordResponse = await discordApi.json();

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
      <div className="relative z-10 flex flex-col">
        <Image
          src="/images/discord-cover.jpg"
          alt="Discord Image"
          width={500}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex justify-between items-center flex-wrap gap-2 p-4">
          <span className="flex items-center gap-4 text-sm font-medium">
            <div className="px-3 py-2 flex gap-2 items-center border rounded-full border-zinc-700 bg-zinc-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {data.presence_count}&nbsp; Online
            </div>

            <div className="px-3 py-2 flex gap-2 items-center border rounded-full border-zinc-700 bg-zinc-800">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              {data.members?.filter((member) => member.channel_id).length ?? 0}
              &nbsp; Active
            </div>
          </span>

          {data.instant_invite && (
            <a
              href={data.instant_invite}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border-2 border-zinc-700 rounded-md text-white font-bold cursor-pointer transition-colors duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 hover:border-transparent"
            >
              {data.name}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

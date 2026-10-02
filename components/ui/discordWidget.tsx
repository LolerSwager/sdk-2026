import Image from "next/image";

type props = {
  id: string;
};

type discordResponse = {
  name: string;
  presence_count: number;
  instant_invite: string;
  members: {
    id: string;
    username: string;
    channel_id?: string;
    avatar_url: string;
  }[];
};

export default async function DiscordCard({ id }: props) {
  const discordApi = await fetch(
    `https://discord.com/api/guilds/${id}/widget.json`,
    { cache: "no-store" },
  );

  if (!discordApi.ok) {
    return (
      <section className="w-full min-w-70 aspect-square rounded-2xl overflow-hidden relative flex items-center justify-center p-8 ">
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
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-2xl font-bold">Discord</h1>
          <p className="text-sm text-gray-400">
            Failed to load data. Try again later.
          </p>
          <small>{id}</small>
        </div>
      </section>
    );
  }

  const data: discordResponse = await discordApi.json();

  const activeMembers =
    data.members?.filter((member) => member.avatar_url) ?? [];

  const activeCount =
    data.members?.filter((member) => member.channel_id).length ?? 0;

  return (
    /* <section className="group w-70 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#5865F2] to-indigo-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col justify-between h-full p-5">
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{data.name}</h3>

         
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            {data.presence_count} online
          </div>
        </div>

        
        <div className="flex items-center">
          <div className="flex -space-x-3">
            {activeMembers.slice(0, 8).map((member) => (
              <Image
                src={member.avatar_url}
                alt="Discord avatar"
                width={50}
                height={50}
                className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold"
                key={member.id}
              />
            ))}

            {activeMembers.length > 5 && (
              <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs">
                +{activeMembers.length - 5}
              </div>
            )}
          </div>
        </div>

     
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-white/80">
            <span>{activeMembers.length} active</span>
          </div>

          {data.instant_invite ? (
            <a
              href={data.instant_invite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20 backdrop-blur-sm text-sm font-medium"
            >
              Join Discord
            </a>
          ) : (
            <p className="w-full text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20 backdrop-blur-sm text-sm font-medium">
              config your discord server
            </p>
          )}
        </div>
      </div>
    </section> */

    <section className="w-full min-w-70 aspect-square rounded-2xl overflow-hidden bg-linear-to-r from-[#5865F2] to-indigo-500 text-white shadow-lg">
      <div className="flex flex-col justify-between h-full p-5">
        <h3 className="text-lg font-semibold leading-tight">{data.name}</h3>

        <div>
          <div className="flex gap-5">
            <p className="text-2xl font-bold">
              {data.presence_count}
              &nbsp; Online
            </p>
            <p className="text-2xl font-bold">
              {activeCount > 99 ? "100+" : activeCount}
              &nbsp; Active
            </p>
          </div>

          <div className="flex -space-x-3">
            {activeMembers.slice(0, 8).map((member) => (
              <Image
                src={member.avatar_url}
                alt="Discord avatar"
                width={50}
                height={50}
                className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold"
                key={member.id}
              />
            ))}
          </div>
        </div>

        {data.instant_invite ? (
          <a
            href={data.instant_invite}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20 backdrop-blur-sm text-sm font-medium"
          >
            Join Discord
          </a>
        ) : (
          <p className="w-full text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20 backdrop-blur-sm text-sm font-medium">
            config your discord server
          </p>
        )}
      </div>
    </section>
  );
}

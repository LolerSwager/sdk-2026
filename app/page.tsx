import DiscordCard from "@/components/DiscordCard";
import GameCard from "@/components/GameCard";

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center gap-8">
      <DiscordCard url="https://discord.com/api/guilds/219210401307557888/widget.json" />
      <GameCard
        appId={108600}
        serverId="1"
        subIp="pz.lolerswager.com"
        ip="147.185.221.231"
        port={40510}
      />
    </main>
  );
}

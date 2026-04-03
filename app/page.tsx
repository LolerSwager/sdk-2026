import DiscordCard from "@/components/DiscordCard";

export default async function Home() {
  return (
    <main className="p-4 flex flex-col items-center gap-8">
      <DiscordCard url="https://discord.com/api/guilds/219210401307557888/widget.json" />
    </main>
  );
}

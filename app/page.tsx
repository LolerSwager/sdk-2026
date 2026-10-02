import DiscordCard from "@/components/DiscordCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="site-main home-layout">
      <section
        className="home-announcement"
        aria-labelledby="announcement-title"
      >
        <Image
          src="/images/logo.svg"
          alt="LolerSwager logo"
          width={96}
          height={50}
          className="home-announcement__logo"
          priority
        />
        <p className="home-announcement__status">
          <span aria-hidden="true" /> SITE UPDATE
        </p>
        <p className="eyebrow">LOLERSWAGER COMMUNITY</p>
        <h1 id="announcement-title">
          New website
          <br />
          <span>in progress.</span>
        </h1>
        <p className="home-announcement__copy">
          We&apos;re building a new home for the community. Join us on Discord
          while we work.
        </p>
        <DiscordCard
          url="https://discord.com/api/guilds/219210401307557888/widget.json"
          inviteUrl="https://discord.com/invite/uaCRvZU"
        />
      </section>
    </main>
  );
}

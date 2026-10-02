import { ArrowUpRight, MessageCircle } from "lucide-react";

type DiscordCardProps = {
  url: string;
  inviteUrl: string;
};

type DiscordResponse = {
  name?: string;
  presence_count?: number;
  instant_invite?: string;
};

export default async function DiscordCard({
  url,
  inviteUrl,
}: DiscordCardProps) {
  let data: DiscordResponse | undefined;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (response.ok) data = await response.json();
  } catch {
    data = undefined;
  }

  const presenceCount = data?.presence_count;
  const onlineCount =
    typeof presenceCount === "number" && Number.isFinite(presenceCount)
      ? presenceCount
      : undefined;
  return (
    <div className="discord-action">
      <div className="discord-action__community">
        <MessageCircle aria-hidden="true" size={20} />
        <div>
          <span className="eyebrow">DISCORD COMMUNITY</span>
          <strong>{data?.name ?? "LolerSwager"}</strong>
        </div>
      </div>

      <span className="discord-action__online" aria-live="polite">
        <i aria-hidden="true" />
        {onlineCount === undefined ? "Join the conversation" : `${onlineCount} online`}
      </span>

      <a
        href={data?.instant_invite || inviteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="action-button action-button--primary"
      >
        Join Discord <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </div>
  );
}
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.STEAM_API_KEY;
  const steamId = "7656119XXXXXXXXXX"; 

  const res = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { day, month, year, hour, min, lat, lon, tzone } = await req.json();

  const url = "https://json.apireports.com/v1/horo-chart-image";
  const userId = process.env.ASTRO_API_USER_ID!;
  const apiKey = process.env.ASTRO_API_KEY!;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
      Authorization:
        "Basic " + Buffer.from(`${userId}:${apiKey}`).toString("base64"),
    },
    body: JSON.stringify({ day, month, year, hour, min, lat, lon, tzone }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}

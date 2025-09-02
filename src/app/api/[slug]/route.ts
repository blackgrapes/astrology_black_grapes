import { NextResponse } from "next/server";

export async function POST(request: Request, context: { params: Promise<Record<string, string>> }) {
  const _params = await context.params;
  const slug = _params.slug;

  const body = await request.json();

  const userId = process.env.ASTRO_API_USER_ID || "644620";
  const apiKey = process.env.ASTRO_API_KEY || "f07447ed6ee12259b5314545c128ab8471739f0d";
  const credentials = Buffer.from(`${userId}:${apiKey}`).toString("base64");

  const apiUrl = `https://json.astrologyapi.com/v1/${slug}`;

  try {
    const apiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
        "Accept-Language": "en",
      },
      body: JSON.stringify(body),
    });

    const data = await apiResponse.json();

    return NextResponse.json({ data });
  } catch (err) {
    console.error(`Error fetching ${slug} data:`, err);
    return NextResponse.json(
      { error: `Failed to fetch ${slug} data` },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request, context: { params: Promise<Record<string, string>> }) {
  const _params = await context.params;
  const slug = _params.slug;

  const body = await request.json();

  const userId = process.env.ASTRO_API_USER_ID || "985";
  const apiKey = process.env.ASTRO_API_KEY || "48674d952b9fc5223fb8483474c191cd";
  const credentials = Buffer.from(`${userId}:${apiKey}`).toString("base64");

  const apiUrl = `https://json.apireports.com/v1/${slug}`;

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

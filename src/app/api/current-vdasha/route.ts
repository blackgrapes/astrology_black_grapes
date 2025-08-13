// app/api/astro-details/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
console.log(body)
  const userId = process.env.ASTRO_API_USER_ID || '987';
  const apiKey = process.env.ASTRO_API_KEY || 'b8a14b9ec11a79fce2a3c7331b289981';
  console.log("User ID:", userId);
  console.log("API Key:", apiKey);
  const credentials = Buffer.from(`${userId}:${apiKey}`).toString('base64');
  console.log("Credentials:", credentials)

  try {
    const apiResponse = await fetch('https://json.apireports.com/v1/current_vdasha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
        'Accept-Language': 'en',
      },
      body: JSON.stringify(body),
    });
    console.log(apiResponse)
    const data = await apiResponse.json();
    console.log("API Response Data:", data);
    return NextResponse.json({ data });
  } catch (err) {
    console.error('Error fetching astro details:', err);
    return NextResponse.json({ error: 'Failed to fetch astro details' }, { status: 500 });
  }
}

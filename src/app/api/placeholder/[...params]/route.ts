import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> }
) {
  const resolvedParams = await params;
  const dimensions = resolvedParams.params[0] || "800/600";
  const [width, height] = dimensions.split("/").map(Number);

  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text") || "Placeholder";
  const bg = searchParams.get("bg") || "374151";
  const color = searchParams.get("color") || "ffffff";

  const svg = `
    <svg width="${width || 800}" height="${height || 600}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#${bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#${bg}dd;stop-opacity:1" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#${color}" stroke-width="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="600" fill="#${color}" text-anchor="middle" dy=".3em">${text.replace(/\+/g, " ")}</text>
      <rect x="10" y="10" width="60" height="30" rx="4" fill="#${color}" opacity="0.2"/>
      <circle cx="35" cy="25" r="8" fill="#${color}" opacity="0.4"/>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

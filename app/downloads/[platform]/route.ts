import { NextRequest, NextResponse } from "next/server";

import { getLauncherRelease } from "@/lib/launcher-release";

const platformLabels = {
  macos: "macOS Apple Silicon",
  windows: "Windows x64",
} as const;

type Platform = keyof typeof platformLabels;

const isPlatform = (value: string): value is Platform => value in platformLabels;

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  context: RouteContext<"/downloads/[platform]">,
) {
  const { platform } = await context.params;

  if (!isPlatform(platform)) {
    console.info(
      JSON.stringify({
        event: "download_redirect",
        outcome: "unknown_platform",
        platform,
        referer: request.headers.get("referer"),
        userAgent: request.headers.get("user-agent"),
        country: request.headers.get("x-vercel-ip-country"),
      }),
    );

    return new NextResponse("Unknown download platform.", { status: 404 });
  }

  const release = await getLauncherRelease();
  const asset = platform === "macos" ? release.mac : release.windows;
  const destination = asset?.downloadUrl ?? release.releaseUrl;
  const outcome = asset ? "redirect_asset" : "redirect_release";

  console.info(
    JSON.stringify({
      event: "download_redirect",
      outcome,
      platform,
      platformLabel: platformLabels[platform],
      releaseTag: release.tag,
      releaseSource: release.source,
      assetName: asset?.name ?? null,
      destination,
      referer: request.headers.get("referer"),
      userAgent: request.headers.get("user-agent"),
      country: request.headers.get("x-vercel-ip-country"),
    }),
  );

  return NextResponse.redirect(destination, 302);
}

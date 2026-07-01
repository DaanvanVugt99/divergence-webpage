import { siteConfig } from "@/content/site";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
  digest?: string;
  size?: number;
};

type GitHubRelease = {
  tag_name: string;
  name: string | null;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string | null;
  assets: GitHubReleaseAsset[];
};

type LauncherReleaseAsset = {
  name: string;
  downloadUrl: string;
  digest?: string;
  size?: number;
};

export type LauncherRelease = {
  tag: string;
  label: string;
  releaseUrl: string;
  isPrerelease: boolean;
  source: "github" | "fallback";
  mac: LauncherReleaseAsset;
  windows: LauncherReleaseAsset;
};

const fallbackRelease: LauncherRelease = {
  tag: "v0.1.0-alpha.1",
  label: "v0.1.0 alpha 1",
  releaseUrl:
    "https://github.com/DaanvanVugt99/divergence-launcher/releases/tag/v0.1.0-alpha.1",
  isPrerelease: true,
  source: "fallback",
  mac: {
    name: "Divergence.Launcher-darwin-arm64-0.1.0.zip",
    downloadUrl:
      "https://github.com/DaanvanVugt99/divergence-launcher/releases/download/v0.1.0-alpha.1/Divergence.Launcher-darwin-arm64-0.1.0.zip",
  },
  windows: {
    name: "Divergence.Launcher-win32-x64-0.1.0.zip",
    downloadUrl:
      "https://github.com/DaanvanVugt99/divergence-launcher/releases/download/v0.1.0-alpha.1/Divergence.Launcher-win32-x64-0.1.0.zip",
  },
};

const formatReleaseLabel = (release: GitHubRelease) =>
  release.name?.trim() ||
  release.tag_name.replace(/-alpha\.(\d+)$/i, " alpha $1").replace(/-/g, " ");

const findAsset = (release: GitHubRelease, pattern: RegExp) =>
  release.assets.find((asset) => pattern.test(asset.name));

const toLauncherRelease = (release: GitHubRelease): LauncherRelease | null => {
  const mac = findAsset(release, /darwin-arm64.*\.zip$/i);
  const windows = findAsset(release, /win32-x64.*\.zip$/i);

  if (!mac || !windows) {
    return null;
  }

  return {
    tag: release.tag_name,
    label: formatReleaseLabel(release),
    releaseUrl: release.html_url,
    isPrerelease: release.prerelease,
    source: "github",
    mac: {
      name: mac.name,
      downloadUrl: mac.browser_download_url,
      digest: mac.digest,
      size: mac.size,
    },
    windows: {
      name: windows.name,
      downloadUrl: windows.browser_download_url,
      digest: windows.digest,
      size: windows.size,
    },
  };
};

export async function getLauncherRelease(): Promise<LauncherRelease> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/DaanvanVugt99/divergence-launcher/releases",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 600 },
      },
    );

    if (!response.ok) {
      return fallbackRelease;
    }

    const releases = (await response.json()) as GitHubRelease[];
    const release = releases
      .filter((candidate) => !candidate.draft)
      .sort((a, b) => {
        const aTime = a.published_at ? Date.parse(a.published_at) : 0;
        const bTime = b.published_at ? Date.parse(b.published_at) : 0;

        return bTime - aTime;
      })
      .map(toLauncherRelease)
      .find((candidate): candidate is LauncherRelease => Boolean(candidate));

    return release ?? fallbackRelease;
  } catch {
    return fallbackRelease;
  }
}

export const launcherReleasesUrl = siteConfig.launcherReleasesUrl;

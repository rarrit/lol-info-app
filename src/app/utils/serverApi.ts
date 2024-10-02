import { RIOT_BASE_URL } from "../api/apiKey"

// 최신 버전
export const getLatestVersionUrl = async () => {
  const latestVersions = `${RIOT_BASE_URL}/api/versions.json`;
  const res = await fetch(latestVersions);
  const version: string[] = await res.json();
  const latestVersion = version[0];
  return latestVersion;
}
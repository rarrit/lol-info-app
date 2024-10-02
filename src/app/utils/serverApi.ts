import { RIOT_BASE_URL } from "../api/apiKey"
import { ChampionInfo } from "../types/Champion";

// 최신 버전
export const getLatestVersionUrl = async () => {
  const latestVersions = `${RIOT_BASE_URL}/api/versions.json`;
  const res = await fetch(latestVersions);
  const version: string[] = await res.json();
  const latestVersion = version[0];
  return latestVersion;
}


// 챔피언
export const getChampions = async () => {
  try {
    const latestVersion = await getLatestVersionUrl();
    const res = await fetch(`${RIOT_BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`, {
      next: {
        revalidate: 86400,
      }
    });
    const data = await res.json();
    const championList: ChampionInfo[] = Object.values(data.data); 
    return championList;
  } catch (error) {
    console.error('챔피언 데이터 가져오기 오류:', error);
    throw error; // 오류를 다시 던져 호출자에게 알림
  }
};
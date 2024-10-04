"use server";
// 목적 : 서버에서 실행될 수 있게 하는 함수를 만듬
// 라우터핸들러와 서버액션의 사용성에 대해서 주관적임, 직접 써보면서 

import { RIOT_API_KEY, RIOT_BASE_URL } from "../api/apiKey"
import { ChampionInfo } from "../types/Champion";
import { RotationType } from "../types/ChampionRotation";
import { ItemType } from "../types/Item";

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
    console.error("챔피언 데이터 가져오기 에러:", error);
    throw error; 
  }
};

// 챔피언 상세
export const getChampionDetail = async ( id : string ) => {
  try {
    const latestVersion = await getLatestVersionUrl();
    const res = await fetch(`${RIOT_BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`);
    const { data } = await res.json();
    return data;
  }catch (error) {
    console.error("챔피언 상세 데이터 가져오기 에러:", error);
    throw error; 
  }
}

// 아이템
export const getItems = async () => {
  try{
    const latestVersion = await getLatestVersionUrl();
    const res = await fetch(`${RIOT_BASE_URL}/cdn/${latestVersion}/data/ko_KR/item.json`);
    const data = await res.json();
    const itemList: ItemType[] = Object.values(data.data);
    return itemList;
  }catch(error){
    console.error("아이템 API 에러:", error);    
    throw error; 
  }
}

// 로테이션
export const getRotations = async () => {
  try{
    const res = await fetch(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${RIOT_API_KEY}`);
    const data: RotationType = await res.json();    
    return data;
  }catch(error){
    console.error("로테이션 데이터 가져오기 에러:", error);    
  }
}


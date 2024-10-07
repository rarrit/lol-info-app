import { getChampions } from './serverApi';
import { ChampionInfo } from '../types/Champion';

export const getChampionRotation = async () => {
  const champions = await getChampions();
  const response = await fetch('/api/rotation');
  const result = await response.json();
  const freeChampionIds = result.data.freeChampionIds;
  const rotation: ChampionInfo[] = Object.values(champions).filter((champion) =>
    freeChampionIds.includes(Number(champion.key))
  );

  return rotation;
};
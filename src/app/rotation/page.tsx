"use client";

import { useEffect, useState } from "react";
// import { getChampions, getRotations } from "../utils/serverApi";
import { ChampionInfo } from "../types/Champion";
import { getChampionRotation } from "../utils/riotApi";

const RotationPage = () => {
  const [rotationChampion, setRotationChampion] = useState<ChampionInfo[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const rotationsChampion = await getChampionRotation();

      // 필터링된 로테이션 챔피언 목록을 상태에 저장
      setRotationChampion(rotationsChampion);
    };

    fetchData();
  }, []);

  return (
    <div id="rotationWrap">
      <h1>로테이션 페이지</h1>

      {rotationChampion.length > 0 ? (
        <ul>
          {rotationChampion.map((champ) => (
            <li key={champ.key}>
              <h2>{champ.name}</h2>
              <p>{champ.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>로테이션 챔피언이 없습니다.</p>
      )}
    </div>
  );
};

export default RotationPage;

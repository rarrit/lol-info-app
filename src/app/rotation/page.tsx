"use client";

import { useEffect, useState } from "react";
// import { getChampions, getRotations } from "../utils/serverApi";
import { ChampionInfo } from "../types/Champion";
import { getChampionRotation } from "../utils/riotApi";
import Image from "next/image";
import { RIOT_BASE_URL } from "../api/apiKey";
import Link from "next/link";

const RotationPage = () => {
  const [rotationChampion, setRotationChampion] = useState<ChampionInfo[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); // 로딩 추가

  useEffect(() => {
    const fetchData = async () => {
      const rotationsChampion = await getChampionRotation();
      console.log(rotationsChampion);
      // 필터링된 로테이션 챔피언 목록을 상태에 저장
      setRotationChampion(rotationsChampion);
      setLoading(false); // 데이터 들어오면 로딩 없애줌
    };

    fetchData();
  }, []);

  

  return (

    <div id="championList" className="w-full bg-lol03 bg-fixed bg-center bg-no-repeat py-[60px] px-[15px]">
      <div className="inner w-full max-w-[1440px] m-auto">
        <h1 
          className="flex justify-center text-[60px] mt-[30px] mb-[40px] max-m:text-[30px]"
          style={{
            textShadow: ".3px .3px 7px rgb(241, 215, 40, 1)",
          }}
        >Rotation Champion</h1>

        { 
          loading ? (
            <div className="loading-ui fixed z-[9999]">
              <p className="bg-loading">쉿! 로테이션 데이터 받아오는중</p>
            </div>
          ) : rotationChampion.length > 0 ?(
            <ul className="list flex flex-wrap gap-[10px] w-full">
              {rotationChampion.map((champ) => (
                // <li key={champ.key}>
                //   <h2>{champ.name}</h2>
                //   <p>{champ.title}</p>
                // </li>

                <li key={champ.key} className="group relative w-[calc(25%-10px)] overflow-hidden max-n:w-[calc(33.333%-10px)] max-t:w-[calc(50%-10px)] max-m:w-[100%] rounded-[10px] shadow-custom">      
                  <div className="champion-list-image w-full py-[30%]">
                    {champ.image && (
                      <Image 
                        src={`${RIOT_BASE_URL}/cdn/img/champion/splash/${champ.id}_0.jpg`} 
                        className="w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
                        layout="fill"
                        alt={champ ? champ.name : "챔피언 이미지"}           
                      />
                    )}
                  </div>
                  <h2 className="absolute top-[5px] right-[5px] z-20 min-w-[120px] flex items-center justify-center p-[8px] font-medium bg-black bg-opacity-70 rounded-[10px] max-t:text-[14px]">{champ.name}</h2>              
                  <div className="info absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-0"></div>                  
                  <Link href={`/champions/${champ.id}`} className="absolute top-0 left-0 flex w-full h-full opacity-0 z-30">{champ.name} 상세페이지로 이동</Link>
                </li>

              ))}
            </ul>
          ) : (
            <p>로테이션 챔피언이 없습니다.</p>
          )
        }
      </div>
    </div>
  );
};

export default RotationPage;

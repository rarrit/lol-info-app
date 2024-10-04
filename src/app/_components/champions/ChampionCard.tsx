import { RIOT_BASE_URL } from "@/app/api/apiKey";
import { ChampionInfo } from "@/app/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: ChampionInfo; // champion prop을 정의
};

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  
  return (
    <div className="group relative w-[calc(25%-10px)] overflow-hidden max-n:w-[calc(33.333%-10px)] max-t:w-[calc(50%-10px)] max-m:w-[100%] rounded-[10px] shadow-custom">      
      <div className="champion-list-image w-full py-[30%]">
        {champion.image && (
          <Image 
            src={`${RIOT_BASE_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`} 
            className="w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
            layout="fill"
            alt={champion ? champion.name : "챔피언 이미지"}           
          />
        )}
      </div>
      <h2 className="absolute top-[5px] right-[5px] z-20 min-w-[120px] flex items-center justify-center p-[8px] font-medium bg-black bg-opacity-70 rounded-[10px]">{champion.name}</h2>              
      <div className="info absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-0"></div>                  
      <Link href={`/champions/${champion.id}`} className="absolute top-0 left-0 flex w-full h-full opacity-0 z-30">{champion.name} 상세페이지로 이동</Link>
    </div>
  );
};

export default ChampionCard;

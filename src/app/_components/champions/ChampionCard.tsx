import { RIOT_BASE_URL } from "@/app/api/apiKey";
import { ChampionInfo } from "@/app/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: ChampionInfo; // champion prop을 정의
};

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  
  return (
    <div>
      <h2>{champion.name}</h2>
      <p>{champion.title}</p>
      {champion.image && (
        <Image 
          src={`${RIOT_BASE_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`} 
          width={256}
          height={151}
          alt={champion ? champion.name : "챔피언 이미지"} 
        />
      )}
      <Link href={`/champions/${champion.id}`}>상세페이지</Link>
    </div>
  );
};

export default ChampionCard;

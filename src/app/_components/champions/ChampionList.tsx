
import { getChampions } from "@/app/utils/serverApi";
import ChampionCard from "./ChampionCard";

const ChampionList = async () => {
  const champions = await getChampions();

  
  return (
    <div id="championList" className="flex flex-wrap">
      {
        champions.map(champion => {
          return (
            <ChampionCard 
              key={champion.id} 
              champion={champion} // champion prop 전달
            />
          );
        })
      }
    </div>
  );
}

export default ChampionList;
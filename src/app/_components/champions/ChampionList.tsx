
import { getChampions } from "@/app/utils/serverApi";
import ChampionCard from "./ChampionCard";

const ChampionList = async () => {
  const champions = await getChampions();

  
  return (
    <div id="championList" className="w-full bg-lol02 bg-fixed bg-center bg-no-repeat py-[60px]">
      <div className="inner w-full max-w-[1440px] m-auto">
        <h1 
          className="flex justify-center text-[60px] mt-[30px] mb-[40px]"
          style={{
            textShadow: ".3px .3px 7px rgb(241, 215, 40, 1)",
          }}
        >ALL CHAMPIONS</h1>
        <div className="list flex flex-wrap gap-[10px] w-full">
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
      </div>      
    </div>
  );
}

export default ChampionList;
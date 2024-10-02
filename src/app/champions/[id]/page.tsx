import { ChampionInfo } from "@/app/types/Champion";
import { getChampions } from "@/app/utils/serverApi";


const ChampionsPage = async ({ params } : { params: { id: string }}) => {
  const data: ChampionInfo[] = await getChampions();
  
  const champion = data.find(champ => champ.id === params.id);
  
  if (!champion) {
    // 챔피언이 존재하지 않을 경우 처리
    return <div>챔피언을 찾을 수 없습니다.</div>;
  }
  
  return (
    <div id="championDetail">
      <div className="inner">
        <h1>
          {champion.name}
          <span>{champion.title}</span>
        </h1>        
        <p>{champion.blurb}</p>
      </div>
    </div>
  )
}

export default ChampionsPage

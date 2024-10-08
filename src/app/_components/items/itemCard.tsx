
import { RIOT_BASE_URL } from "@/app/api/apiKey";
import { ItemType } from "@/app/types/Item"
import { getLatestVersionUrl } from "@/app/utils/serverApi";
import ItemDesc from "./itemDesc";

type ItemCardProps = {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = async ({ item }) => {
  const latestVersion = await getLatestVersionUrl();

  return (
    <div className="relative w-[calc(20%-10px)] bg-[rgba(0,0,0,.4)] rounded-[10px] max-n:w-[calc(25%-10px)] max-t:w-[calc(33.333%-10px)] max-m:w-[calc(50%-10px)] max-sm:w-full">
      <div className="info flex flex-col items-center justify-center p-[20px]">
        {item.image && (
          <img 
            src={`${RIOT_BASE_URL}/cdn/${latestVersion}/img/item/${item.image.full ? item.image.full : item.image.sprite}`} 
            className="rounded-[10px]"
            width={64}
            height={64}
            alt={item ? item.name : "챔피언 이미지"} 
          />
        )}
        <strong className="mt-[10px] text-[rgba(245,79,79,1)] text-center max-m:text-[14px]">{item.name}</strong>
        <p><span className="text-[18px] font-bold max-m:text-[16px]">{item.gold.total}</span>원</p>        
        <ItemDesc description={item.description} />
      </div>
    </div>
  )
}

export default ItemCard

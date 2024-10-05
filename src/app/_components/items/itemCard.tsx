
import { RIOT_BASE_URL } from "@/app/api/apiKey";
import { ItemType } from "@/app/types/Item"
import { getLatestVersionUrl } from "@/app/utils/serverApi";
import Image from "next/image";
import ItemDesc from "./itemDesc";

type ItemCardProps = {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = async ({ item }) => {
  const latestVersion = await getLatestVersionUrl();
  console.log(item);
  return (
    <div className="relative w-[calc(20%-10px)] bg-[rgba(0,0,0,.4)] rounded-[10px]">      
      <div className="info flex flex-col items-center justify-center p-[20px]">
        {item.image && (
          <Image 
            src={`${RIOT_BASE_URL}/cdn/${latestVersion}/img/item/${item.image.full ? item.image.full : item.image.sprite}`} 
            className="rounded-[10px]"
            width={64}
            height={64}
            alt={item ? item.name : "챔피언 이미지"} 
          />
        )}
        <strong className="mt-[10px] text-[rgba(245,79,79,1)] text-center">{item.name}</strong>
        <p><span className="text-[18px] font-bold">{item.gold.total}</span>원</p>        
        <ItemDesc description={item.description} />
      </div>
    </div>
  )
}

export default ItemCard

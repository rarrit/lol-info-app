
import { RIOT_BASE_URL } from "@/app/api/apiKey";
import { ItemType } from "@/app/types/Item"
import { getLatestVersionUrl } from "@/app/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

type ItemCardProps = {
  item: ItemType;
}

const ItemCard: React.FC<ItemCardProps> = async ({ item }) => {
  const latestVersion = await getLatestVersionUrl();
  return (
    <div>
      <h2>{item.name}</h2>
      {item.image && (
        <Image 
          src={`${RIOT_BASE_URL}/cdn/${latestVersion}/img/item/${item.image.full ? item.image.full : item.image.sprite}`} 
          width={64}
          height={64}
          alt={item ? item.name : "챔피언 이미지"} 
        />
      )}
      <Link href={`/items/${item.name}`}>상세페이지</Link>
    </div>
  )
}

export default ItemCard

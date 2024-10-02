
import { getItems } from "@/app/utils/serverApi";
import ItemCard from "./itemCard";


const ItemList = async () => {
  const items = await getItems();  

  if(!items) return <div>아이템이 없습니다.</div>

  return (
    <div id="itemList" className="flex flex-wrap">
      {
        items.map(item => {
          return (
            <ItemCard 
              key={item.name}
              item={item}
            />
          )
        })
      }
    </div>
  )
}

export default ItemList

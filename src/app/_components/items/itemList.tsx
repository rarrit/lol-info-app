
import { getItems } from "@/app/utils/serverApi";
import ItemCard from "./itemCard";


const ItemList = async () => {
  const items = await getItems();  

  if(!items) return <div>아이템이 없습니다.</div>

  return (
    <div id="itemList" className="w-full bg-lol04 bg-fixed bg-center bg-no-repeat py-[60px]">
      <div className="inner w-full max-w-[1440px] m-auto">
        <h1 
          className="flex justify-center text-[60px] mt-[30px] mb-[40px]"
          style={{
            textShadow: ".3px .3px 7px rgb(241, 215, 40, 1)",
          }}
        >ALL ITEM</h1>
        <div className="list flex flex-wrap gap-[10px] w-full">
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
      </div>      
    </div>
  )
}

export default ItemList

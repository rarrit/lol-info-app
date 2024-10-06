import ItemList from "@/app/_components/items/itemList"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
  title: 'LOL INFO APP - 아이템 리스트 페이지',
  description: '리그오브레전드 아이템 리스트 페이지입니다.',
};


const ItemListPage = () => <Suspense fallback={<Loading/>}><ItemList/></Suspense>

export default ItemListPage

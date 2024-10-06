import ItemList from "@/app/_components/items/itemList"
import { Suspense } from "react"
import Loading from "./\bloading"


const ItemListPage = () => <Suspense fallback={<Loading/>}><ItemList/></Suspense>

export default ItemListPage

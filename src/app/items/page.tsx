import ItemList from "@/app/_components/items/itemList"
import { Suspense } from "react"
import Loading from "./loading"


const ItemListPage = () => <Suspense fallback={<Loading/>}><ItemList/></Suspense>

export default ItemListPage

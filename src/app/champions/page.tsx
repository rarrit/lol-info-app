import ChampionList from "@/app/_components/champions/ChampionList"
import { Suspense } from "react"
import Loading from "./loading"


const ChampionPage = async () => <Suspense fallback={<Loading/>}><ChampionList/></Suspense>

export default ChampionPage

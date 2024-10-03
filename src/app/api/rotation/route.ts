// route handler 

import { RotationType } from "@/app/types/ChampionRotation";
import { RIOT_API_KEY } from "../apiKey";


export async function GET(){ // eslint-disable-line no-unused-vars
  const res = await fetch(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': RIOT_API_KEY as string
    }
  });
  const data: RotationType = await res.json();    
  
  return Response.json({ data });
}

export interface ChampionThumb {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ChampionInfo {
  id: string;
  name: string;
  title: string;
  blurb: string;
  tags?: string[];
  image: ChampionThumb;
}
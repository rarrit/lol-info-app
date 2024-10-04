
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
  key: string;
  name: string;
  title: string;
  blurb: string;
  tags?: string[];
  image: ChampionThumb;
}

export interface CampionDetailImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ChampionDetailSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: CampionDetailImage;
  skins: ChampionDetailSkin;
  lore: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: [
    {
      id: string;
      name: string;
      description: string;
      cooldownBurn: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
    },
  ];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    }
  };
}
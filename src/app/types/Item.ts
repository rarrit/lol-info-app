export interface ItemType {
  name: string;
  description: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
  };
  gold: {
    total: number;
  };

}
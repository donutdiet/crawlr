export type Bar = {
  id: number;
  name: string;
  address: string;
  zip: number;
  vibes: string[];
  price: string;
  image: string;
  latitude: number;
  longitude: number;
};

export type BarListProps = {
  bars: Bar[];
};

export type BarItemProps = {
  bar: Bar;
};

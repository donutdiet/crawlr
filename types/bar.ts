export type Bar = {
  name: string;
  address: string;
  zip: number;
  vibes: string[];
  price: string;
  image: string;
};

export type BarListProps = {
  bars: Bar[];
};

export type BarItemProps = {
  bar: Bar;
};

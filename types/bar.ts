export type Bar = {
  id: number;
  name: string;
  address: string;
  vibes: string[];
  price: string;
  image: string | null;
  latitude: number;
  longitude: number;
};

export type BarMapProps = {
  bars: Bar[];
  onMarkerSelected: (bar: Bar | null) => void;
};

export type BarItemProps = {
  bar: Bar;
};

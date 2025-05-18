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

export type BarMapProps = {
  bars: Bar[];
  onMarkerSelected: (bar: Bar | null) => void;
};

export type BarItemProps = {
  bar: Bar;
};

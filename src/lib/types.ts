export type Monastery = {
  id: string;
  name: string;
  description: string;
  history: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  streetViewLink?: string;
  visitingInfo: {
    timings: string;
    entryFee: string;
    routes: string;
  };
  imagePlaceholderId: string;
};

export type Event = {
  id: string;
  title: string;
  monasteryId: string;
  monasteryName: string;
  description: string;
  date: string;
  bookingLink?: string;
  imagePlaceholderId: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
};

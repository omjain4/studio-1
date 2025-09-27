import type { Monastery, Event, User } from './types';

export const monasteries: Monastery[] = [
  {
    id: 'rumtek-monastery',
    name: 'Rumtek Monastery',
    description: 'A sprawling and magnificent monastery, the seat of the Karmapa Lama.',
    history: 'Originally built in the mid-18th century, Rumtek Monastery was rebuilt in the 1960s by the 16th Karmapa. It serves as the main seat of the Karma Kagyu lineage outside of Tibet.',
    coordinates: { lat: 27.2913, lng: 88.5665 },
    images: ['monastery-1', 'monastery-2', 'monastery-3'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1626876939883!6m8!1m7!1sCAoSLEFGMVFpcE9ON2hfLVFTSkIyX0VwS29tX2p5RldxZlVwR0lYQ0lMS3lxbGtv!2e0!3e11!4b1!8m2!3d27.2913!4d88.5665',
    visitingInfo: {
      timings: '10:00 AM - 5:00 PM',
      entryFee: '₹10 per person',
      routes: 'Located 24 km from Gangtok. Taxis are readily available.'
    },
    imagePlaceholderId: 'monastery-1',
  },
  {
    id: 'pemayangtse-monastery',
    name: 'Pemayangtse Monastery',
    description: 'One of the oldest and most important monasteries in Sikkim.',
    history: 'Founded in 1705 by Lama Lhatsun Chempo, Pemayangtse Monastery is part of the Nyingma order of Tibetan Buddhism. Its name means "Perfect Sublime Lotus".',
    coordinates: { lat: 27.3005, lng: 88.2536 },
    images: ['monastery-2', 'monastery-4'],
    visitingInfo: {
      timings: '9:00 AM - 6:00 PM',
      entryFee: '₹20 per person',
      routes: 'Near Pelling, about 110 km from Gangtok.'
    },
    imagePlaceholderId: 'monastery-2',
  },
  {
    id: 'tashiding-monastery',
    name: 'Tashiding Monastery',
    description: 'Considered the most sacred and holy monastery in Sikkim.',
    history: 'Founded in 1641 by Ngadak Sempa Chempo Phunshok Rigzing, it belongs to the Nyingma sect. It is believed that just seeing the monastery cleanses all sins.',
    coordinates: { lat: 27.2345, lng: 88.2861 },
    images: ['monastery-3', 'monastery-1'],
    visitingInfo: {
      timings: '7:00 AM - 7:00 PM',
      entryFee: 'Free entry',
      routes: 'Located on a hilltop between two rivers, about 40km from Pelling.'
    },
    imagePlaceholderId: 'monastery-3',
  },
  {
    id: 'enchey-monastery',
    name: 'Enchey Monastery',
    description: 'An important seat of the Nyingma order, with a history of over 200 years.',
    history: 'The monastery was established in 1909 on a site blessed by the tantric master Lama Druptob Karpo. "Enchey" means "the solitary temple".',
    coordinates: { lat: 27.3425, lng: 88.6212 },
    images: ['monastery-4', 'monastery-2'],
    visitingInfo: {
      timings: '6:00 AM - 4:00 PM',
      entryFee: 'Free entry',
      routes: 'Located on a ridge above Gangtok, easily accessible from the city center.'
    },
    imagePlaceholderId: 'monastery-4',
  }
];

export const events: Event[] = [
  {
    id: 'saga-dawa',
    title: 'Saga Dawa',
    monasteryId: 'rumtek-monastery',
    monasteryName: 'Rumtek Monastery',
    description: 'A major Buddhist festival celebrating the birth, enlightenment, and death of Lord Buddha. A colorful procession of monks carrying the holy books is a major highlight.',
    date: 'June 5, 2024',
    bookingLink: '#',
    imagePlaceholderId: 'event-1',
  },
  {
    id: 'losar-festival',
    title: 'Losar Festival',
    monasteryId: 'pemayangtse-monastery',
    monasteryName: 'Pemayangtse Monastery',
    description: 'The Tibetan New Year, marked by vibrant cham dances (mask dances) depicting the victory of good over evil. A time of great celebration and feasting.',
    date: 'February 10-12, 2025',
    imagePlaceholderId: 'event-2',
  },
  {
    id: 'bumchu-festival',
    title: 'Bumchu Festival',
    monasteryId: 'tashiding-monastery',
    monasteryName: 'Tashiding Monastery',
    description: 'A unique holy water festival where a sacred pot of water is opened to predict the future of the state for the coming year. Attracts devotees from all over.',
    date: 'March 1, 2025',
    bookingLink: '#',
    imagePlaceholderId: 'event-1'
  }
];

export const users: User[] = [
    { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin', createdAt: '2023-01-15T10:00:00Z' },
    { id: '2', name: 'Regular User', email: 'user@example.com', role: 'user', createdAt: '2023-02-20T14:30:00Z' },
    { id: '3', name: 'Tenzin Wangmo', email: 'tenzin@example.com', role: 'user', createdAt: '2023-03-10T09:00:00Z' },
    { id: '4', name: 'Pema Dorjee', email: 'pema@example.com', role: 'user', createdAt: '2023-04-05T18:00:00Z' },
];

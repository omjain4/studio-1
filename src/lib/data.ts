import type { Monastery, Event, User } from './types';

export const monasteries: Monastery[] = [
  {
    id: 'rumtek-monastery',
    name: 'Rumtek Monastery',
    description: 'A sprawling and magnificent monastery, the seat of the Karmapa Lama.',
    history: 'Originally built in the mid-18th century, Rumtek Monastery was rebuilt in the 1960s by the 16th Karmapa. It serves as the main seat of the Karma Kagyu lineage outside of Tibet. The monastery is a vibrant center for Buddhist study and meditation, featuring a golden stupa containing the relics of the 16th Karmapa.',
    coordinates: { lat: 27.2913, lng: 88.5665 },
    images: ['monastery-1', 'monastery-2', 'monastery-3'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1718892589531!6m8!1m7!1sCAoSLEFGMVFpcE9ON2hfLVFTSkIyX0VwS29tX2p5RldxZlVwR0lYQ0lMS3lxbGtv!2e0!3e11!4b1!8m2!3d27.2912637!4d88.5665448',
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
    history: 'Founded in 1705 by Lama Lhatsun Chempo, Pemayangtse Monastery is part of the Nyingma order of Tibetan Buddhism. Its name means "Perfect Sublime Lotus". The monastery houses a remarkable seven-tiered wooden model of the celestial palace of Guru Rinpoche, known as Zangdok Palri.',
    coordinates: { lat: 27.3005, lng: 88.2536 },
    images: ['monastery-2', 'monastery-4'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1716901831885!6m8!1m7!1sCAoSLEFGMVFpcE9sLUlQVU9sXzZlX09iV2hfNlZ0ZklWN29wZDR5VnFLSnRObVNL!2e0!3e11!4b1!8m2!3d27.3004523!4d88.2536292',
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
    history: 'Founded in 1641 by Ngadak Sempa Chempo Phunshok Rigzing, it belongs to the Nyingma sect. It is believed that a single glimpse of the monastery can cleanse one of all sins. The sacred "Thongwa Rangdrol" chorten on the premises is opened to the public once a year during the Bumchu festival.',
    coordinates: { lat: 27.2345, lng: 88.2861 },
    images: ['monastery-3', 'monastery-1'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1716901886880!6m8!1m7!1sCAoSLEFGMVFpcE1YSVlXb3hUYjhZdHpfalN3X1VIbzRtbE5tX1ZKaG5xUjR3QkZJ!2e0!3e11!4b1!8m2!3d27.2345!4d88.2861',
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
    history: 'The monastery was established in 1909 on a site blessed by the tantric master Lama Druptob Karpo. "Enchey" means "the solitary temple". It is believed that the protecting deities of the monastery are Khangchendzonga and Yabdean.',
    coordinates: { lat: 27.3425, lng: 88.6212 },
    images: ['monastery-4', 'monastery-2'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1716901930776!6m8!1m7!1sCAoSLEFGMVFpcE5UclZzZ0VqT3B0eDRpdm5RNlJ0bERrU055aU9zZ1JtV1hYVFRD!2e0!3e11!4b1!8m2!3d27.3425!4d88.6212',
    visitingInfo: {
      timings: '6:00 AM - 4:00 PM',
      entryFee: 'Free entry',
      routes: 'Located on a ridge above Gangtok, easily accessible from the city center.'
    },
    imagePlaceholderId: 'monastery-4',
  },
  {
    id: 'ralang-monastery',
    name: 'Ralang Monastery',
    description: 'A major monastery of the Kagyu sect, known for its impressive collection of paintings.',
    history: 'Built in the early 18th century, Ralang Monastery was established following the pilgrimage of the fourth Chogyal to Tibet. It is one of the most important monasteries of the Kagyu sect in Sikkim, famed for its annual Pang Lhabsol festival and the Mahakala dance.',
    coordinates: { lat: 27.3075, lng: 88.3892 },
    images: ['monastery-5', 'monastery-1'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1718903331644!6m8!1m7!1sCAoSLEFGMVFpcE5qV0x4N2hfYmFfTGNwVWpCbkx6TDhfR3J1bWlZWFpSWHpXNlI0!2e0!3e11!4b1!8m2!3d27.3075!4d88.3892',
    visitingInfo: {
      timings: '8:00 AM - 5:00 PM',
      entryFee: 'Free entry',
      routes: 'Located near Ravangla, about 13 km from the town.'
    },
    imagePlaceholderId: 'monastery-5',
  },
  {
    id: 'dubdi-monastery',
    name: 'Dubdi Monastery',
    description: 'Known as the oldest monastery in Sikkim, established in 1701.',
    history: 'Also known as the "Hermit\'s Cell", Dubdi Monastery was founded by Lhatsun Namkha Jigme. It is central to the history of Sikkim, being the first monastery established after the consecration of the first Chogyal. It\'s a bit of a hike to reach, adding to its serene and secluded charm.',
    coordinates: { lat: 27.3621, lng: 88.2198 },
    images: ['monastery-6', 'monastery-2'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1718903422619!6m8!1m7!1sCAoSLEFGMVFpcE5vRDRkMUx2NnFmOEp2Y18xNl9IUUFMNnB4dF9vTDBsUXBfU1VE!2e0!3e11!4b1!8m2!3d27.3620973!4d88.2197821',
    visitingInfo: {
      timings: '8:00 AM - 4:00 PM',
      entryFee: '₹20 per person',
      routes: 'Located near Yuksom, requires a 3 km uphill walk.'
    },
    imagePlaceholderId: 'monastery-6',
  },
  {
    id: 'phodong-monastery',
    name: 'Phodong Monastery',
    description: 'One of the six most important monasteries of Sikkim, housing rare murals.',
    history: 'Founded in the early 18th century by the Chogyal Gyurmed Namgyal, Phodong Monastery belongs to the Kagyupa Sect. It was rebuilt in the 20th century but preserves its original style. The monastery is known for its beautiful murals and religious paintings.',
    coordinates: { lat: 27.4646, lng: 88.6015 },
    images: ['monastery-1', 'monastery-3'],
    streetViewLink: 'https://www.google.com/maps/embed?pb=!4v1718903517172!6m8!1m7!1sCAoSLEFGMVFpcE16aVZyNnJvNFljOHd2c3NlSDZJcUJhOXhyY2xLc3V3Z0lWVGhP!2e0!3e11!4b1!8m2!3d27.4645719!4d88.601525',
    visitingInfo: {
      timings: '8:00 AM - 5:00 PM',
      entryFee: 'Free entry',
      routes: 'About 38 km from Gangtok in North Sikkim.'
    },
    imagePlaceholderId: 'monastery-2',
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

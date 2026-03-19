export type AttractionType = 'heritage' | 'food' | 'hotel';

export interface Attraction {
  id: string;
  name: string;
  type: AttractionType;
  lat: number;
  lng: number;
  description: string;
  history?: string;
  hours?: string;
  rating?: number;
  address?: string;
}

export const LAHORE_CENTER: [number, number] = [31.5204, 74.3587];
export const LAHORE_ZOOM = 12;

// Simplified Lahore boundary polygon (approximate)
export const LAHORE_BOUNDARY: [number, number][] = [
  [31.6340, 74.2050],
  [31.6350, 74.2800],
  [31.6200, 74.3600],
  [31.5900, 74.4200],
  [31.5500, 74.4500],
  [31.5100, 74.4600],
  [31.4600, 74.4400],
  [31.4300, 74.3900],
  [31.4200, 74.3200],
  [31.4300, 74.2500],
  [31.4600, 74.2000],
  [31.5000, 74.1800],
  [31.5500, 74.1750],
  [31.5900, 74.1800],
  [31.6340, 74.2050],
];

export const attractions: Attraction[] = [
  // Heritage Sites
  {
    id: 'badshahi-mosque',
    name: 'Badshahi Mosque',
    type: 'heritage',
    lat: 31.5882,
    lng: 74.3105,
    description: 'One of the largest mosques in the world, an iconic Mughal-era masterpiece.',
    history: 'Built in 1673 by Emperor Aurangzeb, this red sandstone mosque can hold 100,000 worshippers. It stands as a testament to Mughal architectural grandeur with its three marble domes and four towering minarets.',
    hours: '08:00 – 20:00',
    rating: 4.8,
    address: 'Walled City, Lahore',
  },
  {
    id: 'lahore-fort',
    name: 'Lahore Fort (Shahi Qila)',
    type: 'heritage',
    lat: 31.5880,
    lng: 74.3153,
    description: 'A UNESCO World Heritage Site spanning 20 hectares of Mughal splendor.',
    history: 'Dating back to antiquity and rebuilt by Mughal Emperor Akbar in 1566, the fort contains Sheesh Mahal (Palace of Mirrors), Naulakha Pavilion, and the Alamgiri Gate. It served as the seat of Mughal power.',
    hours: '08:30 – 17:00',
    rating: 4.7,
    address: 'Fort Road, Walled City',
  },
  {
    id: 'shalimar-gardens',
    name: 'Shalimar Gardens',
    type: 'heritage',
    lat: 31.5858,
    lng: 74.3810,
    description: 'A UNESCO World Heritage Mughal garden complex with 410 fountains.',
    history: 'Constructed in 1641 by Emperor Shah Jahan, the gardens feature three descending terraces, intricate water channels, and over 410 fountains. They represent the pinnacle of Mughal garden design.',
    hours: '09:00 – 17:00',
    rating: 4.5,
    address: 'Grand Trunk Road, Lahore',
  },
  {
    id: 'minar-e-pakistan',
    name: 'Minar-e-Pakistan',
    type: 'heritage',
    lat: 31.5925,
    lng: 74.3095,
    description: 'A national monument marking the site of the Lahore Resolution of 1940.',
    history: 'Built between 1960-1968, this 60-meter tower commemorates the Pakistan Resolution passed on March 23, 1940. It blends Mughal and modern architecture with its flower-shaped base.',
    hours: '09:00 – 21:00',
    rating: 4.4,
    address: 'Iqbal Park, Lahore',
  },
  {
    id: 'wazir-khan-mosque',
    name: 'Wazir Khan Mosque',
    type: 'heritage',
    lat: 31.5829,
    lng: 74.3220,
    description: 'Known for its stunning tile work (kashi-kari) and Mughal-era frescoes.',
    history: 'Built in 1634-1635 during Shah Jahan\'s reign by Wazir Khan, this mosque is celebrated as the most ornamentally decorated Mughal-era mosque with breathtaking faience tile work.',
    hours: '05:00 – 21:00',
    rating: 4.6,
    address: 'Dabbi Bazaar, Walled City',
  },
  {
    id: 'lahore-museum',
    name: 'Lahore Museum',
    type: 'heritage',
    lat: 31.5685,
    lng: 74.3100,
    description: 'The largest museum in Pakistan with artifacts spanning 5,000 years.',
    history: 'Established in 1865, it houses the famous Fasting Siddhartha sculpture, Gandhara art, Mughal miniature paintings, and a vast collection of coins, manuscripts, and textiles.',
    hours: '09:00 – 17:00 (Closed Wednesdays)',
    rating: 4.3,
    address: 'The Mall Road, Lahore',
  },
  {
    id: 'anarkali-tomb',
    name: 'Tomb of Anarkali',
    type: 'heritage',
    lat: 31.5620,
    lng: 74.3180,
    description: 'The tomb of the legendary Mughal courtesan Anarkali.',
    history: 'Built by Emperor Jahangir in 1615, this octagonal tomb contains the marble sarcophagus of Nadira Begum (Anarkali). It now houses the Punjab Archives.',
    hours: '09:00 – 16:00',
    rating: 4.1,
    address: 'Anarkali Bazaar, Lahore',
  },
  {
    id: 'data-darbar',
    name: 'Data Darbar',
    type: 'heritage',
    lat: 31.5770,
    lng: 74.3150,
    description: 'The largest Sufi shrine in South Asia, dedicated to Data Ganj Bakhsh.',
    history: 'This shrine honors Abul Hassan Ali Hujwiri (1009-1072 CE), one of the earliest Sufi saints in South Asia. It draws millions of devotees annually.',
    hours: 'Open 24 hours',
    rating: 4.5,
    address: 'Data Nagar, Lahore',
  },

  // Restaurants (Old Lahore / Food Street area)
  {
    id: 'haveli-restaurant',
    name: 'Haveli Restaurant',
    type: 'food',
    lat: 31.5870,
    lng: 74.3108,
    description: 'Rooftop dining with iconic views of Badshahi Mosque and Lahore Fort.',
    hours: '12:00 – 00:00',
    rating: 4.4,
    address: 'Food Street, Fort Road',
  },
  {
    id: 'cuckoo-den',
    name: "Cuckoo's Den",
    type: 'food',
    lat: 31.5865,
    lng: 74.3112,
    description: 'Traditional Lahori cuisine in a heritage building overlooking the Walled City.',
    hours: '12:00 – 23:30',
    rating: 4.3,
    address: 'Food Street, Fort Road',
  },
  {
    id: 'andaaz-restaurant',
    name: 'Andaaz Restaurant',
    type: 'food',
    lat: 31.5868,
    lng: 74.3115,
    description: 'Multi-level dining with live music and stunning rooftop city views.',
    hours: '13:00 – 01:00',
    rating: 4.2,
    address: 'Food Street, Fort Road',
  },
  {
    id: 'butt-karahi',
    name: 'Butt Karahi Tikka',
    type: 'food',
    lat: 31.5540,
    lng: 74.3440,
    description: 'Famous for its legendary chicken karahi, a Lahore culinary institution.',
    hours: '12:00 – 02:00',
    rating: 4.6,
    address: 'Lakshmi Chowk, Lahore',
  },
  {
    id: 'phajja-siri-paye',
    name: 'Fazal-e-Haq Siri Paye',
    type: 'food',
    lat: 31.5555,
    lng: 74.3410,
    description: 'Iconic breakfast spot serving siri paye (slow-cooked trotters) since 1942.',
    hours: '05:00 – 14:00',
    rating: 4.5,
    address: 'Lakshmi Chowk, Lahore',
  },
  {
    id: 'salt-n-pepper',
    name: "Salt'n Pepper Village",
    type: 'food',
    lat: 31.5150,
    lng: 74.3420,
    description: 'Upscale Pakistani cuisine in a lush garden setting.',
    hours: '12:00 – 00:00',
    rating: 4.3,
    address: 'MM Alam Road, Gulberg',
  },

  // Hotels
  {
    id: 'pearl-continental',
    name: 'Pearl Continental Hotel',
    type: 'hotel',
    lat: 31.5590,
    lng: 74.3350,
    description: 'Five-star luxury hotel, one of Lahore\'s most prestigious accommodations.',
    hours: 'Check-in: 14:00 / Check-out: 12:00',
    rating: 4.5,
    address: 'Shahrah-e-Quaid-e-Azam, The Mall',
  },
  {
    id: 'avari-hotel',
    name: 'Avari Hotel Lahore',
    type: 'hotel',
    lat: 31.5550,
    lng: 74.3380,
    description: 'Landmark 5-star hotel with panoramic city views and world-class dining.',
    hours: 'Check-in: 15:00 / Check-out: 12:00',
    rating: 4.4,
    address: '87 Shahrah-e-Quaid-e-Azam',
  },
  {
    id: 'nishat-hotel',
    name: 'Nishat Hotel',
    type: 'hotel',
    lat: 31.5180,
    lng: 74.3490,
    description: 'Modern luxury hotel located in the heart of Gulberg business district.',
    hours: 'Check-in: 14:00 / Check-out: 12:00',
    rating: 4.3,
    address: 'Gulberg III, Lahore',
  },
  {
    id: 'luxus-grand',
    name: 'Luxus Grand Hotel',
    type: 'hotel',
    lat: 31.5200,
    lng: 74.3460,
    description: 'Contemporary hotel offering modern amenities in Gulberg.',
    hours: 'Check-in: 14:00 / Check-out: 12:00',
    rating: 4.1,
    address: '4 Egerton Road, Lahore',
  },
  {
    id: 'falettis-hotel',
    name: "Faletti's Hotel",
    type: 'hotel',
    lat: 31.5570,
    lng: 74.3280,
    description: 'One of the oldest hotels in Lahore, established during the British Raj era.',
    history: 'Founded in 1880, this colonial-era hotel has hosted dignitaries including Muhammad Ali Jinnah. It blends Victorian architecture with modern comforts.',
    hours: 'Check-in: 14:00 / Check-out: 11:00',
    rating: 4.0,
    address: 'Egerton Road, Lahore',
  },
];

export const typeLabels: Record<AttractionType, string> = {
  heritage: 'Heritage',
  food: 'Restaurants',
  hotel: 'Hotels',
};

export const typeColors: Record<AttractionType, string> = {
  heritage: '#D97706',
  food: '#059669',
  hotel: '#4F46E5',
};

// ============================================================
// SITE CONFIGURATION — Replace placeholder data here
// ============================================================

export const BRAND = {
  name: 'Raigad House',
  tagline: 'Live. Move. Connect.',
  phone: '+91 72184 42254',
  phone2: '+91 98347 54427',
  whatsapp: '917218442254',
  whatsapp2: '919834754427',
  email: 'raigadhouse@gmail.com',
  address: 'Raigad House PG, Near Alard College, Hinjewadi Phase 1, Marunji, Pune 411057',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.22074317934215!2d73.7234538261268!3d18.60822825127109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb004de0ab1f%3A0x5e3b5cfb7a7bfda2!2sRAIGAD%20HOUSE%20PG!5e0!3m2!1sen!2sin!4v1790832568135!5m2!1sen!2sin',
  mapLink: 'https://maps.app.goo.gl/2GfsGSAjyGYmtVFw7',
};

export const ROOMS = [
  {
    id: 'single',
    type: 'Single',
    tagline: 'Your own space.',
    price: '₹12,999',
    deposit: '₹10,000',
    features: ['Private Room', 'Single Bed', 'Wardrobe', 'Study Table', 'Wi-Fi', 'Attached Bathroom',],
    image: '/images/master_bedroom.jpeg',
    popular: false,
    color: '#2563EB',
  },
  {
    id: 'double',
    type: 'Double',
    tagline: 'Share the experience.',
    price: '₹7,499',
    deposit: '₹5,000',
    features: ['2 Beds', 'Wardrobe', 'Study Area', 'Wi-Fi', 'Shared Bathroom',],
    image: '/images/bedroom.jpeg',
    popular: true,
    color: '#FF6B00',
  },
  {
    id: 'triple',
    type: 'Triple',
    tagline: 'More people. More energy.',
    price: '₹6,999',
    deposit: '₹5,000',
    features: ['3 Beds', 'Storage', 'Study Area', 'Wi-Fi', 'Shared Bathroom'],
    image: '/images/gallery_bedroom.jpeg',
    popular: false,
    color: '#7C3AED',
  },
];

export const AMENITIES = {
  Room: [
    { icon: '🛏️', label: 'Bed & Mattress' },
    { icon: '🚪', label: 'Wardrobe' },
    { icon: '📚', label: 'Study Table & Chair' },
    { icon: '🚿', label: 'Attached Bathroom' },
  ],
  Tech: [
    { icon: '📶', label: '400 Mbps Wi-Fi' },
    { icon: '📺', label: 'Smart TV' },
    { icon: '🔌', label: 'Charging Points' },
    { icon: '🔑', label: 'Smart Access' },
  ],
  Safety: [
    { icon: '📹', label: 'CCTV Surveillance' },
    { icon: '💂', label: '24/7 Security' },
    { icon: '🔥', label: 'Fire Safety' },
    { icon: '🆘', label: 'Emergency Support' },
  ],
  
};

export const FAQS = [
  { q: 'Is Raigad House a co-ed PG?', a: 'Yes! Raigad House is a co-ed PG, welcoming both boys and girls. We have separate floors for male and female residents with shared common areas like the lounge, dining, and study zones.' },
  { q: 'Is it safe for girls?', a: 'Absolutely. We have 24/7 CCTV surveillance, biometric entry, dedicated female floor, and a strict visitor policy to ensure complete safety and comfort for all female residents.' },
  { q: 'Are boys and girls on separate floors?', a: 'Yes. Male and female residents are accommodated on separate floors. Common areas like the dining hall, lounge, and study room are shared during designated hours.' },
  { q: 'What is included in the rent?', a: 'Rent includes furnished room, Wi-Fi, housekeeping, RO water, and common area access. Food and electricity are optional add-ons.' },
  { q: 'Is the deposit refundable?', a: 'Yes, the security deposit is fully refundable within 7 working days after vacating, subject to no damages.' },
  { q: 'Are meals available?', a: 'Yes, we offer optional meal plans (breakfast, lunch, dinner) at an additional cost.' },
  { q: 'Is Wi-Fi included?', a: 'Yes, high-speed 400 Mbps Wi-Fi is included in all room plans.' },
  { q: 'Is electricity included?', a: 'Electricity is charged separately based on actual consumption.' },
  { q: 'Is housekeeping provided?', a: 'Yes, daily housekeeping is included in all plans.' },
  { q: 'Is there a curfew?', a: 'No strict curfew. We have a late-night entry protocol for security purposes.' },
  { q: 'Are visitors allowed?', a: 'Visitors are welcome in common areas during designated hours.' },
  { q: 'What documents are required?', a: 'Aadhar card, college/company ID, and one passport-size photo.' },
  { q: 'What is the minimum stay?', a: 'Minimum stay is 6 months.' },
  { q: 'Is parking available?', a: 'Two-wheeler parking is available. Four-wheeler parking on request.' },
  { q: 'What is the cancellation policy?', a: '30-day notice required before vacating. Early exit charges may apply.' },
];

export const REVIEWS = [
  { name: 'Bhagayshri Wankhede', role: 'Engineering Student', rating: 5, text: 'Raigad House completely changed how I think about PG living. The gym, the community events, the fast Wi-Fi — it\'s everything I needed.', avatar: 'BW' },
  { name: 'Akash Fuke', role: 'Consultant', rating: 5, text: 'As someone who relocated from Amravati, finding Raigad House was a game-changer. Feels like home but better.', avatar: 'AF' },
  { name: 'Sneha Kulkarni', role: 'MBA Student', rating: 5, text: 'The study zones and community vibe are incredible. Made so many friends here. Highly recommend!', avatar: 'SK' },
  { name: 'Rahul Verma', role: 'Product Manager', rating: 5, text: 'Clean, safe, modern. The team is super responsive. Best PG experience I\'ve had in 3 cities.', avatar: 'RV' },
];

export const NEARBY = [
  { label: 'Alard College', time: '2 min', icon: '🎓' },
  { label: 'Hinjewadi IT Park', time: '5 min', icon: '💼' },
  { label: 'Tata Johnson Metro', time: '8 min', icon: '🚇' },
  { label: ' Mall Of Millennium', time: '12 min', icon: '🛍️' },
  { label: 'Hospital', time: '5 min', icon: '🏥' },
  { label: 'Restaurants', time: '3 min', icon: '🍽️' },
];

export const PRICING_COMPARE = [
  { feature: 'Monthly Rent', single: '₹12,999', double: '₹7,499', triple: '₹6,999' },
  { feature: 'Security Deposit', single: '₹10,000', double: '₹5,000', triple: '₹5,000' },
  { feature: 'Electricity', single: 'Actual', double: 'Actual', triple: 'Actual' },
  { feature: 'Wi-Fi', single: '✅', double: '✅', triple: '✅' },
  { feature: 'Housekeeping', single: '✅', double: '✅', triple: '✅' },
  { feature: 'Parking', single: '✅', double: '✅', triple: '✅' },
  
];

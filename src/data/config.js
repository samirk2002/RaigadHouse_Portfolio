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
    { icon: '🛜', label: 'Free Wi-Fi' },
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
  { q: 'Are boys and girls on separate floors?', a: 'Yes. Male and female residents are accommodated on separate floors. Common areas like the dining hall, lounge, and study room are shared during designated hours.' },
  { q: 'What is included in the rent?', a: 'Rent includes furnished room, Wi-Fi, housekeeping, RO water, and common area access. Food and electricity are optional add-ons.' },
  { q: 'Is the deposit refundable?', a: 'Yes, the security deposit is fully refundable within 7 working days after vacating, subject to no damages.' },
  { q: 'Are meals available?', a: 'Yes, we offer optional meal plans (breakfast, lunch, dinner) at an additional cost.' },
  { q: 'Is there a curfew?', a: 'No strict curfew. We have a late-night entry protocol for security purposes.' },
  { q: 'Are visitors allowed?', a: 'Visitors are welcome in common areas during designated hours.' },
  { q: 'What documents are required?', a: 'Aadhar card, college/company ID, and one passport-size photo.' },
  { q: 'Is parking available?', a: 'Two-wheeler parking is available. Four-wheeler parking on request.' },
];

export const REVIEWS = [
  {
    name: 'Akash Fuke',
    role: 'Resident',
    rating: 5,
    avatar: 'AF',
    date: 'November 2024',
    text: 'Excellent PG with clean rooms, good food, and a peaceful environment. The owner and staff are very supportive and responsive. Maintenance is timely, and the location is convenient. Overall, a great place to stay. Highly recommended!!!',
    source: 'Google',
    sourceUrl: 'https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6',
  },
  {
    name: 'Aarti Thorbole',
    role: 'Resident · 1.5 years',
    rating: 5,
    avatar: 'AT',
    date: 'October 2024',
    text: 'I have been living at Raigad House PG for the past one and a half years, and my overall experience has been very positive. The food quality is good, hygienic, and the meals are well-prepared. The environment is comfortable and feels like a home away from home. The staff and management are supportive and cooperative. Highly recommended for students and working professionals!',
    source: 'Google',
    sourceUrl: 'https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6',
  },
  {
    name: 'Bhumika Muluk',
    role: 'Resident',
    rating: 5,
    avatar: 'BM',
    date: 'September 2024',
    text: 'Staying at this PG has been a wonderful experience. The rooms are always clean, spacious, and well-maintained. The food is fresh, hygienic, and consistently good. The management is very cooperative and quick to resolve any concerns. One of the Best PG in Marunji!',
    source: 'Google',
    sourceUrl: 'https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6',
  },
  {
    name: 'Bhagyashri Wankhede',
    role: 'Engineering Student',
    rating: 5,
    avatar: 'BW',
    date: 'August 2024',
    text: 'Raigad House completely changed how I think about PG living. The community events, the fast Wi-Fi, the clean rooms — it\'s everything I needed as a student. The management is always available and helpful.',
    source: 'Google',
    sourceUrl: 'https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'MBA Student',
    rating: 5,
    avatar: 'SK',
    date: 'July 2024',
    text: 'The study zones and community vibe are incredible. Made so many friends here. The location near Hinjewadi IT Park is perfect for working professionals too. Highly recommend Raigad House!',
    source: 'Google',
    sourceUrl: 'https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6',
  },
  {
    name: 'Rahul Deshmukh',
    role: 'Working Professional',
    rating: 5,
    avatar: 'RD',
    date: 'June 2024',
    text: 'Best PG near Hinjewadi Phase 1. The rooms are well-furnished, Wi-Fi is fast and reliable, and the security is top-notch. The staff is always helpful. Great value for money compared to other PGs in the area.',
    source: 'Google',
    sourceUrl: 'https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6',
  },
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
  { feature: 'Wi-Fi', single: '✓', double: '✓', triple: '✓' },
  { feature: 'Housekeeping', single: '✓', double: '✓', triple: '✓' },
  { feature: 'Parking', single: '✓', double: '✓', triple: '✓' },
  
];

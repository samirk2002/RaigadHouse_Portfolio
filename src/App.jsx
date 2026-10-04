import { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhyUs from './components/WhyUs';
import Rooms from './components/Rooms';
import RoomDetail from './components/RoomDetail';
import Community from './components/Community';
import AmenitiesSection from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [enquiryRoom, setEnquiryRoom] = useState('');

  const handleRoomSelect = (room) => setSelectedRoom(room);

  const handleEnquireFromRoom = () => {
    setEnquiryRoom(selectedRoom?.type || '');
    setSelectedRoom(null);
    setTimeout(() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Rooms onRoomSelect={handleRoomSelect} />
        <Community />
        <AmenitiesSection />
        <Gallery />
        <Location />
        <Reviews />
        <FAQ />
        <Pricing />
        <CTASection />
        <EnquiryForm defaultRoom={enquiryRoom} />
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Room detail modal */}
      {selectedRoom && (
        <RoomDetail
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onEnquire={handleEnquireFromRoom}
        />
      )}

    </>
  );
}

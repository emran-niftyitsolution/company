import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersHero from '../components/careers/CareersHero';
import OpenPositions from '../components/careers/OpenPositions';
import Benefits from '../components/careers/Benefits';
import Culture from '../components/careers/Culture';

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersHero />
      <Benefits />
      <Culture />
      <OpenPositions />
      <Footer />
    </>
  );
}


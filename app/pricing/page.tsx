import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingHero from '../components/pricing/PricingHero';
import PricingPlans from '../components/pricing/PricingPlans';

export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingHero />
      <PricingPlans />
      <Footer />
    </>
  );
}


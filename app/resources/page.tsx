import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesHero from '../components/resources/ResourcesHero';
import ResourcesList from '../components/resources/ResourcesList';

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <ResourcesHero />
      <ResourcesList />
      <Footer />
    </>
  );
}


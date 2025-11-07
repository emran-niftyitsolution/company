import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudiesHero from '../components/case-studies/CaseStudiesHero';
import CaseStudiesList from '../components/case-studies/CaseStudiesList';

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </>
  );
}


import Header from '../components/Header';
import Footer from '../components/Footer';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsList from '../components/solutions/SolutionsList';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <SolutionsHero />
      <SolutionsList />
      <Footer />
    </>
  );
}


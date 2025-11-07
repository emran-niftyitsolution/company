import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogHero from '../components/blog/BlogHero';
import BlogPosts from '../components/blog/BlogPosts';

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </>
  );
}


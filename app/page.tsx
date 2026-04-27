import { fetchNews } from "@/lib/fetchNews";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import NewsSidebar from "@/components/NewsSidebar";
import Footer from "@/components/Footer";

export const revalidate = 21600;

export default async function Home() {
  const news = await fetchNews(6);

  return (
    <main className="h-screen flex flex-col overflow-hidden">
      {/* Fixed nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-5xl mx-auto px-6 h-10 flex items-center">
          <span className="font-mono text-sm font-semibold tracking-tight text-white">ac-ai-agent</span>
        </nav>
      </div>

      {/* Nav spacer */}
      <div className="h-10 flex-shrink-0" />

      {/* Hero */}
      <HeroSection />

      {/* About strip */}
      <AboutSection />

      {/* Portfolio | News — fills all remaining space */}
      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 min-h-0">
        <div className="border-r border-neutral-100 min-h-0">
          <ShowcaseSection />
        </div>
        <div className="min-h-0">
          <NewsSidebar items={news} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

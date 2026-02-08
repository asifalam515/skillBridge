import Footer from "@/components/(shared)/Footer";
import Navbar from "@/components/(shared)/Navbar";
import HeroSection from "@/components/home/HeroSection";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto px-4">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

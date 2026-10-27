import Footer from "./_components/Footer";
import HowWeHelp from "./_components/HowWeHelp";
import OurWorkSystem from "./_components/OurWorkSystem";
import Tech from "./_components/Tech";
import Testimonials from "./_components/Testimonials";
import WhoWeAre from "./_components/WhoWeAre";
import WorkTogether from "./_components/WorkTogether";
import Navbar from "./_layouts/Navbar";
import Hero from "./_components/Hero";
import OurProjects from "./_components/OurProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <div id="about">
        <WhoWeAre />
      </div>
      <div id="services">
        <HowWeHelp />
      </div>
      <div id="portofolio">
        <OurProjects />
      </div>
      <OurWorkSystem />
      <div id="testimoni">
        <Testimonials />
      </div>
      <WorkTogether />
      <Footer />
    </>
  );
}
import Footer from "./[components]/Footer";
import HowWeHelp from "./[components]/HowWeHelp";
import OurProjects from "./projects/page";
import OurWorkSystem from "./[components]/OurWorkSystem";
import Tech from "./[components]/Tech";
import Testimonials from "./[components]/Testimonials";
import WhoWeAre from "./[components]/WhoWeAre";
import WorkTogether from "./[components]/WorkTogether";
import Navbar from "./[layouts]/Navbar";
import Hero from "./[components]/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <WhoWeAre />
      <HowWeHelp />
      <OurProjects />
      <OurWorkSystem />
      <Testimonials />
      <WorkTogether />
      <Footer/>
    </>
  )
}
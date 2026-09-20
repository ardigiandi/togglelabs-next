import HowWeHelp from "./[components]/HowWeHelp";
import OurProjects from "./[components]/OurProjects";
import OurWorkSystem from "./[components]/OurWorkSystem";
import Tech from "./[components]/Tech";
import Testimonials from "./[components]/Testimonials";
import WhoWeAre from "./[components]/WhoWeAre";
import WorkTogether from "./[components]/WorkTogether";
import Navbar from "./[layouts]/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Tech />
      <WhoWeAre />
      <HowWeHelp />
      <OurProjects />
      <OurWorkSystem />
      <Testimonials />
      {/* <WorkTogether /> */}
    </>
  )
}
import CardLayout from "./CardLayout";
import CardProjects from "./CardProjects";

export default function OurProjects() {
  return (
    <CardLayout
      subtitle="Featured Projects"
      title="Designing digital experiences that create meaningful impact."
      description="We partner with businesses to redesign websites and digital products that are easier to use, visually refined, and built to support long-term growth."
      image="/images/arrow-right.svg"
      next="See All Projects"
    >
      <CardProjects />
    </CardLayout>
  );
}

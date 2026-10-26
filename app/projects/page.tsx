import CardProjects from "@/app/_components/CardProjects";
import CardLayout from "@/app/_components/CardLayout";

export default function ProjectsPage() {
  return (
    <section className="pt-20 ">
      <CardLayout
        subtitle="All Projects"
        title="Every project we've crafted, in one place."
        description="Dive deep into each project and discover how we help businesses transform their websites and digital products into refined, user-friendly experiences that are built to support long-term growth."
      >
        <CardProjects />
      </CardLayout>
    </section>
  );
}

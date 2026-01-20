import PageTitle from "@/ui/layout/PageTitle";
import AllProjects from "@/ui/projects/AllProjects";

export default async function PageProjects() {
  return (
    <>
      <PageTitle
        title="Projects"
        subtitle="Everything we're working on"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
      arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
      feugiat egestas."
      />
      <AllProjects />
    </>
  );
}

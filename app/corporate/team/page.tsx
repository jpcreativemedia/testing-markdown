import TeamMembers from "@/ui/corporate/TeamMembers";
import PageTitle from "@/ui/layout/PageTitle";

export default async function PageTeam() {
  return (
    <>
      <PageTitle
        title="Team"
        subtitle="Our team is our family"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
      arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
      feugiat egestas."
      />
      <section className="w-full">
        <TeamMembers
          department="Directors"
          caption={"The people who lead us"}
        />
      </section>
      <section className="w-full">
        <TeamMembers
          department="Management"
          caption={"The people who run things"}
        />
      </section>
    </>
  );
}

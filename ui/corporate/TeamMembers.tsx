import Image from "next/image";
import { getTeam } from "@/data/team";

export default async function TeamMembers({
  department,
  caption,
}: {
  department: string;
  caption: string;
}) {
  const teamMembers = await getTeam();

  const filteredTeamMembers = teamMembers
    .filter((member) => member.metadata.department === department)
    .sort((a, b) => a.metadata.order - b.metadata.order);

  return (
    <>
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-4xl">
        {department}
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">{caption}</p>

      <div className="mx-auto w-full grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 md:max-w-none md:grid-cols-3">
        {filteredTeamMembers.map((member) => (
          <article
            key={member.metadata.id}
            className="flex w-full flex-col gap-4 items-start justify-start relative"
          >
            <Image
              src={member.metadata.photo ?? "/images/man_placeholder.png"}
              alt={member.metadata.name}
              width={1920}
              height={1080}
              className="w-2xl"
            />
            <div className="">
              <h3 className="relative z-10 text-2xl font-semibold tracking-tight text-pretty text-primary sm:text-3xl">
                {member.metadata.name}
              </h3>
              <p className="relative z-10 rounded-field text-accent py-1.5 font-medium text-sm">
                {member.metadata.title}
              </p>
            </div>
            <details
              className="collapse bg-base-100 border border-base-300"
              name="accordion-details-team-member"
            >
              <summary className="collapse-title font-semibold">
                Biography
              </summary>
              <div className="collapse-content text-sm bg-base-100 border border-base-300 border-t-0 shadow-lg max-h-96 overflow-y-auto z-50">
                <member.biography />
              </div>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}

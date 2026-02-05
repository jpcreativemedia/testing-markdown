import { Fragment } from "react";

const locations = [
  {
    name: "2026",
    people: [
      {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
      },
      {
        name: "Courtney Henry",
        title: "Designer",
        email: "courtney.henry@example.com",
        role: "Admin",
      },
    ],
  },
  // More people...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
  return (
    <table className="min-w-full">
      <tbody className="bg-white">
        {locations.map((location) => (
          <Fragment key={location.name}>
            <tr className="border-t border-gray-200">
              <th
                scope="colgroup"
                colSpan={5}
                className="bg-gray-50 py-2 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                {location.name}
              </th>
            </tr>
            {location.people.map((person, personIdx) => (
              <tr
                key={person.email}
                className={classNames(
                  personIdx === 0 ? "border-gray-300" : "border-gray-200",
                  "border-t",
                )}
              >
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                  {person.name}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  {person.title}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  {person.email}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  {person.role}
                </td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

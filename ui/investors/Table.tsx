import { Fragment } from "react";
import { filings } from "@/data/documents";

export default function Table() {
  return (
    <table className="min-w-full">
      <tbody className="bg-white">
        {filings.map((year) => (
          <Fragment key={year.year}>
            <tr key={year.year} className="border-t border-gray-200">
              <th
                scope="colgroup"
                colSpan={5}
                className="bg-gray-50 py-2 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                {year.year}
              </th>
            </tr>
            {year.entries
              .sort(
                (a, b) =>
                  new Date(b.postDate).getTime() -
                  new Date(a.postDate).getTime(),
              )
              .map((entry) => (
                <tr key={entry.id} className="border-t border-gray-200">
                  <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                    {entry.title}
                  </td>
                  <td className="text-right py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                    <a
                      href={entry.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

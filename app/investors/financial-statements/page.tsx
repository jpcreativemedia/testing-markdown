import Table from "@/ui/investors/Table";
import PageTitle from "@/ui/layout/PageTitle";

export default function PageInvestors() {
  return (
    <>
      <PageTitle
        title="Financial Statements"
        subtitle="All of our Filings"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
      arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
      feugiat egestas."
      />
      <section className="flex flex-col gap-4 w-full">
        <Table />
      </section>
    </>
  );
}

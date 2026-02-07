import { Suspense } from "react";
import StockChart from "@/ui/investors/StockChart";
import PageTitle from "@/ui/layout/PageTitle";

export default function PageInvestors() {
  return (
    <>
      <PageTitle
        title="Shareholder Information"
        subtitle="Check on your investment"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
      arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
      feugiat egestas."
      />
      <section className="flex flex-col gap-4 w-full">
        <StockChart />
      </section>
    </>
  );
}

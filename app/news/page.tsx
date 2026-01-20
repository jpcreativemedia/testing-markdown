import PageTitle from "@/ui/layout/PageTitle";
import AllNews from "@/ui/news/AllNews";

export default function PageNews() {
  return (
    <>
      <PageTitle
        title="News"
        subtitle="Read the latest information from us"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
      arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
      feugiat egestas."
      />
      <AllNews />
    </>
  );
}

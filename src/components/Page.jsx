import TabNavigation from "./TabNavigation";
import TableOfContents from "./TableOfContent";
import ContentSection from "./RegisteredCompany/ContentSection";
import Bevrages from "./Bevrages/Bevrages";

const Page = () => {
  return (
    <div className=" bg-white">
      <TabNavigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex gap-8">
          <TableOfContents />
          <ContentSection />
        </div>
        <Bevrages />
      </main>
    </div>
  );
};

export default Page;

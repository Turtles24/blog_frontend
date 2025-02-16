import { Tabs } from "@/component/Tabs/Tab";
import { Header } from "@/containers/ui/header";
import Pagination from "@/containers/ui/Pagination";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import ArticleSection from "@/pages/main/container/ArticleSection";

export function Main() {
  const { currentPage, handlePageChange } = useCurrentPage(1);

  return (
    <div className="main">
      <div className="main_content ">
        <Header />

        <div className="mt-9"></div>

        <div className="flex justify-start">
          <Tabs items={["주간", "조직", "기술"]} styleVariant="rounded" />
        </div>

        <div className="mt-24"></div>

        <ArticleSection />

        <div className="mt-24"></div>

        <Pagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

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

        <ArticleSection />

        <Pagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

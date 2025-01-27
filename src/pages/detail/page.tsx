import { ArticleTop } from "@/component/ui/articleTop";
import { UpdateInfo } from "@/component/ui/updateInfo";
import { Divider } from "@/containers/ui/divider";
import { Header } from "@/containers/ui/header";
import Pagination from "@/containers/ui/Pagination";
import { useCurrentPage } from "@/hooks/useCurrentPage";

export function Detail() {
  const { currentPage, handlePageChange } = useCurrentPage(1);

  return (
    <div className="main">
      <div className="main_content ">
        <Header />
        <ArticleTop />
        <UpdateInfo />
        <Divider />
        <Pagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

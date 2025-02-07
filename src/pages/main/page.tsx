import { Header } from "@/containers/ui/header";
import ArticleSection from "@/pages/main/container/ArticleSection";
import { PageNavigator } from "@/containers/component/pageNavigator";
import { useState } from "react";
import { Tabs } from "@/containers/ui/Tabs";

export function Main() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 여기에 페이지 변경 시 필요한 로직 추가
  };

  return (
    <div className="main">
      <div className="main_content">
        <Header />
        <div className="mt-6 flex justify-start">
          <Tabs 
            items={["전체", "주간", "월간"]}
            initialActiveIndex={0}
            styleVariant="rounded"
          />
        </div>
        <ArticleSection />
        <PageNavigator 
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

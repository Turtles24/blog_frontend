import { Tabs } from "@/component/Tabs/Tab";
import { Header } from "@/containers/ui/header";
import Pagination from "@/containers/ui/Pagination";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import ArticleSection from "@/pages/main/container/ArticleSection";
import { useState } from "react";

export function Main() {
  const { currentPage, handlePageChange } = useCurrentPage(1);
  // 초기 탭 상태를 "주간"으로 설정
  const [tabsItem, setTabsItem] = useState("주간");

  return (
    <div className="main">
      <div className="main_content">
        <Header />

        <div className="mt-9"></div>

        <div className="flex justify-start">
          <Tabs
            items={["주간", "조직", "기술"]}
            styleVariant="rounded"
            onTabChange={(item) => setTabsItem(item)}
          />
        </div>

        <div className="mt-24"></div>

        {/* 선택된 탭 상태를 ArticleSection의 theme prop으로 전달 */}
        <ArticleSection theme={tabsItem} />

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

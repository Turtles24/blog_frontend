import { Header } from "@/containers/ui/header";
import ArticleSection from "@/pages/main/container/ArticleSection";

export function Main() {
  return (
    <div className="main">
      <div className="main_content ">
        <Header />

        <ArticleSection />
      </div>
    </div>
  );
}

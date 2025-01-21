import { ArticleTop } from "@/component/ui/articleTop";
import { UpdateInfo } from "@/component/ui/updateInfo";
import { Divider } from "@/containers/ui/divider";
import { Header } from "@/containers/ui/header";

export function Detail() {
  return (
    <div className="main">
      <div className="main_content ">
        <Header />
        <ArticleTop />
        <UpdateInfo />
        <Divider />
      </div>
    </div>
  );
}

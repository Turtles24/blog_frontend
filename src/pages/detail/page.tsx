import { ArticleTop } from "@/component/ui/articleTop";
import { UpdateInfo } from "@/component/ui/updateInfo";
import { Divider } from "@/containers/ui/divider";
import { Header } from "@/containers/ui/header";
import Pagination from "@/containers/ui/Pagination";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import { useDelBoardPosts } from "@/hooks/useDelArticles";
import { usePatchArticles } from "@/hooks/usePatchBoardPosts";
import { useEffect, useState } from "react";
import { data, useLocation, useNavigate } from "react-router-dom";

export function Detail() {
  const location = useLocation();
  const [articleId, setArticleId] = useState<number | null>(null);
  const navigate = useNavigate();

  const patchArticlesMutation = usePatchArticles();

  useEffect(() => {
    if (location.state?.articleId) {
      setArticleId(location.state.articleId);
    } else {
      console.warn("정보를 찾을 수 없습니다.");
    }
  }, [location]);

  const { mutate } = useDelBoardPosts();

  const handleDeleteClick = () => {
    if (articleId !== null) {
      mutate({ articleId });
      console.log("삭제 성공");
    } else {
      console.error("정보를 찾을 수 없습니다.");
    }
  };

  const patchData = {
    theme: "정주진",
    title: "대주진",
    content: "대은성",
    subTitle: "대 은 성",
  };

  const handlePatchClick = async () => {
    try {
      const check = window.confirm("편집하시겠습니까?");
      if (check) {
        await patchArticlesMutation.mutateAsync({ articleId, ...patchData });
        navigate(`/`);
        console.log(patchData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { currentPage, handlePageChange } = useCurrentPage(1);

  return (
    <div className="main">
      <div className="main_content ">
        <Header />
        <ArticleTop />
        <UpdateInfo />
        <Divider />

        <button
          onClick={handleDeleteClick}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          삭제
        </button>

        <button
          onClick={handlePatchClick}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          수정
        </button>

        <Pagination
          totalPages={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

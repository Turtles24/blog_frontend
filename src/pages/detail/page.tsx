import { ArticleTop } from "@/component/ui/articleTop";
import { Divider } from "@/containers/ui/divider";
import { Header } from "@/containers/ui/header";
import Pagination from "@/containers/ui/Pagination";
import { useGetArticlesDetail } from "@/hooks/apis/useGetArticlesDetail";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import { useDelArticles } from "@/hooks/useDelArticles";
import { usePatchArticles } from "@/hooks/usePatchBoardPosts";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import DetailContent from "./container/DetailContent";

export function Detail() {
  const { currentPage, handlePageChange } = useCurrentPage(1);
  const location = useLocation();
  const [articleId, setArticleId] = useState<number | null>(null);
  const [articleData, setArticleData] = useState();
  const navigate = useNavigate();

  const patchArticlesMutation = usePatchArticles();
  const queryClient = useQueryClient();
  const { mutate } = useDelArticles();

  const {
    data: resp,
    isLoading,
    isError,
    refetch,
  } = useGetArticlesDetail(articleId);

  useEffect(() => {
    setArticleData(resp?.result);
    console.log(articleData);
  }, [articleData, resp]);

  useEffect(() => {
    if (!queryClient.getQueryData(["get-articles-detail"])) {
      refetch();
    }
  }, [queryClient, refetch]);

  useEffect(() => {
    if (location.state?.articleId) {
      setArticleId(location.state.articleId);
    } else {
      console.warn("정보를 찾을 수 없습니다.");
    }
  }, [location]);

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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading articles</p>;
  return (
    <div className="main">
      <div className="main_content ">
        <Header />
        <div className="mt-36"></div>
        <ArticleTop title={articleData?.title} date={articleData?.uploadDate} />
        <div className="mt-8"></div>
        <Divider />

        <DetailContent content={articleData?.content} />

        <button
          onClick={handlePatchClick}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          수정
        </button>

        <button
          onClick={() => {
            mutate({ articleId });
            navigate("/");
            window.location.reload();
          }}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          삭제
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
